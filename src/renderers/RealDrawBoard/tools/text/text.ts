import { RealDrawBoard } from '../../RealDrawBoard';
import { Color, Coordinate } from '../../../../types/RealRendererTypes';
import { getRGBColorString } from '../../../../util/getRGBColorString';

import { Text } from '../../../RealRenderer/strokeNodes/_text/_text';
import { Polygon } from '../../../RealRenderer/strokeNodes/_polygon';
import { _mapKeyToAction } from './_mapKeyToAction';

export const name = 'text';

export interface ITextSettings {
  fontSize: number;
  fontColor: Color;
  textToolMode: 'new' | 'edit';
}

export type TextOptions = ITextSettings | {};

export const TextDefaults: ITextSettings = {
  fontSize: 10,
  fontColor: [1, 1, 1],
  textToolMode: 'new'
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
  if (this.toolSettings.textToolMode === 'new') {
    if (this._previewStroke.has(identifier)) {
      this._previewStroke.get(identifier).forEach((strokeNode) => {
        strokeNode.delete();
      })
    }

    _startCoords.set(identifier, coords);

    const boundingBox = new Polygon([coords, coords, coords, coords], 'overlay');
    boundingBox.setDashed(getRGBColorString([0.5, 0.5, 0.5]));
    boundingBox.setFill('transparent');

    this._previewStroke.set(identifier, [boundingBox]);
  }
}

export function _endStroke(
  this: RealDrawBoard,
  endCoords: Coordinate,
  identifier: string
) {
  if (this.toolSettings.textToolMode === 'new') {
    const [startX, startY] = _startCoords.get(identifier);
    const [endX, endY] = endCoords;

    const baselineCoords: Coordinate = [
      (startX + endX) / 2,
      (startY + endY) / 2
    ]

    const textPath = new Text(baselineCoords, 'Enter Text', 'strokes');

    textPath.setFill(getRGBColorString(this.toolSettings.fontColor));
    textPath.setFontSize(this.toolSettings.fontSize);

    this._addStroke([textPath]);
    this._strokeIdentifierMap.set(identifier, this._strokeIndex);

    this.on('tool-setting-change', 'text-tool-handler', ({settingName, newValue}) => {
      if (settingName === 'fontColor') _selectedNode.setFill(getRGBColorString(newValue as Color));
      if (settingName === 'fontSize') _selectedNode.setFontSize(newValue as number);
    })

    if (_selectedNode) _selectedNode.destroyCursor();
    _selectedNode = textPath;

    this.changeToolSetting('textToolMode', 'edit');

    if (this._previewStroke.has(identifier)) {
      this._previewStroke.get(identifier).forEach(node => node.delete());
      this._previewStroke.delete(identifier)
    }
  }
}

export function _doStroke(
  this: RealDrawBoard,
  coords: Coordinate,
  identifier: string
) {
  if (this.toolSettings.textToolMode === 'new') {
    const boundingBox = this._previewStroke.get(identifier)[0] as Polygon;
    const [startX, startY] = _startCoords.get(identifier);
    const [endX, endY] = coords;

    boundingBox.updatePoints([
      [startX, startY],
      [endX, startY],
      [endX, endY],
      [startX, endY]
    ])
  }
}

export function _onKey(
  this: RealDrawBoard,
  e: KeyboardEvent
) {
  if (this.toolSettings.textToolMode === 'edit' && _selectedNode !== null) {
    e.preventDefault();
    _selectedNode = _mapKeyToAction(e, _selectedNode);
  }
}

export function _onScroll(
  this: RealDrawBoard,
  scrollDelta: number,
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
