import { RealDrawBoard } from '../RealDrawBoard';
import { Color } from '../../../types/RealRendererTypes';
import { Path } from '../../RealRenderer/strokeNodes/_path';
import { getRGBColorString } from '../../../util/getRGBColorString';
import { getCircleNode } from '../../../pathMakers/circle';
import { getLinePathCommand } from '../../../pathMakers/line';

export const name = 'brush';

export interface BrushSettings {
  brushColor: Color,
  brushSize: number
}

export const BrushDefaults: BrushSettings = {
  brushColor: [1, 1, 1],
  brushSize: 1
}

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
      this.toolSettings.brushSize / 2,
      this.toolSettings.brushColor
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
      this.toolSettings.brushSize / 2,
      this.toolSettings.brushColor
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
  //   coords[0],
  //   coords[1],
  //   this.toolSettings.brushSize,
  //   this.toolSettings.brushColor
  // )
}
