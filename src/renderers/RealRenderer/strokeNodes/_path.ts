import { SVGSection } from '../../../types/RealRendererTypes';
import { INodeData, Node } from './_node';

export interface IPathNodeData extends INodeData {
  d: string;
  type: 'path';
}

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

  export(): IPathNodeData {
    return {
      ...this._exportBasicData(),
      d: this.node.getAttribute('d'),
      type: this.strokeNodeType
    }
  }

  import(data: IPathNodeData) {
    super.import(data);

    this.node.setAttribute('d', data.d);
  }
}
