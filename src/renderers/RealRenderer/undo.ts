import { RealRenderer } from './RealRenderer';
import { clamp } from '../../util/clamp';

export function undo(this: RealRenderer, numUndo: number = 1) {
  this._strokeIndex = clamp(this._strokeIndex - numUndo, 0, this.strokes.length - 1);

  for (let i = this._strokeIndex + 1; i < this.strokes.length; i++) {
    this.strokes[i].forEach((strokeNode) => strokeNode.delete());
  }

  return this;
}

export function redo(this: RealRenderer, numRedo: number = 1) {
  const doRedo = clamp(numRedo, numRedo, this.strokes.length - this._strokeIndex - 1);

  for (let i = 0; i < doRedo; i++) {
    this._strokeIndex++;
    this._display(this.strokes[this._strokeIndex]);
  }

  return this;
}
