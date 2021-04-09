import { GraphDimensions, Color, BGType } from '../types/RealRendererTypes';
import { getRGBColorString } from '../util/getRGBColorString';
import { Path } from '../renderers/RealRenderer/strokeNodes/_path';
import { Polygon } from '../renderers/RealRenderer/strokeNodes/_polygon';

export function getBlankGraphPaths(
  dimensions: GraphDimensions,
  xOffset: number,
  yOffset: number,
  bgColor: Color,
  bgType: BGType
): [Polygon, Path] {
  const outX = dimensions[0], outY = dimensions[1];

  const X = Math.floor(outY * (xOffset / 100));
  const Y = Math.floor(outX * (yOffset / 100));

  const axesPath = new Path('');

  switch(bgType.type) {
    case 'none':
      break;
      case 'axes':
      axesPath.setStroke(getRGBColorString(bgType.axesColor));
      axesPath.appendPath(`M 0,${Y} H ${dimensions[0] - 1}`);
      axesPath.appendPath(`M ${X},0 V ${dimensions[1] - 1}`);
      break;
    case 'grid':
      break;
    case 'ruled':
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
    ]
  )

  bgPolygon.setFill(getRGBColorString(bgColor));
  bgPolygon.setStroke(getRGBColorString(bgColor));

  return [bgPolygon, axesPath];
}
