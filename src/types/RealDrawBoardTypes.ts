import { IRealRendererNonOptionals, IRealRendererOptionals } from './RealRendererTypes';
import { Tool, ToolOptions, ToolSettings } from '../renderers/RealDrawBoard/tools/tools';

export interface IRealDrawBoardOptionals extends IRealRendererOptionals {
  /**
   * Initial values for the tool settings.
   */
  toolSettings: ToolOptions;
  allowUndo: boolean;
  maxUndos: number;
  /**
   * Initially selected tool.
   */
  tool: Tool;
}

export interface IRealDrawBoardNonOptionals extends IRealRendererNonOptionals {
  toolSettings: ToolSettings;
}


export type RealDrawBoardSettings = IRealDrawBoardNonOptionals & IRealDrawBoardOptionals;
export type RealDrawBoardOptions = IRealDrawBoardNonOptionals & (IRealDrawBoardOptionals | {});
