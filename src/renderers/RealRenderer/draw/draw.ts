import { Stroke } from '../../../types/RealRendererTypes';
import { RealRenderer } from '../RealRenderer';

export function _drawFunc(this: RealRenderer, time: number) { // Can be overridden
  return this;
}

export function _draw(this: RealRenderer) {
  this.time += this.timeStep;

  this._drawFunc(this.time);
  return this;
}

/**
 * Draw a certain number of frames.
 * @param numDraws Number of frames to draw.
 * @returns Self for chaining.
 */
export function draw(this: RealRenderer, numDraws: number = 1) {
  for (let i = 0; i < numDraws; i++) this._draw();

  return this;
}

export function _display(this: RealRenderer, stroke: Stroke) {
  stroke.forEach((strokeNode) => {
    if (strokeNode.node.parentElement == null) this.svgSections[strokeNode.section].appendChild(strokeNode.node);
  })
}

export function _addStroke(this: RealRenderer, stroke: Stroke) {
  if (this.strokes.length > this._strokeIndex + 1) this.strokes.splice(this._strokeIndex + 1, this.strokes.length - this._strokeIndex);
  this.strokes[++this._strokeIndex] = stroke;
}
