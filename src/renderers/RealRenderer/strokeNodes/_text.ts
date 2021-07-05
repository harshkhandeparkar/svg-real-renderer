import { Coordinate, SVGSection } from '../../../types/RealRendererTypes';
import { Node } from './_node';

export class Text extends Node<SVGTextElement, 'text'> {
  constructor(
    position: Coordinate,
    initialText: string,
    section: SVGSection
  ) {
    super(section, 'text', 'text');
    const path: SVGTextElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    path.textContent = initialText;
    path.setAttribute('x', position[0].toString());
    path.setAttribute('y', position[1].toString());
    this.node = path;
    this.section = section;
  }

  getText() {
    return this.node.textContent;
  }

  updateText(newText: string) {
    this.node.textContent = newText;
  }

  appendText(append: string) {
    this.node.textContent = this.getText() + append;
  }

  setStyle(proprty: string, value: string) {
    this.node.style[proprty] = value;
  }

  setFontSize(size: number) {
    this.node.style.fontSize = `${size}px`;
  }
}
