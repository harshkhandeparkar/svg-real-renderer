import { Coordinate, SVGSection } from '../../../types/RealRendererTypes';
import { Node } from './_node';

export class Text extends Node<SVGTextElement, 'text'> {
  tspans: SVGTSpanElement[] = [];

  cursorSpan: SVGTSpanElement;
  /** The text tspan after which the cursor is placed */
  cursorIndex: number = 0;
  /** span indexes at which a newLine starts */
  lineIndexes: number[] = [];

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

    this.node.setAttribute('text-anchor', 'middle');

    this._addTspan(initialText);

    this.cursorSpan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    this.node.appendChild(this.cursorSpan);
    this.cursorSpan.classList.add('svg-real-db-text-cursor');
    this.cursorSpan.style.setProperty('position', 'relative');
    this.cursorSpan.textContent = '|';
    this.cursorIndex = 0;

    this._addTspan('', this.cursorIndex + 1); // span after cursor
    this.lineIndexes.push(0);

    this.position = [...position];

    this.node.setAttribute('x', (this.position[0]).toString());
    this.node.setAttribute('y', this.position[1].toString());
  }

  private _addTspan(
    text: string,
    index = 0,
    relativeTo: 'spanAfter' | 'spanBefore' = 'spanAfter'
  ) {
    this.lineIndexes = this.lineIndexes.map((i) => i >= index ? i + 1 : i);
    this.tspans.splice(index, 0, document.createElementNS('http://www.w3.org/2000/svg', 'tspan'));
    const newTspan = this.tspans[index];

    if (relativeTo === 'spanAfter') {
      if (this.tspans[index + 1]) this.tspans[index + 1].insertAdjacentElement('beforebegin', newTspan);
      else this.node.insertAdjacentElement('beforeend', newTspan);
    }
    else {
      if (this.tspans[index - 1]) this.tspans[index - 1].insertAdjacentElement('afterend', newTspan);
      else this.node.insertAdjacentElement('afterbegin', newTspan);
    }
    newTspan.textContent = text;
    newTspan.style.setProperty('whiteSpace', 'pre');
  }

  private _getCurrentSpanText() {
    return this.tspans[this.cursorIndex].textContent;
  }

  private _updateText(newText: string) {
    this.tspans[this.cursorIndex].textContent = newText;

    if (this.tspans[this.cursorIndex].textContent !== '' && this.cursorIndex !== 0) { // workaround: empty svg tspans act like they do not exist
      this.cursorSpan.setAttribute('dy', `0em`);
      this.cursorSpan.removeAttribute('x');

      this.tspans[this.cursorIndex].setAttribute('dy', `${1.2}em`);
      this.tspans[this.cursorIndex].setAttribute('x', this.position[0].toString());
    }
  }

  getText() {
    return this.tspans.map((tspan) => tspan.textContent).join('');
  }

  appendText(append: string) {
    this._updateText(this._getCurrentSpanText() + append);
  }

  deleteLastCharacter() {
    this._updateText(this._getCurrentSpanText().slice(0, -1));
  }

  updateTextBaseline(position: Coordinate) {
    this.node.setAttribute('x', position[0].toString());
    this.node.setAttribute('y', position[1].toString());

    this.tspans.forEach((tspan) => {
      if (tspan.hasAttribute('x')) tspan.setAttribute('x', position[0].toString());
    })
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

      if (this.tspans[this.cursorIndex].textContent === '' && this.cursorIndex !== 0) { // workaround: empty svg tspans act like they do not exist
        this.cursorSpan.setAttribute('dy', `${1.2}em`);
        this.cursorSpan.setAttribute('x', this.position[0].toString());
      }
    }
    else if (this.cursorIndex > 0) {
      this.tspans[this.cursorIndex + 1].setAttribute('dy', `${1.2}em`);
      this.tspans[this.cursorIndex + 1].setAttribute('x', this.position[0].toString());

      this.cursorIndex = this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex) - 1];
      this.tspans[this.cursorIndex + 1].setAttribute('dy', '0');
      this.tspans[this.cursorIndex + 1].removeAttribute('x');

      this.cursorSpan.remove();
      this.tspans[this.cursorIndex].insertAdjacentElement('afterend', this.cursorSpan);

      this.cursorSpan.setAttribute('dy', '0');
      this.cursorSpan.removeAttribute('x');
    }
  }

  moveCursorRight() {
    if (this.tspans[this.cursorIndex + 1] && this.tspans[this.cursorIndex + 1].textContent.length > 0) {
      let beforeCursorText = this.tspans[this.cursorIndex].textContent;
      let afterCursorText = this.tspans[this.cursorIndex + 1].textContent;

      this.tspans[this.cursorIndex].textContent = beforeCursorText + afterCursorText[0]; // first character of after text becomes last character of before text
      this.tspans[this.cursorIndex + 1].textContent = afterCursorText.slice(1); // remove first character of after cursorIndextext

      if (this.tspans[this.cursorIndex].textContent !== '' && this.cursorIndex !== 0) { // workaround: empty svg tspans act like they do not exist
        this.cursorSpan.setAttribute('dy', `0em`);
        this.cursorSpan.removeAttribute('x');

        this.tspans[this.cursorIndex].setAttribute('dy', `${1.2}em`);
        this.tspans[this.cursorIndex].setAttribute('x', this.position[0].toString());
      }
    }
    else if (this.cursorIndex < this.tspans.length - 2) {
      this.cursorIndex = this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex) + 1];

      this.cursorSpan.remove();
      this.tspans[this.cursorIndex].insertAdjacentElement('afterend', this.cursorSpan);

      this.cursorSpan.setAttribute('dy', `${1.2}em`);
      this.cursorSpan.setAttribute('x', this.position[0].toString());

      this.tspans[this.cursorIndex + 1].setAttribute('dy', '0');
      this.tspans[this.cursorIndex + 1].removeAttribute('x');
    }
  }

  newLine() {
    if (this.tspans[this.cursorIndex + 1]) {
      // if there is a span after the cursor, linebreak the cursor
      this.cursorSpan.setAttribute('dy', `${1.2}em`);
      this.cursorSpan.setAttribute('x', this.position[0].toString());
      // add a new empty span on that line
      this._addTspan('', this.cursorIndex + 1, 'spanBefore');
      // increment cursorIndex due to new span
      this.cursorIndex++;

      this.lineIndexes.push(this.cursorIndex);
      this.lineIndexes.sort((a, b) => a - b);
    }
  }

  destroyCursor() {
    this.cursorSpan.remove();
  }
}
