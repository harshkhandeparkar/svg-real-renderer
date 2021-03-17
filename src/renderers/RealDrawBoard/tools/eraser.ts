import { getCircleNode } from '../../../pathMakers/circle';
import { getLinePathCommand } from '../../../pathMakers/line';
import { getRGBColorString } from '../../../util/getRGBColorString';
import { Path } from '../../RealRenderer/strokeNodes/_path';
import { RealDrawBoard } from '../RealDrawBoard';

export const name = 'eraser';

export interface EraserSettings {
  eraserSize: number
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
      this.toolSettings.eraserSize / 2,
      this.bgColor
    )
  )
}

export function _endStroke(
  this: RealDrawBoard,
  endCoords: [number, number],
  identifier: string
) {
  this._doPreview = true;
  this.strokes[this._strokeIndex].push(
    getCircleNode(
      endCoords,
      this.toolSettings.eraserSize / 2,
      this.bgColor
    )
  )
}

export function _doStroke(
  this: RealDrawBoard,
  coords: [number, number],
  identifier: string
) {
  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      this.toolSettings.eraserSize / 2,
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
  // return <Texture>this._previewPlot(
  //   this.graphPixels,
  //   coords[0],
  //   coords[1],
  //   this.toolSettings.eraserSize,
  //   this.bgColor
  // )
}
