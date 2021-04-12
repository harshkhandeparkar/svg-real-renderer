import { IRealRendererOptionals } from '../../types/RealRendererTypes';

export const RealRendererDefaults: IRealRendererOptionals = {
  dimensions: [1000, 1000],
  bgColor: [0, 0, 0],
  bgType: {
    type: 'axes',
    axesColor: [1, 1, 1],
    xOffset: 20,
    yOffset: 20
  },
  drawsPerFrame: 1,
  timeStep: 1 / 60,
  initTime: 0,
  scaleFactor: 1
}
