import { Path } from '../renderers/RealRenderer/strokeNodes/_path';
import { Text } from '../renderers/RealRenderer/strokeNodes/_text';
import { Circle } from '../renderers/RealRenderer/strokeNodes/_circle';
import { Polygon } from '../renderers/RealRenderer/strokeNodes/_polygon';

export type GraphDimensions = [number, number];
export type Color = [number, number, number];
export type Coordinate = [number, number];
export type StrokeNode = Path | Circle | Text | Polygon;
/**
 * One stroke is an combination of multiple stroke nodes
 */
export type Stroke = StrokeNode[];
export type StrokeNodeData = {
  type: 'path' | 'circle' | 'text' | 'polygon';
  data: string;
}
export type StrokeExport = StrokeNodeData[];
export type RealExport = {
  exportData: StrokeExport[];
  strokeIndex: number;
  dimensions: GraphDimensions;
}

export type BGAxes = {
  type: 'axes',
  axesColor: Color,
  xOffset: number,
  yOffset: number
}

export type BGRuled = {
  type: 'ruled',
  orientation: 'vertical' | 'horizontal',
  xSpacing: number,
  ySpacing: number
}

export type BGType = 'none' | 'axes' | 'grid' | 'ruled';

export interface IRealRendererOptionals {
  dimensions: GraphDimensions;
  yScaleFactor: number;
  bgColor: Color;
  bgType: BGType;
  axesColor: Color;
  drawsPerFrame: number;
  timeStep: number;
  initTime: number;
  xOffset: number;
  yOffset: number;
}

export interface IRealRendererNonOptionals {
  svg: SVGSVGElement;
}

export type RealRendererSettings = IRealRendererNonOptionals & IRealRendererOptionals;
export type RealRendererOptions = IRealRendererNonOptionals & (IRealRendererOptionals | {});
