import { Text } from '../../../RealRenderer/strokeNodes/_text/_text';

export function _mapKeyToAction(e: KeyboardEvent, textNode: Text) {
  switch(e.key.toLowerCase()) {
    case 'backspace':
      textNode.deleteLastCharacter();
      break;
    case 'arrowleft':
      textNode.moveCursorLeft();
      break;
    case 'arrowright':
      textNode.moveCursorRight();
      break;
    // case 'arrowdown':
    //   textNode.moveCursorDown();
    //   break;
    // case 'arrowup':
    //   textNode.moveCursorUp();
      break;
    case 'enter':
      if (e.shiftKey) textNode.newLine();
      break;
    case 'shift':
    case 'control':
      break;
    default:
      textNode.appendText(e.key);
      break;
  }
}
