import { GraphDimensions, Color, BGType } from '../types/RealRendererTypes';
import { getRGBColorString } from '../util/getRGBColorString';
import { Path } from '../renderers/RealRenderer/strokeNodes/_path';
import { Polygon } from '../renderers/RealRenderer/strokeNodes/_polygon';

export function getBlankGraphPaths(
  dimensions: GraphDimensions,
  bgColor: Color,
  bgType: BGType
): [Polygon, Path] {
  const outX = dimensions[0], outY = dimensions[1];

  const axesPath = new Path('', 'bg');

  switch(bgType.type) {
    case 'none':
      break;
    case 'axes':
      const X = Math.floor(outY * (bgType.xOffset / 100));
      const Y = Math.floor(outX * (bgType.yOffset / 100));

      axesPath.setStroke(getRGBColorString(bgType.axesColor));

      axesPath.appendPath(`M 0,${Y} H ${dimensions[0] - 1}`);
      axesPath.appendPath(`M ${X},0 V ${dimensions[1] - 1}`);
      break;
      case 'grid':
      let xSpacing = dimensions[0] * (bgType.xSpacing / 100);
      let ySpacing = dimensions[1] * (bgType.ySpacing / 100);

      axesPath.setStroke(getRGBColorString(bgType.lineColor));

      // x-axis
      for (let x = xSpacing; x < dimensions[0]; x += xSpacing) {
        axesPath.appendPath(`M ${x},0 V ${dimensions[1] - 1}`);
      }

      // y-axis
      for (let y = ySpacing; y < dimensions[1]; y += ySpacing) {
        axesPath.appendPath(`M 0,${y} H ${dimensions[0] - 1}`);
      }

      break;
    case 'ruled':
      const perpendicularDimension = bgType.orientation === 'horizontal' ? dimensions[1] : dimensions[0];
      let spacing = perpendicularDimension * (bgType.spacing / 100);

      axesPath.setStroke(getRGBColorString(bgType.lineColor));
      for (let dist = spacing; dist < perpendicularDimension; dist += spacing) {
        let d: string;

        if (bgType.orientation === 'horizontal') d = `M 0,${dist} H ${dimensions[0] - 1}`;
        else d = `M ${dist},0 V ${dimensions[1] - 1}`;

        axesPath.appendPath(d);
      }

      break;
    default:
      break;
  }

  const bgPolygon = new Polygon(
    [
      [0, 0],
      [0, dimensions[1]],
      [dimensions[0], dimensions[1]],
      [dimensions[0], 0]
    ],
    'bg'
  )

  bgPolygon.setFill(getRGBColorString(bgColor));
  bgPolygon.setStroke(getRGBColorString(bgColor));

  return [bgPolygon, axesPath];
}
