import { GraphDimensions, Color } from '../types/RealRendererTypes';
import { Axis } from '../types/RealLineGraphTypes';

export function getAddDataPath(
  dimensions: GraphDimensions,
  brushSize: number,
  brushColor: Color,
  xOffset: number,
  yOffset: number,
  lineThickness: number,
  lineColor: Color,
  progressiveAxis: Axis,
  numProgress: number,
  xScaleFactor: number,
  yScaleFactor: number
) {
  const val = value[0];
  const last = lastData[0];

  return `<line x1="" y1="" x2="" y2="">`
}
