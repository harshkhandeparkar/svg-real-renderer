import { Coordinate, StrokeNodeData, SVGSection } from '../../../types/RealRendererTypes';

export class Circle {
  node: SVGCircleElement;
  section: SVGSection;

  constructor(
    center: Coordinate,
    initialRadius: number,
    section: SVGSection
  ) {
    const path: SVGCircleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    path.setAttribute('cx', center[0].toString());
    path.setAttribute('cy', center[1].toString());
    path.setAttribute('r', initialRadius.toString());
    this.node = path;
    this.section = section;
  }

  export(): StrokeNodeData {
    return {
      type: 'circle',
      data: this.node.outerHTML.toString(),
      section: this.section
    }
  }

  import(data: string) {
    const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    wrapper.innerHTML = data;
    this.node = <SVGCircleElement>wrapper.firstChild;

    wrapper.removeChild(this.node);
    wrapper.remove();
  }

  updateRadius(newRadius: number) {
    this.node.setAttribute('r', newRadius.toString());
  }

  updateCenter(newCenter: Coordinate) {
    this.node.setAttribute('cx', newCenter[0].toString());
    this.node.setAttribute('cy', newCenter[1].toString());
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

  setDashed(dashColor: string) {
    this.node.setAttribute('stroke-dasharray', '2,2');
    this.setStroke(dashColor);
  }

  delete() {
    this.node.remove();
  }
}
