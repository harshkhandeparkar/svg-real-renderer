import { SVGSection } from '../../../types/RealRendererTypes';
import { Node } from './_node';

export class Path extends Node<SVGPathElement, 'path'> {
  constructor(
    initialD: string,
    section: SVGSection
  ) {
    super(section, 'path', 'path');
    const path: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute('d', initialD);
    this.node = path;
    this.section = section;
  }

  updatePath(newD: string) {
    this.node.setAttribute('d', newD);
  }

  appendPath(appendD: string) {
    this.node.setAttribute('d', this.node.getAttribute('d') + ' ' + appendD);
  }
}
