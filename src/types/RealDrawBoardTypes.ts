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

export interface IRealDrawBoardNonOptionalOptions extends IRealRendererNonOptionals { }

export interface IRealDrawBoardNonOptionalSettings extends IRealRendererNonOptionals {
  toolSettings: ToolSettings;
}

export type RealDrawBoardSettings = IRealDrawBoardNonOptionalSettings & IRealDrawBoardOptionals;
export type RealDrawBoardOptions = IRealDrawBoardNonOptionalOptions & (IRealDrawBoardOptionals | {});
export type RealDrawBoardParameters = (IRealDrawBoardOptionals | {});
export interface IRealDrawBoardParametersSettings extends IRealDrawBoardOptionals {
  toolSettings: ToolSettings;
}
