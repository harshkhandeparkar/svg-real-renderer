import { Coordinate, StrokeNodeData, SVGSection, StrokeNodeType } from '../../../types/RealRendererTypes';

export class Node<NodeType extends SVGElement, StrokeNodeT extends StrokeNodeType> {
  node: NodeType;
  section: SVGSection;
  elementName: string;
  strokeNodeType: StrokeNodeT;

  constructor(
    section: SVGSection,
    elementName: string,
    strokeNodeType: StrokeNodeT
  ) {
    const path: NodeType = document.createElementNS('http://www.w3.org/2000/svg', this.elementName) as NodeType;

    this.elementName = elementName;
    this.strokeNodeType = strokeNodeType;
    this.node = path;
    this.section = section;
  }

  export(): StrokeNodeData {
    return {
      type: this.strokeNodeType,
      data: this.node.outerHTML.toString(),
      section: this.section
    }
  }

  import(data: string) {
    const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    wrapper.innerHTML = data;
    this.node = <NodeType>wrapper.firstChild;

    wrapper.removeChild(this.node);
    wrapper.remove();
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

  setId(id: string) {
    this.node.setAttribute('id', id);
  }

  setClassName(className: string) {
    this.node.classList.add(className);
  }

  delete() {
    this.node.remove();
  }
}
