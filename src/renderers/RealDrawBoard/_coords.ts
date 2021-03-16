import { RealDrawBoard } from './RealDrawBoard';

export function _getMouseCoords(
  this: RealDrawBoard,
  e: MouseEvent
): [number, number] {
  const graphX = (e.offsetX * this.dimensions[0]) / this.svg.getBoundingClientRect().width; // Handle canvas resize
  const graphY = (e.offsetY * this.dimensions[1]) / this.svg.getBoundingClientRect().height;

  let x = graphX; // in pixels;
  let y = graphY; // in pixels

  x = x / this.xScaleFactor - (this.dimensions[0] * (this.yOffset / 100)) / this.xScaleFactor;
  y = y / this.yScaleFactor - (this.dimensions[1] * (this.xOffset / 100)) / this.yScaleFactor;

  return [x, y]; // In graph coordinates
}

export function _getTouchCoords(
  this: RealDrawBoard,
  touch: Touch
): [number, number] {
  const graphX = ((touch.clientX - this.svg.getBoundingClientRect().left) * this.dimensions[0]) / this.svg.getBoundingClientRect().width; // Handle canvas resize
  const graphY = ((touch.clientY - this.svg.getBoundingClientRect().top) * this.dimensions[1]) / this.svg.getBoundingClientRect().height;

  let x = graphX;
  let y = graphY;

  x = x / this.xScaleFactor - (this.dimensions[0] * (this.yOffset / 100)) / this.xScaleFactor;
  y = y / this.yScaleFactor - (this.dimensions[1] * (this.xOffset / 100)) / this.yScaleFactor;

  return [x, y];
}
