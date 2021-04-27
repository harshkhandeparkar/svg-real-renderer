import { Coordinate, SVGSection } from '../../../types/RealRendererTypes';
import { Node } from './_node';

export class Polygon extends Node<SVGPolygonElement, 'polygon'> {
  constructor(
    points: Coordinate[],
    section: SVGSection
  ) {
    super(section, 'polygon', 'polygon');
    const path: SVGPolygonElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

    let pointsString = '';

    points.forEach((point) => {
      pointsString += `${point[0]},${point[1]} `;
    })

    path.setAttribute('points', pointsString);
    this.node = path;
    this.section = section;
  }

  updatePoints(newPoints: Coordinate[]) {
    let pointsString = '';

    newPoints.forEach((point) => {
      pointsString += `${point[0]},${point[1]} `;
    })

    this.node.setAttribute('points', pointsString);
  }

  addPoint(point: Coordinate) {
    this.node.setAttribute('points', this.node.getAttribute('points') + `${point[0]},${point[1]} `);
  }
}
