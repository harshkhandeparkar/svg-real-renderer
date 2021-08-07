import { Circle, ICircleNodeData } from '../renderers/RealRenderer/strokeNodes/_circle';
import { GroupNode, IGroupNodeData } from '../renderers/RealRenderer/strokeNodes/_group';
import { IPathNodeData, Path } from '../renderers/RealRenderer/strokeNodes/_path';
import { IPolygonNodeData, Polygon } from '../renderers/RealRenderer/strokeNodes/_polygon';
import { ITextNodeData, Text } from '../renderers/RealRenderer/strokeNodes/_text/_text';

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
export type StrokeNode = Path | Circle | Text | Polygon | GroupNode;
export type SVGSection = 'bg' | 'strokes' | 'overlay';
export type SVGSections = {
  [Property in SVGSection]: SVGGElement;
}
export type StrokeNodeType = 'path' | 'circle' | 'text' | 'polygon' | 'group';
/**
 * One stroke is an combination of multiple stroke nodes
 */
export type Stroke = StrokeNode[];

/** @deprecated */
export type StrokeNodeDataV1 = {
  type: StrokeNodeType;
  data: string;
  section: SVGSection;
}
/** @deprecated */
export type StrokeExportV1 = StrokeNodeDataV1[];

export type StrokeNodeDataV2 = ITextNodeData | ICircleNodeData | IGroupNodeData | IPathNodeData | IPolygonNodeData;
export type StrokeExportV2 = StrokeNodeDataV2[];

/**
 * Data format for graph data exported  by Real Renderers
 * @deprecated
 */
export interface IRealExportV1 {
  exportData: StrokeExportV1[];
  strokeIndex: number;
  bgType: BGType;
  dimensions: GraphDimensions;
}

export interface IRealExportV2 {
  version: 2;
  exportData: StrokeExportV2[];
  strokeIndex: number;
  bgType: BGType;
  dimensions: GraphDimensions;
}

export type RealExport = IRealExportV1 | IRealExportV2;

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

/**
 * Solid background.
 */
export type BGNone = {
  type: 'none';
}

export type BGType = BGNone | BGRuled | BGGrid | BGAxes;

export interface IRealRendererOptionals {
  /**
   * Background color.
   */
  bgColor: Color;
  /**
   * Type of the background.
   */
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
  /**
   * Scaling of the graph. Larger number zooms.
   */
  scaleFactor: number;
}

export interface IRealRendererNonOptionals { }

export type RealRendererSettings = IRealRendererNonOptionals & IRealRendererOptionals;
export type RealRendererOptions = IRealRendererNonOptionals & (IRealRendererOptionals | {});
export type RealRendererParameters = (IRealRendererOptionals | {});
