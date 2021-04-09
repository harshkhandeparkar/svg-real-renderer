import { Circle } from '../renderers/RealRenderer/strokeNodes/_circle';
import { Color, Coordinate, SVGSection } from '../types/RealRendererTypes';
import { getRGBColorString } from '../util/getRGBColorString';

export function getCircleNode(
  center: Coordinate,
  radius: number,
  color: Color,
  section: SVGSection
) {
  const circleNode = new Circle(center, radius, section);
  circleNode.setFill(getRGBColorString(color));
  circleNode.setStroke(getRGBColorString(color));

  return circleNode;
}
