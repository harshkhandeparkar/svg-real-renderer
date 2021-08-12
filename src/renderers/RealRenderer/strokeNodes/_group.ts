import { StrokeNode, StrokeNodeDataV2, SVGSection } from '../../../types/RealRendererTypes';
import { Circle } from './_circle';
import { INodeData, Node } from './_node';
import { Path } from './_path';
import { Polygon } from './_polygon';
import { Text } from './_text/_text';

export interface IGroupNodeData extends INodeData {
  innerNodes: StrokeNodeDataV2[];
  type: 'group';
}

export class GroupNode extends Node<SVGGElement, 'group'> {
  innerNodes: StrokeNode[] = [];

  constructor(
    section: SVGSection,
    initialInnerNodes: StrokeNode[]
  ) {
    super(section, 'group', 'group');
    const g: SVGGElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    initialInnerNodes.forEach((node) => g.appendChild(node.node));
    this.innerNodes = initialInnerNodes;

    this.node = g;
    this.section = section;
  }

  export(): IGroupNodeData {
    return {
      ...this._exportBasicData(),
      innerNodes: this.innerNodes.map((innerNode) => innerNode.export()),
      type: this.strokeNodeType
    }
  }

  import(data: IGroupNodeData) {
    super.import(data);

    this.innerNodes = data.innerNodes.map((strokeNodeData) => {
      switch(strokeNodeData.type) {
        case 'circle':
          const circ = new Circle([0, 0], 0, strokeNodeData.section ?? 'strokes');
          circ.import(strokeNodeData);
          return circ;
        case 'path':
          const path = new Path('', strokeNodeData.section ?? 'strokes');
          path.import(strokeNodeData);
          return path;

        case 'text':
          const text = new Text([0, 0], '', strokeNodeData.section ?? 'strokes');
          text.import(strokeNodeData);
          return text;

        case 'group':
          const group = new GroupNode(strokeNodeData.section ?? 'strokes', []);
          group.import(strokeNodeData);
          return group;

        case 'polygon':
          const polygon = new Polygon([], strokeNodeData.section ?? 'strokes');
          polygon.import(strokeNodeData);
          return polygon;
      }
    })

    this.innerNodes.forEach((node) => this.node.appendChild(node.node));
  }
}
