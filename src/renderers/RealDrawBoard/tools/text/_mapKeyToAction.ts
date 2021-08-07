import { Text } from '../../../RealRenderer/strokeNodes/_text/_text';

export function _mapKeyToAction(e: KeyboardEvent, _selectedNode: Text) {
  switch(e.key.toLowerCase()) {
    case 'backspace':
      _selectedNode.deleteLastCharacter();
      break;
    case 'delete':
      _selectedNode.deleteNextCharacter();
      break;
    case 'arrowleft':
      _selectedNode.moveCursorLeft();
      break;
    case 'arrowright':
      _selectedNode.moveCursorRight();
      break;
    case 'arrowdown':
      _selectedNode.moveCursorDown();
      break;
    case 'arrowup':
      _selectedNode.moveCursorUp();
      break;
    case 'enter':
      if (e.shiftKey) _selectedNode.newLine();
      else {
        _selectedNode.destroyCursor();
        return null;
      }
      break;
    case 'shift':
    case 'control':
      break;
    default:
      _selectedNode.appendText(e.key);
      break;
  }

  return _selectedNode;
}
