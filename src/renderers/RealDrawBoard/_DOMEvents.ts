import { RealDrawBoard } from './RealDrawBoard';

export function _addDOMEvents(this: RealDrawBoard) {
  this.svg.addEventListener('mousedown', this._mouseDownEventListener);
  this.svg.addEventListener('mouseup', this._mouseUpEventListener);
  this.svg.addEventListener('mouseleave', this._mouseLeaveEventListener);
  this.svg.addEventListener('mousemove', this._previewMouseMoveEventListener);
  this.svg.addEventListener('wheel', this._wheelEventListener);

  document.addEventListener('keydown', this._keyPressEventListener);

  this.svg.addEventListener('touchstart', this._touchStartEventListener);
  this.svg.addEventListener('touchmove', this._touchMoveEventListener);
  this.svg.addEventListener('touchend', this._touchEndEventListener);
  this.svg.addEventListener('touchmove', this._previewTouchMoveEventListener);
}

export function _removeDOMEvents(this: RealDrawBoard) {
  this.svg.removeEventListener('mousedown', this._mouseDownEventListener);
  this.svg.removeEventListener('mouseup', this._mouseUpEventListener);
  this.svg.removeEventListener('mouseexit', this._mouseLeaveEventListener);
  this.svg.removeEventListener('mousemove', this._previewMouseMoveEventListener);
  this.svg.removeEventListener('wheel', this._wheelEventListener);

  document.removeEventListener('keydown', this._keyPressEventListener);

  this.svg.removeEventListener('touchstart', this._touchStartEventListener);
  this.svg.removeEventListener('touchmove', this._touchMoveEventListener);
  this.svg.removeEventListener('touchend', this._touchEndEventListener);
  this.svg.removeEventListener('touchmove', this._previewTouchMoveEventListener);
}
