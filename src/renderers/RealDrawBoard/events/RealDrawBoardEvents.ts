import { Tool } from '../tools/tools';

export interface RealDrawBoardEvents {
  'tool-change': {newTool: Tool}
}

export const RealDrawBoardEventList: (keyof RealDrawBoardEvents)[] = [
  'tool-change'
]
