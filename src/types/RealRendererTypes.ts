export type GraphDimensions = [number, number];
export type Color = [number, number, number];

export interface RealRendererOptions {
  svg?: SVGSVGElement,
  dimensions?: GraphDimensions,
  xScaleFactor?: number,
  yScaleFactor?: number,
  bgColor?: Color,
  drawAxes?: boolean,
  axesColor?: Color,
  drawsPerFrame?: number,
  timeStep?: number,
  initTime?: number,
  xOffset?: number,
  yOffset?: number
}
