import { getCircleNode } from '../../../pathMakers/circle';
import { getLinePathCommand } from '../../../pathMakers/line';
import { Color } from '../../../types/RealRendererTypes';
import { getRGBColorString } from '../../../util/getRGBColorString';
import { Circle } from '../../RealRenderer/strokeNodes/_circle';
import { Path } from '../../RealRenderer/strokeNodes/_path';
import { RealDrawBoard } from '../RealDrawBoard';

export const name = 'eraser';

export interface IEraserSettings {
  eraserSize: number;
}

export type EraserOptions = IEraserSettings | {};

export const EraserDefaults: IEraserSettings = {
  eraserSize: 2
}

export function _startStroke(
  this: RealDrawBoard,
  coords: [number, number],
  identifier: string
) {
  const brushPath = new Path('', 'strokes');
  brushPath.setStroke(getRGBColorString(this.bgColor));
  brushPath.setStrokeWidth(this.toolSettings.eraserSize);

  this._addStroke([brushPath]);
  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      this.toolSettings.eraserSize / 2 - 0.5,
      this.bgColor,
      'strokes'
    )
  )
}

export function _endStroke(
  this: RealDrawBoard,
  endCoords: [number, number],
  identifier: string
) {
  this.strokes[this._strokeIndex].push(
    getCircleNode(
      endCoords,
      this.toolSettings.eraserSize / 2 - 0.5,
      this.bgColor,
      'strokes'
    )
  )

  this._doPreview = true;
}

export function _doStroke(
  this: RealDrawBoard,
  coords: [number, number],
  identifier: string
) {
  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      this.toolSettings.eraserSize / 2 - 0.5,
      this.bgColor,
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
  coords: [number, number],
  identifier: string
 ) {
  if (this._previewStroke.get(identifier).length == 0) {
    const circleNode = getCircleNode(
      coords,
      this.toolSettings.eraserSize / 2 - 0.5,
      this.bgColor,
      'overlay'
    )

    circleNode.setFill(getRGBColorString(this.bgColor));
    circleNode.setStroke(getRGBColorString(this.bgColor));
    circleNode.setDashed(getRGBColorString(this.bgColor.map((c) => 1 - c) as Color));

    this._previewStroke.get(identifier).push(circleNode);
  }
  else {
    const circleNode = <Circle>this._previewStroke.get(identifier)[0]
    circleNode.updateCenter(coords);
    circleNode.updateRadius(this.toolSettings.eraserSize / 2 - 0.5);
  }
}
