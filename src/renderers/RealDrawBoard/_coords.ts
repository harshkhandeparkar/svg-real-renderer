import { RealDrawBoard } from './RealDrawBoard';

export function _getMouseCoords(
  this: RealDrawBoard,
  e: MouseEvent
): [number, number] {
  const x = (e.offsetX * this.dimensions[0]) / this.svg.getBoundingClientRect().width; // Handle canvas resize
  const y = (e.offsetY * this.dimensions[1]) / this.svg.getBoundingClientRect().height;

  return [x, y]; // In graph coordinates
}

export function _getTouchCoords(
  this: RealDrawBoard,
  touch: Touch
): [number, number] {
  const x = ((touch.clientX - this.svg.getBoundingClientRect().left) * this.dimensions[0]) / this.svg.getBoundingClientRect().width; // Handle canvas resize
  const y = ((touch.clientY - this.svg.getBoundingClientRect().top) * this.dimensions[1]) / this.svg.getBoundingClientRect().height;

  return [x, y];
}
