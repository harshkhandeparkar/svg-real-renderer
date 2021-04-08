import { Coordinate } from '../types/RealRendererTypes';

export function getLinePathCommand(
  pt1: Coordinate,
  pt2: Coordinate
) {
  let d: string;
  d = `M ${pt1[0]},${pt1[1]}`;
  d += ` L ${pt2[0]},${pt2[1]}`;

  return d;
}
