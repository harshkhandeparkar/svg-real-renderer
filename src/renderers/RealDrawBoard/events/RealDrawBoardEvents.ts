import { IRealRendererEvents, RealRendererEventList } from '../../RealRenderer/events/RealRendererEvents';
import { Tool, ToolSettings } from '../tools/tools';

export interface IRealDrawBoardEvents extends IRealRendererEvents {
  'tool-change': {
    oldTool: Tool;
    newTool: Tool;
  };
  'tool-setting-change': {
    settingName: keyof ToolSettings;
    oldValue: ToolSettings[keyof ToolSettings];
    newValue: ToolSettings[keyof ToolSettings];
  };
  'board-cleared': {};
  'board-reset': {};
}

export const RealDrawBoardEventList: (keyof IRealDrawBoardEvents)[] = [
  ...RealRendererEventList,
  'tool-change',
  'tool-setting-change',
  'board-cleared',
  'board-reset'
]
