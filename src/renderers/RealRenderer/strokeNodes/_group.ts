import { StrokeNode, SVGSection } from '../../../types/RealRendererTypes';
import { Node } from './_node';

export class GroupNode extends Node<SVGGElement, 'group'> {
  constructor(
    section: SVGSection,
    initialInnerNodes: StrokeNode[]
  ) {
    super(section, 'group', 'group');
    const g: SVGGElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    initialInnerNodes.forEach((node) => g.appendChild(node.node));

    this.node = g;
    this.section = section;
  }
}
