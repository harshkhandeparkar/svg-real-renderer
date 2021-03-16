export class Path {
  pathD: string; // The d attribute of the SVG <path> element
  node: SVGPathElement;

  constructor(
    initialD: string
  ) {
    const path: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute('d', initialD);
    this.pathD = initialD;

    this.node = path;
  }

  updatePath(newD: string) {
    this.node.setAttribute('d', newD);
    this.pathD = newD;
  }

  setStroke(stroke: string) {
    this.node.setAttribute('stroke', stroke);
  }
}
