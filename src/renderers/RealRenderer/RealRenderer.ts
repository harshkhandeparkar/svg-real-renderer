import { RealRendererDefaults } from '../../constants/defaults/RealRendererDefaults';
import { IRealRendererEvents, RealRendererEventList } from '../../constants/events/RealRendererEvents';
import { getBlankGraphPaths } from '../../pathMakers/blankGraph';
import { BGType, Color, GraphDimensions, RealRendererOptions, RealRendererSettings, Stroke, SVGSections } from '../../types/RealRendererTypes';
import { changeBackground, normalizeBG } from './background';
import { draw, _addStroke, _display, _draw, _drawFunc } from './draw/draw';
import { startRender, stopRender, toggleRender, _render } from './draw/render';
import { EventEmitter } from './events/eventEmitter';
import { exportData, importData } from './import-export';
import { attach, _setSVG, _setViewBox } from './svg/svg-dom';
import { changeOffsets, scale } from './svg/svg-settings';
import { redo, undo } from './undo';

export * from '../../constants/defaults/RealRendererDefaults';
export * as RealRendererTypes from '../../types/RealRendererTypes';

/**
 * General Real Renderer with no specific purpose. Should be extended to use.
 */
export abstract class RealRenderer<EventTypes extends IRealRendererEvents = IRealRendererEvents> extends EventEmitter<EventTypes> {
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
  protected _beforeExport() {}
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
