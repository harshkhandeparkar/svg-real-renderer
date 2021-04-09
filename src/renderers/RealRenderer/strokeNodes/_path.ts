import { StrokeNodeData, SVGSection } from '../../../types/RealRendererTypes';

export class Path {
  node: SVGPathElement;
  section: SVGSection;

  constructor(
    initialD: string,
    section: SVGSection
  ) {
    const path: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute('d', initialD);
    this.node = path;
    this.section = section;
  }

  export(): StrokeNodeData {
    return {
      type: 'path',
      data: this.node.outerHTML.toString(),
      section: this.section
    }
  }

  import(data: string) {
    const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    wrapper.innerHTML = data;
    this.node = <SVGPathElement>wrapper.firstChild;

    wrapper.removeChild(this.node);
    wrapper.remove();
  }

  updatePath(newD: string) {
    this.node.setAttribute('d', newD);
  }

  appendPath(appendD: string) {
    this.node.setAttribute('d', this.node.getAttribute('d') + ' ' + appendD);
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
