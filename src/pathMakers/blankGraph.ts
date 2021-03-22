import { GraphDimensions, Color } from '../types/RealRendererTypes';
import { getRGBColorString } from '../util/getRGBColorString';
import { Path } from '../renderers/RealRenderer/strokeNodes/_path';
import { Polygon } from '../renderers/RealRenderer/strokeNodes/_polygon';

export function getBlankGraphPaths(
  dimensions: GraphDimensions,
  xOffset: number,
  yOffset: number,
  axesColor: Color,
  bgColor: Color,
  drawAxes: boolean
): [Path, Polygon] {
  const outX = dimensions[0], outY = dimensions[1];

  const X = Math.floor(outY * (xOffset / 100));
  const Y = Math.floor(outX * (yOffset / 100));

  let d: string;

  if (drawAxes) {
    d = `M 0,${Y} H ${dimensions[0] - 1} \n`
    d += `M ${X},0 V ${dimensions[1] - 1}`
  }
  else d = '';

  const axesPath = new Path(d);
  axesPath.setStroke(getRGBColorString(axesColor));

  const bgPolygon = new Polygon(
    [
      [0, 0],
      [0, dimensions[1]],
      [dimensions[0], dimensions[1]],
      [dimensions[0], 0]
    ]
  )

  bgPolygon.setFill(getRGBColorString(bgColor));
  bgPolygon.setStroke(getRGBColorString(bgColor));

  return [axesPath, bgPolygon]
}
