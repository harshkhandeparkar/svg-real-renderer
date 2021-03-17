import { RealRenderer } from '../RealRenderer/RealRenderer';

import { RealDrawBoardOptions } from '../../types/RealDrawBoardTypes';
import { RealDrawBoardDefaults } from '../../constants/defaults/RealDrawBoardDefaults';

export * as RealRendererTypes from '../../types/RealRendererTypes';
export * as RealDrawBoardTypes from '../../types/RealDrawBoardTypes';
export * from '../../constants/defaults/RealDrawBoardDefaults';

import { _plot, _stroke } from './_draw';
import { undo, redo } from './undo';
import {
  changeTool,
  changeToolSetting,
  clear,
  _resetBoard
} from './boardManip';
import {
  _addDOMEvents,
  _removeDOMEvents
} from './_DOMEvents';
import {
  _getMouseCoords,
  _getTouchCoords
} from './_coords';

import { Path } from '../RealRenderer/strokeNodes/_path';

import { tools, Tool, ToolSettings } from './tools/tools';

export class RealDrawBoard extends RealRenderer {
  options: RealDrawBoardOptions;
  tool: Tool = RealDrawBoardDefaults.tool;
  toolSettings: ToolSettings;
  _isDrawing: boolean = false;
  /** key -> identifier, value -> coordinate
   *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
   */
  _lastCoords: Map<string, [number, number]> = new Map(); /* key -> identifier, value -> coordinate*/
  _doPreview: boolean = true; // If a preview should be drawn
  _strokes: Path[];

  protected _stroke = _stroke;
  protected _plot = _plot;
  protected _resetBoard = _resetBoard;
  protected _addDOMEvents = _addDOMEvents;
  protected _removeDOMEvents = _removeDOMEvents;
  protected _startStroke = tools[RealDrawBoardDefaults.tool]._startStroke;
  protected _endStroke = tools[RealDrawBoardDefaults.tool]._endStroke;
  protected _doStroke = tools[RealDrawBoardDefaults.tool]._doStroke;
  protected _toolPreview = tools[RealDrawBoardDefaults.tool]._toolPreview;
  protected _getMouseCoords = _getMouseCoords;
  protected _getTouchCoords = _getTouchCoords;

  public undo = undo;
  public redo = redo;
  public changeToolSetting = changeToolSetting;
  public changeTool = changeTool;
  public clear = clear;

  constructor(options: RealDrawBoardOptions) {
    // *****DEFAULTS*****
    super(options);

    options = {
      ...RealDrawBoardDefaults,
      ...options
    }

    this.options = options;

    this.toolSettings = options.toolSettings;

    this.changeTool(options.tool);
    // *****DEFAULTS*****
  }
  // --- DOM Event Listeners ---

  // --- Mouse Events ---
  _mouseDownEventListener = (e: MouseEvent) => {
    if (e.button === 0 /* Left Click */) {
      this.svg.addEventListener('mousemove', this._mouseMoveEventListener);

      const coords = this._getMouseCoords(e);

      this._startStroke(
        coords,
        'mouse'
      )
      this._lastCoords.set('mouse', coords);
    }
  }

  _mouseUpEventListener = (e: MouseEvent) => {
    if (e.button === 0 /* Left Click */) {
      const endCoords = this._getMouseCoords(e);
      this.svg.removeEventListener('mousemove', this._mouseMoveEventListener);

      if(this._lastCoords.has('mouse')) {
        this._endStroke(endCoords, 'mouse');
        this._lastCoords.delete('mouse');
      }

      this._display(this.paths);
    }
  }

  _mouseLeaveEventListener = (e: MouseEvent) => {
    this.svg.removeEventListener('mousemove', this._mouseMoveEventListener);

    if(this._lastCoords.has('mouse')) {
      this._endStroke(this._getMouseCoords(e), 'mouse');
      this._lastCoords.delete('mouse');
      this._display(this.paths);
    }
  }

  _mouseMoveEventListener = (e: MouseEvent) => {
    const coords = this._getMouseCoords(e);
    this._doStroke(coords, 'mouse');
    this._lastCoords.set('mouse', coords);
  }

  _previewMouseMoveEventListener = (e: MouseEvent) => {
    const coords = this._getMouseCoords(e);

    // if (this._doPreview) {
      // this._display(this._toolPreview(coords, 'mouse'));

    // }
    this._display(this.paths);
  }
  // --- Mouse Events ---

  // --- Touch Events ---
  _touchStartEventListener = (e: TouchEvent) => {
    e.preventDefault();

    for (let i = 0; i < e.touches.length; i++) {
      const coords = this._getTouchCoords(e.touches.item(i));
      this._startStroke(
        coords,
        e.touches.item(i).identifier.toString()
      )
      this._lastCoords.set(
        e.touches.item(i).identifier.toString(),
        coords
      )
    }
  }

  _touchEndEventListener = (e: TouchEvent) => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const coords = this._getTouchCoords(e.changedTouches.item(i));
      this._endStroke(
        coords,
        e.changedTouches.item(i).identifier.toString()
      )
      this._lastCoords.delete(
        e.changedTouches.item(i).identifier.toString()
      )
    }
  }

  _touchMoveEventListener = (e: TouchEvent) => {
    for (let i = 0; i < e.touches.length; i++) {
      const coords = this._getTouchCoords(e.touches.item(i));
      this._doStroke(
        coords,
        e.touches.item(i).identifier.toString()
      )
      this._lastCoords.set(
        e.touches.item(i).identifier.toString(),
        coords
      )
    }
  }

  _previewTouchMoveEventListener = (e: TouchEvent) => {
    for (let i = 0; i < e.touches.length; i++) {
      // if (!this._doPreview) {
        // this._display(this._toolPreview(this._getTouchCoords(e.touches.item(i)), e.touches.item(i).identifier.toString()));
      // }
      this._display(this.paths);
    }
  }
  // --- Touch Events ---

  // --- DOM Event Listeners ---
  startRender() {
    this._addDOMEvents();
    this._isDrawing = true;

    return this;
  }

  stopRender() {
    this._removeDOMEvents();
    this._isDrawing = false;

    return this;
  }

  reset() {
    this._resetBoard();
    super.reset();

    return this;
  }
}
