import { clamp } from '../../../util/clamp';
import { RealRenderer } from '../RealRenderer';

/**
 * Scale/zoom the graph.
 * @param scaleFactor Factor to scale the graph by. Larger number zooms in.
 * @returns Self for chaining.
 */
export function scale(this: RealRenderer, scaleFactor: number) {
  const oldScaleFactor = this.scaleFactor;
  this.scaleFactor = scaleFactor;
  this.dimensions[0] = this.originalDimensions[0] / scaleFactor;
  this.dimensions[1] = this.originalDimensions[1] / scaleFactor;

  // To clamp the offsets as well
  this.changeOffsets(this._offsetX, this._offsetY);

  this.emit('change-scale', {
    oldScaleFactor,
    newScaleFactor: this.scaleFactor
  })

  return this;
}

/**
 * Change the offsets of the graph (for panning)
 * @param xOffset Offset in the x-direction.
 * @param yOffset Offset in the y-direction.
 * @returns Self for chaining.
 */
export function changeOffsets(this: RealRenderer, xOffset: number, yOffset: number) {
  const oldOffsets = {
    x: this._offsetX,
    y: this._offsetY
  }
  this._offsetX = clamp(xOffset, 0, this.originalDimensions[0] - this.dimensions[0]);
  this._offsetY = clamp(yOffset, 0, this.originalDimensions[1] - this.dimensions[1]);
  this._setViewBox(this.dimensions, this._offsetX, this._offsetY);

  this.emit('change-offsets', {
    oldOffsets,
    newOffsets: {
      x: this._offsetX,
      y: this._offsetY
    }
  })

  return this;
}
