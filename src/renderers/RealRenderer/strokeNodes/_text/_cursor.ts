import { Text } from './_text';

const moveOneCharacterLeft = ([str1, str2]: [string, string]): [string, string] => [str1 + str2[0], str2.slice(1)];
const moveOneCharacterRight = ([str1, str2]: [string, string]): [string, string] => [str1.slice(0, -1), str1[str1.length - 1] + str2];

const editTspanText = (
  [tspan1, tspan2]: [SVGTSpanElement, SVGTSpanElement],
  textChangeFunc: (textContents: [string, string]) => [string, string]
) => {
  const [newTspan1Text, newTspan2Text] = textChangeFunc([tspan1.textContent, tspan2.textContent]);
  tspan1.textContent = newTspan1Text;
  tspan2.textContent = newTspan2Text;
}

export function moveCursorLeft(this: Text) {
  // if the cursor is in between the line, move the cursor in the text
  if (this.tspans[this.cursorIndex].textContent.length > 0) {
    editTspanText(
      [this.tspans[this.cursorIndex], this.tspans[this.cursorIndex + 1]],
      moveOneCharacterRight
    )

     // workaround: empty svg tspans act like they do not exist
    if (this.tspans[this.cursorIndex].textContent === '' && this.cursorIndex !== 0) {
      this._setTspanPositioning(this.cursorSpan, 'lineBreak');
    }
  }
  // if the cursor is at the beginning of the line, move the cursor up
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
    editTspanText(
      [this.tspans[this.cursorIndex], this.tspans[this.cursorIndex + 1]],
      moveOneCharacterLeft
    )

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
