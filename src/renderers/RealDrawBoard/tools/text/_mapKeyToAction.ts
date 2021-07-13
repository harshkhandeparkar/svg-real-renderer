import { Text } from '../../../RealRenderer/strokeNodes/_text';

export function _mapKeyToAction(e: KeyboardEvent, textNode: Text) {
  switch(e.key.toLowerCase()) {
    case 'backspace':
      textNode.updateText(textNode.getText().slice(0, -1));
      break;
    case 'arrowleft':
      textNode.moveCursorLeft();
      break;
    case 'arrowright':
      textNode.moveCursorRight();
      break;
    case 'shift':
    case 'control':
      break;
    default:
      textNode.appendText(e.key);
      break;
  }
}
