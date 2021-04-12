import { Path } from '../renderers/RealRenderer/strokeNodes/_path';
import { Text } from '../renderers/RealRenderer/strokeNodes/_text';
import { Circle } from '../renderers/RealRenderer/strokeNodes/_circle';
import { Polygon } from '../renderers/RealRenderer/strokeNodes/_polygon';

export type GraphDimensions = [number, number];
export type Color = [number, number, number];
export type Coordinate = [number, number];
export type StrokeNode = Path | Circle | Text | Polygon;
export type SVGSection = 'bg' | 'strokes' | 'overlay';
export type SVGSections = {
  [Property in SVGSection]: SVGGElement;
}
/**
 * One stroke is an combination of multiple stroke nodes
 */
export type Stroke = StrokeNode[];
export type StrokeNodeData = {
  type: 'path' | 'circle' | 'text' | 'polygon';
  data: string;
  section: SVGSection;
}
export type StrokeExport = StrokeNodeData[];
export type RealExport = {
  exportData: StrokeExport[];
  strokeIndex: number;
  dimensions: GraphDimensions;
}

export type BGAxes = {
  type: 'axes';
  axesColor: Color;
  xOffset: number;
  yOffset: number;
}

export type BGRuled = {
  type: 'ruled';
  orientation: 'vertical' | 'horizontal';
  spacing: number;
  lineColor: Color;
}

export type BGGrid = {
  type: 'grid';
  xSpacing: number;
  ySpacing: number;
  lineColor: Color;
}

export type BGNone = {
  type: 'none';
}

export type BGType = BGNone | BGRuled | BGGrid | BGAxes;

export interface IRealRendererOptionals {
  dimensions: GraphDimensions;
  bgColor: Color;
  bgType: BGType;
  drawsPerFrame: number;
  timeStep: number;
  initTime: number;
  scaleFactor: number;
}

export interface IRealRendererNonOptionals {
  svg: SVGSVGElement;
}

export type RealRendererSettings = IRealRendererNonOptionals & IRealRendererOptionals;
export type RealRendererOptions = IRealRendererNonOptionals & (IRealRendererOptionals | {});
