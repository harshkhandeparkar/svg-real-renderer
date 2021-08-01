import { Coordinate, SVGSection } from '../../../../types/RealRendererTypes';
import { Node } from '../_node';

import { newLine, removeLine } from './_newlines';
import {
  addCursor,
  destroyCursor,
  moveCursorLeft,
  moveCursorRight,
  moveCursorDown,
  moveCursorUp
} from './_cursor';
import {
  _getCurrentSpanText,
  _updateText,
  getText,
  appendText,
  deleteLastCharacter
} from './_editing';

export class Text extends Node<SVGTextElement, 'text'> {
  tspans: SVGTSpanElement[] = [];

  cursorSpan: SVGTSpanElement;
  /** The text tspan after which the cursor is placed */
  cursorIndex: number = 0;
  /** span indexes at which a newLine starts */
  lineIndexes: number[] = [];

  position: Coordinate = [0, 0];

  public newLine = newLine;
  protected removeLine = removeLine;

  public addCursor = addCursor;
  public destroyCursor = destroyCursor;
  public moveCursorLeft = moveCursorLeft;
  public moveCursorRight = moveCursorRight;
  public moveCursorDown = moveCursorDown;
  public moveCursorUp = moveCursorUp;

  protected _getCurrentSpanText = _getCurrentSpanText;
  protected _updateText = _updateText;

  public getText = getText;
  public appendText = appendText;
  public deleteLastCharacter = deleteLastCharacter;

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

  protected _addTspan(
    text: string,
    index = 0,
    relativeTo: 'spanAfter' | 'spanBefore' = 'spanAfter'
  ) {
    this.lineIndexes = this.lineIndexes.map((i) => i >= index ? i + 1 : i);
    this.tspans.splice(
      index,
      0,
      document.createElementNS('http://www.w3.org/2000/svg', 'tspan')
    )
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

  protected _setTspanPositioning(
    tspan: SVGTSpanElement,
    positioningType: 'lineBreak' | 'inline'
  ) {
    if (positioningType === 'lineBreak') {
      tspan.setAttribute('x', this.position[0].toString());
      tspan.setAttribute('dy', `${1.2}em`);
    }
    else if (positioningType === 'inline') {
      tspan.removeAttribute('x');
      tspan.removeAttribute('dy');
    }
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

  import(data: string) {
    super.import(data);

    this.position = [
      Number(this.node.getAttribute('x')),
      Number(this.node.getAttribute('y'))
    ]
  }
}
