import { Text } from './_text';

export function newLine(this: Text) {
  if (this.tspans[this.cursorIndex + 1] !== undefined) {
    // if there is a span after the cursor, linebreak the cursor
    this._setTspanPositioning(this.cursorSpan, 'lineBreak');
    // add a new empty span on that line
    this._addTspan('', this.cursorIndex + 1, 'spanBefore');
    // increment cursorIndex due to new span
    this.cursorIndex++;

    this.lineIndexes.push(this.cursorIndex);
    this.lineIndexes.sort((a, b) => a - b);
  }
}

export function removeLine(this: Text) {
  // remove the cursorIndex line
  const [removedLine] = this.lineIndexes.splice(this.lineIndexes.indexOf(this.cursorIndex), 1);
  this.tspans[removedLine].remove();

  this.tspans.splice(removedLine, 1);
  this.lineIndexes = this.lineIndexes.map((i) => i >= removedLine ? i - 1 : i);

  this.cursorIndex = removedLine - 1;
}
