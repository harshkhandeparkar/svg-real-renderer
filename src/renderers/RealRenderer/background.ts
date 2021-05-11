import { getBlankGraphPaths } from '../../pathMakers/blankGraph';
import { BGType } from '../../types/RealRendererTypes';
import { clamp } from '../../util/clamp';
import { RealRenderer } from './RealRenderer';

/**
 * Changes the background of the graph.
 * @param newBG New background.
 * @returns Self for chaining.
 */
export function changeBackground(this: RealRenderer, newBG: BGType) {
  this.bgType = newBG;
  const newBGStrokes = getBlankGraphPaths(this.dimensions, this.bgColor, this.bgType);

  this.normalizeBG();

  this.strokes[0].forEach((stroke) => stroke.delete());
  this.strokes[0] = newBGStrokes;
  this._display(this.strokes[0]);

  return this;
}

export function normalizeBG(this: RealRenderer) {
  switch(this.bgType.type) {
    case 'axes':
      this.bgType.xOffset = clamp(this.bgType.xOffset, 0, 100); // %age
      this.bgType.yOffset = clamp(this.bgType.yOffset, 0, 100); // %age
      break;

    case 'grid':
      this.bgType.xSpacing = clamp(this.bgType.xSpacing, 0, 100); // %age
      this.bgType.ySpacing = clamp(this.bgType.ySpacing, 0, 100); // %age
      if (this.bgType.xSpacing === 0) this.bgType.xSpacing = 1;
      if (this.bgType.ySpacing === 0) this.bgType.ySpacing = 1;
      break;

    case 'ruled':
      this.bgType.spacing = clamp(this.bgType.spacing, 0, 100);
      if (this.bgType.spacing === 0) this.bgType.spacing = 1;
      break;

    case 'none':
      break;

    default:
      break;
  }
}
