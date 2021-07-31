import { Text } from './_text';

export function moveCursorLeft(this: Text) {
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

export function moveCursorRight(this: Text) {
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

export function destroyCursor(this: Text) {
  this.cursorSpan.remove();
}

export function addCursor(this: Text) {
  this.tspans[this.cursorIndex].insertAdjacentElement('afterend', this.cursorSpan);
}
