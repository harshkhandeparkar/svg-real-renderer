import { GraphDimensions, Color } from "../types/RealRendererTypes";

/**
 * @param gpu GPU.js instance
 * @param dimensions Dimensions of Graph
 * @param xOffset
 * @param yOffset
 * @param axesColor
 * @param drawAxes
 */
export function getBlankGraphPath(
  dimensions: GraphDimensions,
  xOffset: number,
  yOffset: number,
  axesColor: Color,
  drawAxes: boolean
): string {
  const outX = dimensions[0], outY = dimensions[1];

  const X = Math.floor(outY * (xOffset / 100));
  const Y = Math.floor(outX * (yOffset / 100));

  if (drawAxes) {
    return  `<line x1="0" y1="${Y}" x2="${dimensions[0] - 1}" y2=${Y} stroke="rgb(${axesColor[0] * 255}, ${axesColor[1] * 255}, ${axesColor[2] * 255})" />` +
      `<line x1="${X}" y1="0" x2="${X}" y2="${dimensions[1] - 1}" stroke="rgb(${axesColor[0] * 255}, ${axesColor[1] * 255}, ${axesColor[2] * 255})" />`;
  }
  else '';
}
