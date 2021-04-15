import { IRealDrawBoardParametersSettings } from '../../types/RealDrawBoardTypes';
import { ToolDefaults } from '../../renderers/RealDrawBoard/tools/tools';
import { RealRendererDefaults } from './RealRendererDefaults';

export const RealDrawBoardDefaults: IRealDrawBoardParametersSettings = {
  ...RealRendererDefaults,
  toolSettings: ToolDefaults,
  allowUndo: false,
  maxUndos: 10,
  tool: 'brush'
}
