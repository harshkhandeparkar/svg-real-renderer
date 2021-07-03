import { RealDrawBoard } from '../RealDrawBoard';
import { Color, Coordinate } from '../../../types/RealRendererTypes';
import { getRGBColorString } from '../../../util/getRGBColorString';

import { Text } from '../../RealRenderer/strokeNodes/_text';

import { getRadiusFromThickness } from './util/getRadiusFromThickness';

export const name = 'text';

export interface ITextSettings {
  fontSize: number;
  fontColor: Color;
  mode: 'new' | 'edit';
}

export type TextOptions = ITextSettings | {};

export const TextDefaults: ITextSettings = {
  fontSize: 1,
  fontColor: [1, 1, 1],
  mode: 'new'
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
  if (this._previewStroke.has(identifier)) {
    this._previewStroke.get(identifier).forEach((strokeNode) => {
      strokeNode.delete();
    })
  }

  const textPath = new Text(coords, '', 'strokes');
  textPath.setStroke(getRGBColorString(this.toolSettings.fontColor));
  textPath.setStrokeWidth(this.toolSettings.fontSize);

  this._addStroke([textPath]);
  this._strokeIdentifierMap.set(identifier, this._strokeIndex);

  _startCoords.set(identifier, coords);
}

export function _endStroke(
  this: RealDrawBoard,
  endCoords: Coordinate,
  identifier: string
) {
}

export function _doStroke(
  this: RealDrawBoard,
  coords: Coordinate,
  identifier: string
) {
}

export function _toolPreview(
  this: RealDrawBoard,
  coords: Coordinate,
  identifier: string
) {
}

export function _onScroll(
  this: RealDrawBoard,
  scrollDelta: number,
  coords: Coordinate,
  identifier: string
) {
}

export function _onKey(
  this: RealDrawBoard,
  e: KeyboardEvent
) {
  console.log(e);
}
