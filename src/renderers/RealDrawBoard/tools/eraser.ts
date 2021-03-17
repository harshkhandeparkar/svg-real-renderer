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
}

export function _endStroke(
  this: RealDrawBoard,
  endCoords: [number, number],
  identifier: string
) {
  this._doPreview = true;
}

export function _doStroke(
  this: RealDrawBoard,
  coords: [number, number],
  identifier: string
) {
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
