import { ToolDefaults } from '../../renderers/RealDrawBoard/tools/tools';
import { IRealDrawBoardParametersSettings } from '../../types/RealDrawBoardTypes';
import { RealRendererDefaults } from './RealRendererDefaults';

export const RealDrawBoardDefaults: IRealDrawBoardParametersSettings = {
  ...RealRendererDefaults,
  toolSettings: ToolDefaults,
  allowUndo: false,
  maxUndos: 10,
  tool: 'brush'
}
