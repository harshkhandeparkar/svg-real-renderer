import { Text } from './_text';

export function _getCurrentSpanText(this: Text) {
  return this.tspans[this.cursorIndex].textContent;
}

export function _updateText(this: Text, newText: string) {
  this.tspans[this.cursorIndex].textContent = newText;

  // workaround: empty svg tspans act like they do not exist
  if (this.tspans[this.cursorIndex].textContent !== '' && this.cursorIndex !== 0) {
    this._setTspanPositioning(this.cursorSpan, 'inline');
    this._setTspanPositioning(this.tspans[this.cursorIndex], 'lineBreak');
  }
}

export function getText(this: Text) {
  return this.tspans.map((tspan) => tspan.textContent).join('');
}

export function appendText(this: Text, append: string) {
  this._updateText(this._getCurrentSpanText() + append);
}

export function deleteLastCharacter(this: Text) {
  this._updateText(this._getCurrentSpanText().slice(0, -1));

  // end of a newline
  if (this._getCurrentSpanText() === '' && this.cursorIndex > 0) {
    this.removeLine();
  }
}
