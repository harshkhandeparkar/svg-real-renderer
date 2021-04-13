import { IRealRendererNonOptionals, IRealRendererOptionals } from './RealRendererTypes';
import { Tool, ToolOptions, ToolSettings } from '../renderers/RealDrawBoard/tools/tools';

export interface IRealDrawBoardOptionals extends IRealRendererOptionals {
  toolSettings: ToolOptions;
  allowUndo: boolean;
  maxUndos: number;
  tool: Tool;
}

export interface IRealDrawBoardNonOptionals extends IRealRendererNonOptionals {
  toolSettings: ToolSettings;
}


export type RealDrawBoardSettings = IRealDrawBoardNonOptionals & IRealDrawBoardOptionals;
export type RealDrawBoardOptions = IRealDrawBoardNonOptionals & (IRealDrawBoardOptionals | {});
