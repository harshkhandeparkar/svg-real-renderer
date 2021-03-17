import { GraphDimensions, Color } from '../types/RealRendererTypes';
import { getRGBColorString } from '../util/getRGBColorString';
import { Path } from '../renderers/RealRenderer/strokeNodes/_path';

export function getBlankGraphPath(
  dimensions: GraphDimensions,
  xOffset: number,
  yOffset: number,
  axesColor: Color,
  drawAxes: boolean
): Path {
  const outX = dimensions[0], outY = dimensions[1];

  const X = Math.floor(outY * (xOffset / 100));
  const Y = Math.floor(outX * (yOffset / 100));

  let d: string;

  if (drawAxes) {
    d = `M 0,${Y} H ${dimensions[0] - 1} \n`
    d += `M ${X},0 V ${dimensions[1] - 1}`
  }
  else d = '';

  const path = new Path(d);
  path.setStroke(getRGBColorString(axesColor));

  return path;
}
