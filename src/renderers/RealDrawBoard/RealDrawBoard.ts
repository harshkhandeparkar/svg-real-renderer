import { RealRenderer } from '../RealRenderer/RealRenderer';

import { RealDrawBoardOptions } from '../../types/RealDrawBoardTypes';
import { RealDrawBoardDefaults } from '../../constants/defaults/RealDrawBoardDefaults';

export * as RealRendererTypes from '../../types/RealRendererTypes';
export * as RealDrawBoardTypes from '../../types/RealDrawBoardTypes';
export * from '../../constants/defaults/RealDrawBoardDefaults';

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

import { tools, Tool, ToolSettings } from './tools/tools';
import { Coordinate, Stroke } from '../../types/RealRendererTypes';

export class RealDrawBoard extends RealRenderer {
  options: RealDrawBoardOptions;
  tool: Tool = RealDrawBoardDefaults.tool;
  toolSettings: ToolSettings;
  /** key -> identifier, value -> coordinate
   *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
   */
  _lastCoords: Map<string, Coordinate> = new Map(); /* key -> identifier, value -> coordinate*/
  _doPreview: boolean = true; // If a preview should be drawn
  /**
   * The preview for the current stroke
   */
  _previewStroke: Map<string, Stroke> = new Map();

  protected _resetBoard = _resetBoard;
  protected _addDOMEvents = _addDOMEvents;
  protected _removeDOMEvents = _removeDOMEvents;
  protected _startStroke = tools[RealDrawBoardDefaults.tool]._startStroke;
  protected _endStroke = tools[RealDrawBoardDefaults.tool]._endStroke;
  protected _doStroke = tools[RealDrawBoardDefaults.tool]._doStroke;
  protected _toolPreview = tools[RealDrawBoardDefaults.tool]._toolPreview;
  protected _getMouseCoords = _getMouseCoords;
  protected _getTouchCoords = _getTouchCoords;

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

      this._display(this.strokes[this._strokeIndex]);
    }
  }

  _mouseLeaveEventListener = (e: MouseEvent) => {
    this.svg.removeEventListener('mousemove', this._mouseMoveEventListener);

    if(this._lastCoords.has('mouse')) {
      this._endStroke(this._getMouseCoords(e), 'mouse');
      this._lastCoords.delete('mouse');
      this._display(this.strokes[this._strokeIndex]);
    }
  }

  _mouseMoveEventListener = (e: MouseEvent) => {
    const coords = this._getMouseCoords(e);
    this._doStroke(coords, 'mouse');
    this._lastCoords.set('mouse', coords);
  }

  _previewMouseMoveEventListener = (e: MouseEvent) => {
    const coords = this._getMouseCoords(e);

    if (this._doPreview) {
      if (!this._previewStroke.has('mouse')) this._previewStroke.set('mouse', []);

      this._toolPreview(coords, 'mouse');
      this._display(this._previewStroke.get('mouse'));
    }

    this._display(this.strokes[this._strokeIndex]);
  }
  // --- Mouse Events ---

  // --- Touch Events ---
  _touchStartEventListener = (e: TouchEvent) => {
    e.preventDefault();

    for (let i = 0; i < e.touches.length; i++) {
      const coords = this._getTouchCoords(e.touches.item(i));
      const identifier = e.touches.item(i).identifier.toString();

      this._startStroke(
        coords,
        identifier
      )
      this._lastCoords.set(
        identifier,
        coords
      )
    }
  }

  _touchEndEventListener = (e: TouchEvent) => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const coords = this._getTouchCoords(e.changedTouches.item(i));
      const identifier = e.changedTouches.item(i).identifier.toString();

      this._endStroke(
        coords,
        identifier
      )
      this._lastCoords.delete(
        identifier
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
      this._lastCoords.set(e.touches.item(i).identifier.toString(), coords);
    }
  }

  _previewTouchMoveEventListener = (e: TouchEvent) => {
    for (let i = 0; i < e.touches.length; i++) {
      const coords = this._getTouchCoords(e.touches.item(i));
      const identifier = e.touches.item(i).identifier.toString();

      if (this._doPreview) {
        if (!this._previewStroke.has(identifier)) this._previewStroke.set(identifier, []);
        this._toolPreview(coords, identifier);
        this._display(this._previewStroke.get(identifier));
      }

      this._display(this.strokes[this._strokeIndex]);
    }
  }
  // --- Touch Events ---

  // --- DOM Event Listeners ---
  startRender() {
    this._addDOMEvents();

    return this;
  }

  stopRender() {
    this._removeDOMEvents();

    return this;
  }

  reset() {
    this._resetBoard();
    super.reset();

    return this;
  }
}
