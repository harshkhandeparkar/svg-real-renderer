import { Coordinate, StrokeNodeData, SVGSection } from '../../../types/RealRendererTypes';

export class Polygon {
  node: SVGPolygonElement;
  section: SVGSection;

  constructor(
    points: Coordinate[],
    section: SVGSection
  ) {
    const path: SVGPolygonElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

    let pointsString = '';

    points.forEach((point) => {
      pointsString += `${point[0]},${point[1]} `;
    })

    path.setAttribute('points', pointsString);
    this.node = path;
    this.section = section;
  }

  export(): StrokeNodeData {
    return {
      type: 'polygon',
      data: this.node.outerHTML.toString(),
      section: this.section
    }
  }

  import(data: string) {
    const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    wrapper.innerHTML = data;
    this.node = <SVGPolygonElement>wrapper.firstChild;

    wrapper.removeChild(this.node);
    wrapper.remove();
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
