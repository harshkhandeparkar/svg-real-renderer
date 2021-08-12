import { Text } from '../../../RealRenderer/strokeNodes/_text/_text';

export function _mapKeyToAction(e: KeyboardEvent, _selectedNode: Text): [_selectedNode: Text, doPrevent: boolean] {
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
        return [null, true];
      }
      break;
    case 'shift': case 'control': case 'alt': case 'altgraph':
    case 'command': case 'tab': case 'home': case 'end':
    case 'pageup': case 'pagedown': case 'escape': case 'insert':
    case 'f1': case 'f2': case 'f3': case 'f4': case 'f5': case 'f6':
    case 'f7': case 'f8': case 'f9': case 'f10': case 'f11': case 'f12':
      return [_selectedNode, false];
    default:
      if (!e.ctrlKey) _selectedNode.appendText(e.key);
      else return [_selectedNode, false];
      break;
  }

  return [_selectedNode, true];
}
