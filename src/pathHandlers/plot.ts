import { GraphDimensions, Color } from '../types/RealRendererTypes';
import { getRGBColorString } from '../util/getRGBColorString';

/**
 * @param gpu
 * @param dimensions
 * @param xScaleFactor
 * @param yScaleFactor
 * @param xOffset
 * @param yOffset
 */
export function getPlotPath(
  dimensions: GraphDimensions,
  xScaleFactor: number,
  yScaleFactor: number,
  xOffset: number,
  yOffset: number,
  valX: number,
  valY: number,
  size: number,
  color: Color
) {
  const x1 = valX * xScaleFactor + (dimensions[0] * (yOffset / 100));
  const y1 = valY * yScaleFactor + (dimensions[1] * (xOffset / 100));
  const colorStr = getRGBColorString(color);

  return `<circle cx="${x1}" cy="${y1}" r="${size}" fill="${colorStr}" fill="${colorStr}" />`
}
