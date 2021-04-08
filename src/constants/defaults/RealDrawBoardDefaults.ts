import { IRealDrawBoardOptionals } from '../../types/RealDrawBoardTypes';
import { ToolDefaults } from '../../renderers/RealDrawBoard/tools/tools';
import { RealRendererDefaults } from './RealRendererDefaults';

export const RealDrawBoardDefaults: IRealDrawBoardOptionals = {
  ...RealRendererDefaults,
  toolSettings: ToolDefaults,
  allowUndo: false,
  maxUndos: 10,
  tool: 'brush'
}
