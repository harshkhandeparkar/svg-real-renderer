import { Color, Coordinate } from '../../../../types/RealRendererTypes';
import { getRGBColorString } from '../../../../util/getRGBColorString';
import { Polygon } from '../../../RealRenderer/strokeNodes/_polygon';
import { Text } from '../../../RealRenderer/strokeNodes/_text/_text';
import { Tool } from '../_tool';
import { _mapKeyToAction } from './_mapKeyToAction';

export const name = 'text';

export interface ITextSettings {
  fontSize: number;
  fontColor: Color;
  textToolMode: 'new' | 'edit';
}

export type TextOptions = ITextSettings | {};

export const TextDefaults: ITextSettings = {
  fontSize: 10,
  fontColor: [1, 1, 1],
  textToolMode: 'new'
}

/**
 * Text Tool
 * HOW TO USE:
 * There are two modes: 'new' and 'edit'
 * In 'new' mode, drag on the board to insert new text, this will also change the mode to edit mode.
 * In 'edit' mode, type to enter text. The following keyboard shortcuts/functions are supported:
 * 1) Arrow keys: Move the cursor.
 * 2) Backspace
 * 3) Shift + Enter: Add a new line.
 * 4) Enter: Confirm editing. NOTE: The text will NOT be editable after this step. This will be changed in future version.
 *
 * Cursor Styling:
 * The cursor is currently just a '|' character in an SVG <tspan>.
 * To style the cursor (blinking, color), add CSS to the `.svg-real-db-text-cursor' class.
 * See: /example/index.css in the repo.
 */
export class TextTool extends Tool {
  /** key -> identifier, value -> coordinate
   *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
   */
  _startCoords: Map<string, [number, number]> = new Map(); /* key -> identifier, value -> coordinate*/
  _selectedNode: Text | null = null;

  public _onLoad() {
    this.RDB.on('tool-setting-change', 'text-tool-handler', ({settingName, newValue}) => {
      if (this.RDB.toolSettings.textToolMode === 'edit' && this._selectedNode !== null) {
        if (settingName === 'fontColor') this._selectedNode.setFill(getRGBColorString(newValue as Color));
        if (settingName === 'fontSize') this._selectedNode.setFontSize(newValue as number);
      }
    })

    this.RDB.on('board-cleared', 'text-tool-handler', () => {
      this.RDB.changeToolSetting('textToolMode', 'edit');
    })
  }

  public _startStroke(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    if (this.RDB.toolSettings.textToolMode === 'new') {
      if (this.RDB._previewStroke.has(identifier)) {
        this.RDB._previewStroke.get(identifier).forEach((strokeNode) => {
          strokeNode.delete();
        })
      }

      this._startCoords.set(identifier, coords);

      const boundingBox = new Polygon([coords, coords, coords, coords], 'overlay');
      boundingBox.setDashed(getRGBColorString([0.5, 0.5, 0.5]));
      boundingBox.setFill('transparent');

      this.RDB._previewStroke.set(identifier, [boundingBox]);
    }
  }

  public _endStroke(
    endCoords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    if (this.RDB.toolSettings.textToolMode === 'new') {
      const [startX, startY] = this._startCoords.get(identifier);
      const [endX, endY] = endCoords;

      const baselineCoords: Coordinate = [
        (startX + endX) / 2,
        (startY + endY) / 2
      ]

      const textPath = new Text(baselineCoords, 'Enter Text', 'strokes');

      textPath.setFill(getRGBColorString(this.RDB.toolSettings.fontColor));
      textPath.setFontSize(this.RDB.toolSettings.fontSize);

      this.RDB._addStroke([textPath]);
      this.RDB._strokeIdentifierMap.set(identifier, this.RDB._strokeIndex);


      if (this._selectedNode !== null) this._selectedNode.destroyCursor();
      this._selectedNode = textPath;

      this.RDB.changeToolSetting('textToolMode', 'edit');

      if (this.RDB._previewStroke.has(identifier)) {
        this.RDB._previewStroke.get(identifier).forEach(node => node.delete());
        this.RDB._previewStroke.delete(identifier)
      }
    }
  }

  public _doStroke(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    if (this.RDB.toolSettings.textToolMode === 'new') {
      const boundingBox = this.RDB._previewStroke.get(identifier)[0] as Polygon;
      const [startX, startY] = this._startCoords.get(identifier);
      const [endX, endY] = coords;

      boundingBox.updatePoints([
        [startX, startY],
        [endX, startY],
        [endX, endY],
        [startX, endY]
      ])
    }
  }

  public _onKey(e: KeyboardEvent) {
    if (this.RDB.toolSettings.textToolMode === 'edit' && this._selectedNode !== null) {
      e.preventDefault();
      this._selectedNode = _mapKeyToAction(e, this._selectedNode);
    }
  }
}
