import { Coordinate } from '../../../types/RealRendererTypes';

export class Circle {
  node: SVGCircleElement;

  constructor(
    center: Coordinate,
    initialRadius: number
  ) {
    const path: SVGCircleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    path.setAttribute('cx', center[0].toString());
    path.setAttribute('cy', center[1].toString());
    path.setAttribute('r', initialRadius.toString());
    this.node = path;
  }

  updateRadius(newRadius: number) {
    this.node.setAttribute('r', newRadius.toString());
  }

  setStroke(stroke: string) {
    this.node.setAttribute('stroke', stroke);
  }

  setFill(fill: string) {
    this.node.setAttribute('fill', fill);
  }

  setStrokeWidth(width: number) {
    this.node.setAttribute('stroke-width', width.toString());
  }

  delete() {
    this.node.remove();
  }
}
