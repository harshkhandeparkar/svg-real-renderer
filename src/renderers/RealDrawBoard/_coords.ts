import { RealDrawBoard } from './RealDrawBoard';

export function _getMouseCoords(
  this: RealDrawBoard,
  e: MouseEvent | WheelEvent
): [number, number] {
  const xScaleFactor = this.dimensions[0] / this.svg.clientWidth;
  const yScaleFactor = this.dimensions[1] / this.svg.clientHeight;

  const x = e.offsetX * xScaleFactor + this._offsetX;
  const y = e.offsetY * yScaleFactor + this._offsetY;

  return [x, y]; // In graph coordinates
}

export function _getTouchCoords(
  this: RealDrawBoard,
  touch: Touch
): [number, number] {
  const xScaleFactor = this.dimensions[0] / this.svg.clientWidth;
  const yScaleFactor = this.dimensions[1] / this.svg.clientHeight;

  const x = (touch.clientX - this.svg.getBoundingClientRect().left + this._offsetY) * xScaleFactor;
  const y = (touch.clientY - this.svg.getBoundingClientRect().top + this._offsetY) * yScaleFactor;

  return [x, y];
}
