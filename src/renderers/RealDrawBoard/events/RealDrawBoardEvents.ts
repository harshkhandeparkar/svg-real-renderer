import { Tool, ToolSettings } from '../tools/tools';

export interface RealDrawBoardEvents {
  'tool-change': {newTool: Tool};
  'tool-setting-change': {
    settingName: keyof ToolSettings,
    newValue: ToolSettings[keyof ToolSettings]
  }
}

export const RealDrawBoardEventList: (keyof RealDrawBoardEvents)[] = [
  'tool-change',
  'tool-setting-change'
]
