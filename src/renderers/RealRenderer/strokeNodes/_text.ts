import { Coordinate, StrokeNodeData, SVGSection } from '../../../types/RealRendererTypes';

export class Text {
  node: SVGTextElement;
  section: SVGSection;

  constructor(
    position: Coordinate,
    initialText: string,
    section: SVGSection
  ) {
    const path: SVGTextElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    path.textContent = initialText;
    path.setAttribute('x', position[0].toString());
    path.setAttribute('y', position[1].toString());
    this.node = path;
    this.section = section;
  }

  export(): StrokeNodeData {
    return {
      type: 'text',
      data: this.node.outerHTML.toString(),
      section: this.section
    }
  }

  import(data: string) {
    const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    wrapper.innerHTML = data;
    this.node = <SVGTextElement>wrapper.firstChild;

    wrapper.removeChild(this.node);
    wrapper.remove();
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
