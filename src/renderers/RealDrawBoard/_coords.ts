import { RealDrawBoard } from './RealDrawBoard';

export function _getMouseCoords(
  this: RealDrawBoard,
  e: MouseEvent
): [number, number] {
  const x = e.offsetX;
  const y = e.offsetY;

  return [x, y]; // In graph coordinates
}

export function _getTouchCoords(
  this: RealDrawBoard,
  touch: Touch
): [number, number] {
  const x = (touch.clientX - this.svg.getBoundingClientRect().left);
  const y = (touch.clientY - this.svg.getBoundingClientRect().top);

  return [x, y];
}
