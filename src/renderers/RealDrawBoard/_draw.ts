import { RealDrawBoard } from './RealDrawBoard';
import { Color } from '../../types/RealRendererTypes';
import { getPlotPath } from '../../pathHandlers/plot';
import { getInterpolatePath } from '../../pathHandlers/interpolate';
import { Path } from '../../util/_path';

export function _plot(
  this: RealDrawBoard,
  x: number,
  y: number,
  size: number,
  color: Color
) {
  const plotPath = getPlotPath(
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
  const path = new Path(plotPath.d);
  path.setFill(plotPath.fill);

  this._addPath(path);

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
