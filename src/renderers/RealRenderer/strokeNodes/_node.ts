import { StrokeNodeDataV2, StrokeNodeType, SVGSection } from '../../../types/RealRendererTypes';

export interface INodeData {
  /** stroke attribute */
  stroke: string | null;
  /** fill attribute */
  fill: string | null;
  /** strokeWidth attribute */
  strokeWidth: string | null;
  dashed: false | {dashColor: string};
  id: string | null;
  class: string | null;
  type: StrokeNodeType;
  section: SVGSection;
}

export class Node<NodeType extends SVGElement, StrokeNodeT extends StrokeNodeType> {
  node: NodeType;
  section: SVGSection;
  strokeNodeType: StrokeNodeT;

  constructor(
    section: SVGSection,
    elementName: string,
    strokeNodeType: StrokeNodeT
  ) {
    const path: NodeType = document.createElementNS('http://www.w3.org/2000/svg', elementName) as NodeType;

    this.strokeNodeType = strokeNodeType;
    this.node = path;
    this.section = section;
  }

  _exportBasicData(): INodeData {
    return {
      stroke: this.node.hasAttribute('stroke') ? this.node.getAttribute('stroke') : null,
      fill: this.node.hasAttribute('fill') ? this.node.getAttribute('fill') : null,
      strokeWidth: this.node.hasAttribute('stroke-width') ? this.node.getAttribute('stroke-width') : null,
      dashed: this.node.hasAttribute('stroke-dasharray') ? {dashColor: this.node.getAttribute('stroke')} : false,
      id: this.node.hasAttribute('id') ? this.node.getAttribute('id') : null,
      class: this.node.hasAttribute('class') ? this.node.getAttribute('class') : null,
      type: this.strokeNodeType,
      section: this.section
    }
  }

  /** @deprecated */
  importV1(data: string) {
    const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    wrapper.innerHTML = data;
    this.node = <NodeType>wrapper.firstChild;

    wrapper.removeChild(this.node);
    wrapper.remove();
  }

  import(data: StrokeNodeDataV2) {
    if (data.stroke !== null) this.setStroke(data.stroke);
    if (data.fill !== null) this.setFill(data.fill);
    if (data.strokeWidth !== null) this.node.setAttribute('stroke-width', data.strokeWidth);
    if (data.dashed !== false) this.setDashed(data.dashed.dashColor);
    if (data.id !== null) this.setId(data.id);
    if (data.class !== null) this.node.setAttribute('class', data.class);
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
