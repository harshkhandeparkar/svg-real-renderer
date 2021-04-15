import { RealDrawBoard } from '../RealDrawBoard';
import { Color, Coordinate } from '../../../types/RealRendererTypes';
import { getCircleNode } from '../../../pathMakers/circle';
import { getRGBColorString } from '../../../util/getRGBColorString';
import { Path } from '../../RealRenderer/strokeNodes/_path';
import { getLinePathCommand } from '../../../pathMakers/line';
import { Circle } from '../../RealRenderer/strokeNodes/_circle';

import { getRadiusFromThickness } from './util/getRadiusFromThickness';

export const name = 'line';

export interface ILineSettings {
  lineThickness: number;
  lineColor: Color;
}

export type LineOptions = ILineSettings | {};

export const LineDefaults: ILineSettings = {
  lineThickness: 1,
  lineColor: [1, 1, 1]
}

/** key -> identifier, value -> coordinate
   *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
   */
const _startCoords: Map<string, [number, number]> = new Map(); /* key -> identifier, value -> coordinate*/

export function _startStroke(
  this: RealDrawBoard,
  coords: Coordinate,
  identifier: string
) {
  this._doPreview = false;

  const linePath = new Path('', 'strokes');
  linePath.setStroke(getRGBColorString(this.toolSettings.lineColor));
  linePath.setStrokeWidth(this.toolSettings.lineThickness);

  this._addStroke([linePath]);

  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      getRadiusFromThickness(this.toolSettings.lineThickness),
      this.toolSettings.lineColor,
      'strokes'
    )
  )

  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      getRadiusFromThickness(this.toolSettings.lineThickness),
      this.toolSettings.lineColor,
      'strokes'
    )
  )

  _startCoords.set(identifier, coords);
}

export function _endStroke(
  this: RealDrawBoard,
  endCoords: Coordinate,
  identifier: string
) {
  (<Path>this.strokes[this._strokeIndex][0]).updatePath(
    getLinePathCommand(
      _startCoords.get(identifier),
      endCoords
    )
  );

  (<Circle>this.strokes[this._strokeIndex][2]).updateCenter(endCoords);

  _startCoords.delete(identifier);
  this._doPreview = true;
}

export function _doStroke(
  this: RealDrawBoard,
  coords: Coordinate,
  identifier: string
) {
  (<Path>this.strokes[this._strokeIndex][0]).updatePath(
    getLinePathCommand(
      _startCoords.get(identifier),
      coords
    )
  );

  (<Circle>this.strokes[this._strokeIndex][2]).updateCenter(coords);
}

export function _toolPreview(
  this: RealDrawBoard,
  coords: Coordinate,
  identifier: string
) {
  if (this._previewStroke.get(identifier).length == 0) {
    const circleNode = getCircleNode(
      coords,
      getRadiusFromThickness(this.toolSettings.lineThickness),
      this.toolSettings.lineColor,
      'overlay'
    )

    circleNode.setFill(getRGBColorString(this.toolSettings.lineColor));
    circleNode.setStroke(getRGBColorString(this.toolSettings.lineColor));

    this._previewStroke.get(identifier).push(circleNode);
  }
  else {
    const circleNode = <Circle>this._previewStroke.get(identifier)[0]
    circleNode.updateCenter(coords);
    circleNode.updateRadius(getRadiusFromThickness(this.toolSettings.lineThickness));
    circleNode.setFill(getRGBColorString(this.toolSettings.lineColor));
    circleNode.setStroke(getRGBColorString(this.toolSettings.lineColor));
  }
}

export function _onScroll(
  this: RealDrawBoard,
  scrollDelta: number,
  coords: Coordinate,
  identifier: string
) {
  this.changeToolSetting('lineThickness', Math.max(1, this.toolSettings.lineThickness - scrollDelta));

  if (this._previewStroke.get(identifier) && this._previewStroke.get(identifier).length !== 0) {
    (this._previewStroke.get(identifier)[0] as Circle).updateRadius(getRadiusFromThickness(this.toolSettings.brushSize));
    this._display(this._previewStroke.get(identifier));
  }
}

