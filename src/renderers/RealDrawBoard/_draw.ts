import { RealDrawBoard } from './RealDrawBoard';
import { Color } from '../../types/RealRendererTypes';
import { getPlotPath } from '../../pathHandlers/plot';
import { getInterpolatePath } from '../../pathHandlers/interpolate';

export function _plot(
  this: RealDrawBoard,
  x: number,
  y: number,
  size: number,
  color: Color
) {
  this._addPath(
    getPlotPath(
      this.dimensions,
      this.xScaleFactor,
      this.yScaleFactor,
      this.xOffset,
      this.yOffset,
      x,
      y,
      size,
      color
    )
  )

  return this;
}

export function _stroke(
  this: RealDrawBoard,
  x: number,
  y: number,
  size: number,
  color: Color,
  identifier: string
) {
  if (!this._lastCoords.has(identifier)) this._lastCoords.set(identifier, [x, y]);

  return this._addPath(getInterpolatePath(
    this.dimensions,
    this.xScaleFactor,
    this.yScaleFactor,
    this.xOffset,
    this.yOffset,
    this._lastCoords.get(identifier),
    [x, y],
    size,
    color
  ))
}
