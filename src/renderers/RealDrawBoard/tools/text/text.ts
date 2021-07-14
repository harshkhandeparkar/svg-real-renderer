import { RealDrawBoard } from '../../RealDrawBoard';
import { Color, Coordinate } from '../../../../types/RealRendererTypes';
import { getRGBColorString } from '../../../../util/getRGBColorString';

import { Text } from '../../../RealRenderer/strokeNodes/_text';
import { _mapKeyToAction } from './_mapKeyToAction';

export const name = 'text';

export interface ITextSettings {
  fontSize: number;
  fontColor: Color;
  mode: 'new' | 'edit';
}

export type TextOptions = ITextSettings | {};

export const TextDefaults: ITextSettings = {
  fontSize: 10,
  fontColor: [1, 1, 1],
  mode: 'new'
}

/** key -> identifier, value -> coordinate
 *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
 */
const _startCoords: Map<string, [number, number]> = new Map(); /* key -> identifier, value -> coordinate*/

let _selectedNode: Text;

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

  const textPath = new Text(coords, 'Enter Text', 'strokes');
  textPath.setFill(getRGBColorString(this.toolSettings.fontColor));
  textPath.setFontSize(this.toolSettings.fontSize);

  this._addStroke([textPath]);
  this._strokeIdentifierMap.set(identifier, this._strokeIndex);

  _startCoords.set(identifier, coords);

  this.on('tool-setting-change', 'text-tool-handler', ({settingName, newValue}) => {
    if (settingName === 'fontColor') _selectedNode.setFill(getRGBColorString(newValue as Color));
    if (settingName === 'fontSize') _selectedNode.setFontSize(newValue as number);
  })

  if (_selectedNode) _selectedNode.destroyCursor();
  _selectedNode = textPath;
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
  if (_selectedNode) {
    e.preventDefault();
    _mapKeyToAction(e, _selectedNode);
  }
}
