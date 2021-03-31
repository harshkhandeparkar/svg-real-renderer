import { getCircleNode } from '../../../pathMakers/circle';
import { getLinePathCommand } from '../../../pathMakers/line';
import { getRGBColorString } from '../../../util/getRGBColorString';
import { Circle } from '../../RealRenderer/strokeNodes/_circle';
import { Path } from '../../RealRenderer/strokeNodes/_path';
import { RealDrawBoard } from '../RealDrawBoard';

export const name = 'eraser';

export interface EraserSettings {
  eraserSize?: number
}

export const EraserDefaults: EraserSettings = {
  eraserSize: 2
}

export function _startStroke(
  this: RealDrawBoard,
  coords: [number, number],
  identifier: string
) {
  this._doPreview = false;

  const brushPath = new Path('');
  brushPath.setStroke(getRGBColorString(this.bgColor));
  brushPath.setStrokeWidth(this.toolSettings.eraserSize);

  this._addStroke([brushPath]);
  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      this.toolSettings.eraserSize / 2 - 0.5,
      this.bgColor
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
      this.bgColor
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
      this.bgColor
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
      this.bgColor
    )

    circleNode.setFill(getRGBColorString(this.bgColor));
    circleNode.setStroke(getRGBColorString(this.bgColor));

    this._previewStroke.get(identifier).push(circleNode);
  }
  else {
    const circleNode = <Circle>this._previewStroke.get(identifier)[0]
    circleNode.updateCenter(coords);
    circleNode.updateRadius(this.toolSettings.eraserSize / 2 - 0.5);
  }
}
