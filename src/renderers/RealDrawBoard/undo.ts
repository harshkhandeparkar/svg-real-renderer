import { RealDrawBoard } from './RealDrawBoard';

export function undo(this: RealDrawBoard, numUndo: number = 1) {
  const wasDrawing = this._isDrawing;
  this.stopRender();

  this._pathIndex = Math.min(Math.max(this._pathIndex - numUndo, 0), this.paths.length - 1);

  if (wasDrawing) this.startRender();

  return this;
}

export function redo(this: RealDrawBoard, numRedo: number = 1) {
  this.undo(-numRedo);

  return this;
}
