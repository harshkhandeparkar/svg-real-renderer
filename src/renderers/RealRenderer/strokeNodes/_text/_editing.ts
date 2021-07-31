import { Text } from './_text';

export function _getCurrentSpanText(this: Text) {
  return this.tspans[this.cursorIndex].textContent;
}

export function _updateText(this: Text, newText: string) {
  this.tspans[this.cursorIndex].textContent = newText;

  if (this.tspans[this.cursorIndex].textContent !== '' && this.cursorIndex !== 0) { // workaround: empty svg tspans act like they do not exist
    this.cursorSpan.setAttribute('dy', `0em`);
    this.cursorSpan.removeAttribute('x');

    this.tspans[this.cursorIndex].setAttribute('dy', `${1.2}em`);
    this.tspans[this.cursorIndex].setAttribute('x', this.position[0].toString());
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
