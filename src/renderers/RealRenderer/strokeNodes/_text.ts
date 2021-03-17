import { Coordinate } from '../../../types/RealRendererTypes';

export class Text {
  node: SVGTextElement;

  constructor(
    position: Coordinate,
    initialText: string
  ) {
    const path: SVGTextElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    path.textContent = initialText;
    path.setAttribute('x', position[0].toString());
    path.setAttribute('y', position[1].toString());
    this.node = path;
  }

  updateText(newText: string) {
    this.node.textContent = newText;
  }

  setStyle(proprty: string, value: string) {
    this.node.style[proprty] = value;
  }

  delete() {
    this.node.remove();
  }
}
