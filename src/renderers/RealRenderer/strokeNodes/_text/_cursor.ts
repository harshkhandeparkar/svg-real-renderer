import { Text } from './_text';

export function moveCursorLeft(this: Text) {
  if (this.tspans[this.cursorIndex].textContent.length > 0) {
    if (!this.tspans[this.cursorIndex + 1]) this._addTspan('', this.cursorIndex + 1);

    const beforeCursorText = this.tspans[this.cursorIndex].textContent;
    const afterCursorText = this.tspans[this.cursorIndex + 1].textContent;

    this.tspans[this.cursorIndex + 1].textContent = beforeCursorText[beforeCursorText.length - 1] + afterCursorText; // last character of before text becomes first character of after text
    this.tspans[this.cursorIndex].textContent = beforeCursorText.slice(0, -1); // remove last character

     // workaround: empty svg tspans act like they do not exist
    if (this.tspans[this.cursorIndex].textContent === '' && this.cursorIndex !== 0) {
      this._setTspanPositioning(this.cursorSpan, 'lineBreak');
    }
  }
  else if (this.cursorIndex > 0) {
    this._setTspanPositioning(this.tspans[this.cursorIndex + 1], 'lineBreak');

    this.cursorIndex = this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex) - 1];
    this._setTspanPositioning(this.tspans[this.cursorIndex + 1], 'inline');

    this.cursorSpan.remove();
    this.tspans[this.cursorIndex].insertAdjacentElement('afterend', this.cursorSpan);

    this._setTspanPositioning(this.cursorSpan, 'inline');

    this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex + 1)] = this.cursorIndex + 2;
  }
}

export function moveCursorRight(this: Text) {
  if (this.tspans[this.cursorIndex + 1] && this.tspans[this.cursorIndex + 1].textContent.length > 0) {
    const beforeCursorText = this.tspans[this.cursorIndex].textContent;
    const afterCursorText = this.tspans[this.cursorIndex + 1].textContent;

    this.tspans[this.cursorIndex].textContent = beforeCursorText + afterCursorText[0]; // first character of after text becomes last character of before text
    this.tspans[this.cursorIndex + 1].textContent = afterCursorText.slice(1); // remove first character of after cursorIndextext

     // workaround: empty svg tspans act like they do not exist
    if (this.tspans[this.cursorIndex].textContent !== '' && this.cursorIndex !== 0) {
      this._setTspanPositioning(this.cursorSpan, 'inline');
      this._setTspanPositioning(this.tspans[this.cursorIndex], 'lineBreak');
    }
  }
  else if (this.cursorIndex < this.tspans.length - 2) {
    this.cursorIndex = this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex) + 1] - 1;

    this.cursorSpan.remove();
    this.tspans[this.cursorIndex].insertAdjacentElement('afterend', this.cursorSpan);

    this._setTspanPositioning(this.cursorSpan, 'lineBreak');
    this._setTspanPositioning(this.tspans[this.cursorIndex + 1], 'inline');

    this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex + 1)] = this.cursorIndex;
  }
}

export function moveCursorDown(this: Text) {
  // check if another line exists
  const newLineIndex = this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex) + 1];

  if (newLineIndex) {
    // merge the current line into a single tspan
    const beforeCursorText = this.tspans[this.cursorIndex].textContent;
    const afterCursorText = this.tspans[this.cursorIndex + 1].textContent;

    // put all the text in one tspan
    this.tspans[this.cursorIndex].textContent = beforeCursorText + afterCursorText;

    // find out how the next line should be split
    const newLineText = this.tspans[newLineIndex].textContent;
    const newLineLength = newLineText.length;
    const splitIndex = Math.min(beforeCursorText.length - 1, newLineLength - 1);

    // find the split text
    const newSplitText = [
      newLineText.slice(0, splitIndex + 1),
      newLineText.slice(splitIndex + 1)
    ]

    // put the text in the right place
    this.tspans[newLineIndex - 1].textContent = newSplitText[0];
    this.tspans[newLineIndex].textContent = newSplitText[1];

    // move the cursor
    this.cursorSpan.remove();
    this.tspans[newLineIndex - 1].insertAdjacentElement('afterend', this.cursorSpan);

    // fix the dy
    this._setTspanPositioning(this.tspans[newLineIndex], 'inline');

    // workaround: empty svg tspans act like they do not exist
    if (newSplitText[0] === '') this._setTspanPositioning(this.cursorSpan, 'lineBreak');
    else this._setTspanPositioning(this.tspans[newLineIndex - 1], 'lineBreak');

    // fix the lineIndex
    this.lineIndexes[this.lineIndexes.indexOf(newLineIndex)] = newLineIndex - 1;
    this.lineIndexes.sort((a, b) => a - b);

    this.cursorIndex = newLineIndex - 1;
  }
}

export function moveCursorUp(this: Text) {
  // check if another line exists
  const newLineIndex = this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex) - 1];

  if (this.lineIndexes.includes(newLineIndex)) {
    // merge the current line into a single tspan
    const beforeCursorText = this.tspans[this.cursorIndex].textContent;
    const afterCursorText = this.tspans[this.cursorIndex + 1].textContent;

    // put all the text in one tspan
    this.tspans[this.cursorIndex + 1].textContent = beforeCursorText + afterCursorText;

    // find out how the next line should be split
    const newLineText = this.tspans[newLineIndex].textContent;
    const newLineLength = newLineText.length;
    const splitIndex = Math.min(beforeCursorText.length - 1, newLineLength - 1);

    // find the split text
    const newSplitText = [
      newLineText.slice(0, splitIndex + 1),
      newLineText.slice(splitIndex + 1)
    ]

    // put the text in the right place
    this.tspans[newLineIndex].textContent = newSplitText[0];
    this.tspans[newLineIndex + 1].textContent = newSplitText[1];

    // move the cursor
    this.cursorSpan.remove();
    this.tspans[newLineIndex].insertAdjacentElement('afterend', this.cursorSpan);

    // fix the dy
    this._setTspanPositioning(this.tspans[newLineIndex + 1], 'inline');
    this._setTspanPositioning(this.tspans[this.cursorIndex + 1], 'lineBreak');

    // fix the lineIndex
    this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex)] = this.cursorIndex + 1;
    this.lineIndexes.sort((a, b) => a - b);

    this.cursorIndex = newLineIndex;
  }
}

export function destroyCursor(this: Text) {
  this.cursorSpan.remove();
}

export function addCursor(this: Text) {
  this.tspans[this.cursorIndex].insertAdjacentElement('afterend', this.cursorSpan);
}
