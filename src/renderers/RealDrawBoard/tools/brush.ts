import { RealDrawBoard } from '../RealDrawBoard';
import { Color, Coordinate } from '../../../types/RealRendererTypes';
import { Path } from '../../RealRenderer/strokeNodes/_path';
import { getRGBColorString } from '../../../util/getRGBColorString';
import { getCircleNode } from '../../../pathMakers/circle';
import { getLinePathCommand } from '../../../pathMakers/line';
import { Circle } from '../../RealRenderer/strokeNodes/_circle';

import { getRadiusFromThickness } from './util/getRadiusFromThickness';

export const name = 'brush';

export interface IBrushSettings {
  brushColor: Color;
  brushSize: number;
}

export type BrushOptions = IBrushSettings | {};

export const BrushDefaults: IBrushSettings = {
  brushColor: [1, 1, 1],
  brushSize: 1
}

export function _startStroke(
  this: RealDrawBoard,
  coords: Coordinate,
  identifier: string
) {
  this._doPreview = false;

  const brushPath = new Path('', 'strokes');
  brushPath.setStroke(getRGBColorString(this.toolSettings.brushColor));
  brushPath.setStrokeWidth(this.toolSettings.brushSize);

  this._addStroke([brushPath]);
  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      getRadiusFromThickness(this.toolSettings.brushSize),
      this.toolSettings.brushColor,
      'strokes'
    )
  )
}

export function _endStroke(
  this: RealDrawBoard,
  endCoords: Coordinate,
  identifier: string
) {
  this.strokes[this._strokeIndex].push(
    getCircleNode(
      endCoords,
      getRadiusFromThickness(this.toolSettings.brushSize),
      this.toolSettings.brushColor,
      'strokes'
    )
  )

  this._doPreview = true;
}

export function _doStroke(
  this: RealDrawBoard,
  coords: Coordinate,
  identifier: string
) {
  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      getRadiusFromThickness(this.toolSettings.brushSize),
      this.toolSettings.brushColor,
      'strokes'
    )
  );

  (<Path>this.strokes[this._strokeIndex][0]).appendPath(
    getLinePathCommand(
      this._lastCoords.get(identifier),
      coords
    )
  )
}

export function _toolPreview(
  this: RealDrawBoard,
  coords: Coordinate,
  identifier: string
) {
  if (!this._previewStroke.has(identifier)) this._previewStroke.set(identifier, []);

  if (this._previewStroke.get(identifier).length == 0) {
    const circleNode = getCircleNode(
      coords,
      getRadiusFromThickness(this.toolSettings.brushSize),
      this.toolSettings.brushColor,
      'overlay'
    )

    circleNode.setFill(getRGBColorString(this.toolSettings.brushColor));
    circleNode.setStroke(getRGBColorString(this.toolSettings.brushColor));

    this._previewStroke.get(identifier).push(circleNode);
  }
  else {
    const circleNode = <Circle>this._previewStroke.get(identifier)[0];
    circleNode.updateCenter(coords);
    circleNode.updateRadius(getRadiusFromThickness(this.toolSettings.brushSize));
    circleNode.setFill(getRGBColorString(this.toolSettings.brushColor));
    circleNode.setStroke(getRGBColorString(this.toolSettings.brushColor));
  }
}

export function _onScroll(
  this: RealDrawBoard,
  scrollDelta: number,
  coords: Coordinate,
  identifier: string
) {
  this.changeToolSetting('brushSize', Math.max(1, this.toolSettings.brushSize - scrollDelta));

  if (this._previewStroke.get(identifier) && this._previewStroke.get(identifier).length !== 0) {
    (this._previewStroke.get(identifier)[0] as Circle).updateRadius(getRadiusFromThickness(this.toolSettings.brushSize));
    this._display(this._previewStroke.get(identifier));
  }

  this._toolPreview(coords, identifier);
}
