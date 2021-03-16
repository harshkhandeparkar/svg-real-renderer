import { GraphDimensions, Color } from '../types/RealRendererTypes';
import { getRGBColorString } from '../util/getRGBColorString';

export type InterpolatePathAttributes = {
  d: string;
  stroke: string;
  strokeWidth: number;
}

export function getInterpolatePath(
  dimensions: GraphDimensions,
  xScaleFactor: number,
  yScaleFactor: number,
  xOffset: number,
  yOffset: number,
  pt1: [number, number],
  pt2: [number, number],
  lineThickness: number,
  lineColor: Color
): InterpolatePathAttributes {
  const x1 = (pt1[0] * xScaleFactor) + dimensions[0] * (yOffset / 100);
  const y1 = (pt1[1] * yScaleFactor) + dimensions[1] * (xOffset / 100);

  const x2 = (pt2[0] * xScaleFactor) + dimensions[0] * (yOffset / 100);
  const y2 = (pt2[1] * yScaleFactor) + dimensions[1] * (xOffset / 100);

  const d  = `M ${x1},${y1} L ${x2},${y2}`;

  return {
    d,
    stroke: getRGBColorString(lineColor),
    strokeWidth: lineThickness * Math.sqrt(xScaleFactor ** 2 + yScaleFactor ** 2)
  }
}
