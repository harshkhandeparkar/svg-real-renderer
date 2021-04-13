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
}

export const RealRendererEventList: (keyof IRealRendererEvents)[] = [
  'start-render',
  'stop-render'
]
