import { Path } from '../renderers/RealRenderer/strokeNodes/_path';
import { Text } from '../renderers/RealRenderer/strokeNodes/_text';
import { Circle } from '../renderers/RealRenderer/strokeNodes/_circle';
import { Polygon } from '../renderers/RealRenderer/strokeNodes/_polygon';

/**
 * Dimensions of the graph in the format [width, height].
 */
export type GraphDimensions = [number, number];
/**
 * An array of R, G and B colors ranging between 0 and 1.
 */
export type Color = [number, number, number];
/**
 * A coordinate in the format [x, y].
 */
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
/**
 * Data format for graph data exported  by Real Renderers
 */
export type RealExport = {
  exportData: StrokeExport[];
  strokeIndex: number;
  dimensions: GraphDimensions;
}

/**
 * Backround with axes.
 */
export type BGAxes = {
  type: 'axes';
  axesColor: Color;
  /**
   * %age offset of the y-axis (in the x-direction).
   */
  xOffset: number;
  /**
   * %age offset of the x-axis (in the y-direction).
   */
  yOffset: number;
}

/**
 * Ruled background.
 */
export type BGRuled = {
  type: 'ruled';
  orientation: 'vertical' | 'horizontal';
  /**
   * Percentage spacing between the ruled lines.
   */
  spacing: number;
  lineColor: Color;
}

/**
 * Background with grid.
 */
export type BGGrid = {
  type: 'grid';
  /**
   * Percentage spacing between the vertical grid lines lines.
   */
  xSpacing: number;
  /**
   * Percentage spacing between the horizontal grid lines lines.
   */
  ySpacing: number;
  lineColor: Color;
}

export type BGNone = {
  type: 'none';
}

export type BGType = BGNone | BGRuled | BGGrid | BGAxes;

export interface IRealRendererOptionals {
  /**
   * Background color.
   */
  bgColor: Color;
  bgType: BGType;
  /**
   * Number of updates to be made to the graph per frame.
   */
  drawsPerFrame: number;
  /**
   * Amount to increment the internal time by each frame.
   */
  timeStep: number;
  /**
   * Initial value of the internal time.
   */
  initTime: number;
  scaleFactor: number;
}

export interface IRealRendererNonOptionals { }

export type RealRendererSettings = IRealRendererNonOptionals & IRealRendererOptionals;
export type RealRendererOptions = IRealRendererNonOptionals & (IRealRendererOptionals | {});
export type RealRendererParameters = (IRealRendererOptionals | {});
