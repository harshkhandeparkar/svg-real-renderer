import { Text } from './_text';

export function _getBeforeCursorText(this: Text) {
  return this.tspans[this.cursorIndex].textContent;
}

export function _getAfterCursorText(this: Text) {
  return this.tspans[this.cursorIndex + 1].textContent;
}

export function _updateBeforeCursorText(this: Text, newText: string) {
  this.tspans[this.cursorIndex].textContent = newText;

  // workaround: empty svg tspans act like they do not exist
  if (this.tspans[this.cursorIndex].textContent !== '' && this.cursorIndex !== 0) {
    this._setTspanPositioning(this.cursorSpan, 'inline');
    this._setTspanPositioning(this.tspans[this.cursorIndex], 'lineBreak');
  }
}

export function _updateAfterCursorText(this: Text, newText: string) {
  this.tspans[this.cursorIndex + 1].textContent = newText;
}

export function getText(this: Text) {
  return this.tspans.map((tspan) => tspan.textContent).join('');
}

export function appendText(this: Text, append: string) {
  this._updateBeforeCursorText(this._getBeforeCursorText() + append);
}

export function deleteLastCharacter(this: Text) {
  this._updateBeforeCursorText(this._getBeforeCursorText().slice(0, -1));

  // end of a newline
  if (this._getBeforeCursorText() === '' && this.cursorIndex > 0) {
    this.removeLine();
  }
}

export function deleteNextCharacter(this: Text) {
  this._updateAfterCursorText(this._getAfterCursorText().slice(1));
}

export function setBold(this: Text, bold: boolean) {
  this.setStyle('font-weight', bold ? 'bold' : 'normal');
}

export function setItalic(this: Text, italic: boolean) {
  this.setStyle('font-style', italic ? 'italic' : 'normal');
}

export function setUnderline(this: Text, underline: boolean) {
  this.setStyle('text-decoration', underline ? 'underline' : 'none');
}
