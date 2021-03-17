import { Circle } from '../renderers/RealRenderer/strokeNodes/_circle';
import { Color, Coordinate } from '../types/RealRendererTypes';
import { getRGBColorString } from '../util/getRGBColorString';

export function getCircleNode(
  center: Coordinate,
  radius: number,
  color: Color
) {
  const circleNode = new Circle(center, radius);
  circleNode.setFill(getRGBColorString(color));
  circleNode.setStroke(getRGBColorString(color));

  return circleNode;
}
