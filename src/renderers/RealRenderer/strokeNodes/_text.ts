import { Coordinate, SVGSection } from '../../../types/RealRendererTypes';
import { Node } from './_node';

export class Text extends Node<SVGTextElement, 'text'> {
  tspans: SVGTSpanElement[] = [];
  spanIndex: number = 0;

  cursorSpan: SVGTSpanElement;
  /** The text tspan after which the cursor is placed */
  cursorIndex: number = 0;

  position: Coordinate = [0, 0];

  constructor(
    position: Coordinate,
    initialText: string,
    section: SVGSection
  ) {
    super(section, 'text', 'text');
    const path: SVGTextElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    this.node = path;
    this.section = section;

    this._addTspan(initialText);

    this.cursorSpan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    this.node.appendChild(this.cursorSpan);
    this.cursorSpan.classList.add('svg-real-db-text-cursor');
    this.cursorSpan.textContent = '|';
    this.cursorIndex = 0;

    this.position = [...position];

    this.node.setAttribute('x', this.position[0].toString());
    this.node.setAttribute('y', this.position[1].toString());
  }

  private _addTspan(text: string, index = 0) {
    this.tspans.splice(index, 0, document.createElementNS('http://www.w3.org/2000/svg', 'tspan'));

    this.node.appendChild(this.tspans[index]);
    this.tspans[index].textContent = text;
    this.tspans[index].style.whiteSpace = 'pre';
  }

  getText() {
    return this.tspans[this.spanIndex].textContent;
  }

  updateText(newText: string) {
    this.tspans[this.spanIndex].textContent = newText;
  }

  appendText(append: string) {
    this.updateText(this.getText() + append);
  }

  updateTextBaseline(position: Coordinate) {
    this.node.setAttribute('x', position[0].toString());
    this.node.setAttribute('y', position[1].toString());
  }

  centerNode() {
    const textWidth = this.node.getBBox().width;

    this.updateTextBaseline([
      this.position[0] - textWidth / 2,
      this.position[1]
    ])
  }

  setStyle(proprty: string, value: string) {
    this.node.style[proprty] = value;
  }

  setFontSize(size: number) {
    this.node.style.fontSize = `${size}px`;
  }

  moveCursorLeft() {
    if (this.tspans[this.cursorIndex].textContent.length > 0) {
      if (!this.tspans[this.cursorIndex + 1]) this._addTspan('', this.cursorIndex + 1);

      let beforeCursorText = this.tspans[this.cursorIndex].textContent;
      let afterCursorText = this.tspans[this.cursorIndex + 1].textContent;

      this.tspans[this.cursorIndex + 1].textContent = beforeCursorText[beforeCursorText.length - 1] + afterCursorText; // last character of before text becomes first character of after text
      this.tspans[this.cursorIndex].textContent = beforeCursorText.slice(0, -1); // remove last character
    }
  }

  moveCursorRight() {
    if (this.tspans[this.cursorIndex + 1] && this.tspans[this.cursorIndex + 1].textContent.length > 0) {
      let beforeCursorText = this.tspans[this.cursorIndex].textContent;
      let afterCursorText = this.tspans[this.cursorIndex + 1].textContent;

      this.tspans[this.cursorIndex].textContent = beforeCursorText + afterCursorText[0]; // first character of after text becomes last character of before text
      this.tspans[this.cursorIndex + 1].textContent = afterCursorText.slice(1); // remove first character of after text
    }
  }

  destroyCursor() {
    this.cursorSpan.remove();
  }
}
