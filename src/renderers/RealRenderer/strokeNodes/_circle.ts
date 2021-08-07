import { Coordinate, SVGSection } from '../../../types/RealRendererTypes';
import { INodeData, Node } from './_node';

export interface ICircleNodeData extends INodeData {
  center: [cy: string, cy: string];
  radius: string;
  type: 'circle';
}

export class Circle extends Node<SVGCircleElement, 'circle'> {
  constructor(
    center: Coordinate,
    initialRadius: number,
    section: SVGSection
  ) {
    super(section, 'circle', 'circle');
    const path: SVGCircleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    path.setAttribute('cx', center[0].toString());
    path.setAttribute('cy', center[1].toString());
    path.setAttribute('r', initialRadius.toString());
    this.node = path;
    this.section = section;
  }

  updateRadius(newRadius: number) {
    this.node.setAttribute('r', newRadius.toString());
  }

  updateCenter(newCenter: Coordinate) {
    this.node.setAttribute('cx', newCenter[0].toString());
    this.node.setAttribute('cy', newCenter[1].toString());
  }

  export(): ICircleNodeData {
    return {
      ...this._exportBasicData(),
      center: [this.node.getAttribute('cx'), this.node.getAttribute('cy')],
      radius: this.node.getAttribute('radius'),
      type: this.strokeNodeType
    }
  }

  import(data: ICircleNodeData) {
    this.node.setAttribute('cx', data.center[0]);
    this.node.setAttribute('cy', data.center[1]);

    this.node.setAttribute('r', data.radius);
  }
}

