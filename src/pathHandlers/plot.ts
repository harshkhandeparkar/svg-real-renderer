import { GraphDimensions, Color } from '../types/RealRendererTypes';
import { getRGBColorString } from '../util/getRGBColorString';

export type PlotAttributes = {
  d: string;
  fill: string;
}

/**
 * Returns the d attrbute of a circle.
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
): PlotAttributes {
  const x1 = valX * xScaleFactor + (dimensions[0] * (yOffset / 100));
  const y1 = valY * yScaleFactor + (dimensions[1] * (xOffset / 100));

  let d:string;

  d = `M ${x1},${y1}` + '\n';
  d += `A ${size} ${size} 0 0 ${x1},${y1}` + '\n';
  d += `A ${size} ${size} 1 0 ${x1},${y1}` + '\n';
  d += `A ${size} ${size} 0 1 ${x1},${y1}` + '\n';
  d += `A ${size} ${size} 1 1 ${x1},${y1}` + '\n';

  return {
    d,
    fill: getRGBColorString(color)
  }
}
