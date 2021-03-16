export class Path {
  node: SVGPathElement;

  constructor(
    initialD: string
  ) {
    const path: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute('d', initialD);
    this.node = path;
  }

  updatePath(newD: string) {
    this.node.setAttribute('d', newD);
  }

  appendPath(appendD: string) {
    this.node.setAttribute('d', this.node.getAttribute('d') + '\n' + appendD);
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
