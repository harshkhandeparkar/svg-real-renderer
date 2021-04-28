import { RealExport } from '../../types/RealRendererTypes';

export interface IRealRendererEvents {
  'start-render': {};
  'stop-render': {};
  'change-scale': {
    oldScaleFactor: number;
    newScaleFactor: number;
  };
  'change-offsets': {
    oldOffsets: {
      x: number;
      y: number;
    };
    newOffsets: {
      x: number;
      y: number;
    }
  };
  'import': {
    import: RealExport
  }
}

export const RealRendererEventList: (keyof IRealRendererEvents)[] = [
  'start-render',
  'stop-render',
  'change-scale',
  'change-offsets',
  'import'
]
