import { RealDrawBoard } from '../RealDrawBoard';
import { Color } from '../../../types/RealRendererTypes';
import { getCircleNode } from '../../../pathMakers/circle';
import { getRGBColorString } from '../../../util/getRGBColorString';
import { Path } from '../../RealRenderer/strokeNodes/_path';
import { getLinePathCommand } from '../../../pathMakers/line';
import { Circle } from '../../RealRenderer/strokeNodes/_circle';

export const name = 'line';

export interface LineSettings {
  lineThickness: number,
  lineColor: Color
}

export const LineDefaults: LineSettings = {
  lineThickness: 1,
  lineColor: [1, 1, 1]
}

/** key -> identifier, value -> coordinate
   *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
   */
const _startCoords: Map<string, [number, number]> = new Map(); /* key -> identifier, value -> coordinate*/

export function _startStroke(
  this: RealDrawBoard,
  coords: [number, number],
  identifier: string
) {
  this._doPreview = false;

  const brushPath = new Path('');
  brushPath.setStroke(getRGBColorString(this.toolSettings.brushColor));
  brushPath.setStrokeWidth(this.toolSettings.brushSize);

  this._addStroke([brushPath]);

  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      this.toolSettings.brushSize / 2,
      this.toolSettings.brushColor
    )
  )

  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      this.toolSettings.brushSize / 2,
      this.toolSettings.brushColor
    )
  )

  _startCoords.set(identifier, coords);
}

export function _endStroke(
  this: RealDrawBoard,
  endCoords: [number, number],
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
}

export function _doStroke(
  this: RealDrawBoard,
  coords: [number, number],
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
  coords: [number, number],
  identifier: string
) {
}
