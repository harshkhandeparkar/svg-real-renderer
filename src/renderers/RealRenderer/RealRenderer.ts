import { EventEmitter } from './events/eventEmitter';
import { IRealRendererEvents, RealRendererEventList } from '../../constants/events/RealRendererEvents';

import { getBlankGraphPaths } from '../../pathMakers/blankGraph';

import { GraphDimensions, Color, RealRendererOptions, Stroke, RealRendererSettings, BGType, SVGSections } from '../../types/RealRendererTypes';
export * as RealRendererTypes from '../../types/RealRendererTypes';

import { RealRendererDefaults } from '../../constants/defaults/RealRendererDefaults';

export * from '../../constants/defaults/RealRendererDefaults';

import { undo, redo } from './undo';

import { exportData, importData } from './import-export';
import { changeBackground, normalizeBG } from './background';
import { attach, _setSVG, _setViewBox } from './svg/svg-dom';
import { scale, changeOffsets } from './svg/svg-settings';
import { _drawFunc, _draw, draw, _display, _addStroke } from './draw/draw';
import { startRender, stopRender, toggleRender, _render } from './draw/render';

/**
 * General Real Renderer with no specific purpose. Should be extended to use.
 */
export class RealRenderer<EventTypes extends IRealRendererEvents = IRealRendererEvents> extends EventEmitter<EventTypes> {
  svg: SVGSVGElement;
  svgSections: SVGSections;
  dimensions: GraphDimensions;
  scaleFactor: number;
  _offsetX: number = 0;
  _offsetY: number = 0;
  originalDimensions: GraphDimensions;
  strokes: Stroke[] = [];
  settings: RealRendererSettings;
  _strokeIndex: number = -1;
  bgColor: Color;
  bgType: BGType;
  drawsPerFrame: number;
  timeStep: number;
  time: number;
  _doRender: boolean;

  public undo = undo;
  public redo = redo;

  public exportData = exportData;
  public importData = importData;
  public changeBackground = changeBackground;

  public scale = scale;
  public changeOffsets = changeOffsets;
  public attach = attach;

  public draw = draw;
  public startRender = startRender;
  public stopRender = stopRender;
  public toggleRender = toggleRender;

  protected normalizeBG = normalizeBG;
  protected _setSVG = _setSVG;
  protected _setViewBox = _setViewBox;

  protected _drawFunc = _drawFunc;
  protected _draw = _draw;
  /** @internal */
  public _display = _display;
  /** @internal */
  public _addStroke = _addStroke;

  protected _render = _render;

  /**
   *
   * @param options
   * @param eventList
   */
  constructor(
    options: RealRendererOptions,
    eventList: (keyof EventTypes)[] = RealRendererEventList
  ) {
    super(eventList);

    // *****DEFAULTS*****
    this.settings = {
      ...RealRendererDefaults,
      ...options
    }

    this.bgType = this.settings.bgType;
    this.normalizeBG();

    this.bgColor = this.settings.bgColor;
    this.drawsPerFrame = this.settings.drawsPerFrame;
    this.timeStep = this.settings.timeStep;
    this.time = this.settings.initTime;
    this.scaleFactor = this.settings.scaleFactor;

    // *****DEFAULTS*****
  }

  /**
   * Resets the internal time counter.
   * @returns Self for chaining.
   */
  resetTime() {
    this.time = 0;

    return this;
  }

  /**
   * Resets everything regarding the graph.
   * @returns Self for chaining.
   */
  reset() {
    this.strokes = [
      getBlankGraphPaths(
        this.dimensions,
        this.bgColor,
        this.bgType
      )
    ]
    this._strokeIndex = 0;
    this.resetTime();

    this._display(this.strokes[this._strokeIndex]);

    return this;
  }
}
