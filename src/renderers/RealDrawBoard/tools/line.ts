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

  const linePath = new Path('');
  linePath.setStroke(getRGBColorString(this.toolSettings.lineColor));
  linePath.setStrokeWidth(this.toolSettings.lineThickness);

  this._addStroke([linePath]);

  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      this.toolSettings.lineThickness / 2 - 0.5,
      this.toolSettings.lineColor
    )
  )

  this.strokes[this._strokeIndex].push(
    getCircleNode(
      coords,
      this.toolSettings.lineThickness / 2 - 0.5,
      this.toolSettings.lineColor
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
  this._doPreview = true;
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
  if (this._previewStroke.get(identifier).length == 0) {
    const circleNode = getCircleNode(
      coords,
      this.toolSettings.lineThickness / 2 - 0.5,
      this.toolSettings.lineColor
    )

    circleNode.setFill(getRGBColorString(this.toolSettings.lineColor));
    circleNode.setStroke(getRGBColorString(this.toolSettings.lineColor));

    this._previewStroke.get(identifier).push(circleNode);
  }
  else {
    const circleNode = <Circle>this._previewStroke.get(identifier)[0]
    circleNode.updateCenter(coords);
    circleNode.updateRadius(this.toolSettings.lineThickness / 2 - 0.5);
    circleNode.setFill(getRGBColorString(this.toolSettings.lineColor));
    circleNode.setStroke(getRGBColorString(this.toolSettings.lineColor));
  }
}
