import { EventEmitter } from './events/eventEmitter';
import { IRealRendererEvents, RealRendererEventList } from '../../constants/events/RealRendererEvents';

import { getBlankGraphPaths } from '../../pathMakers/blankGraph';

import { GraphDimensions, Color, RealRendererOptions, Stroke, StrokeExport, RealRendererSettings, BGType, RealExport, SVGSections } from '../../types/RealRendererTypes';
export * as RealRendererTypes from '../../types/RealRendererTypes';

import { RealRendererDefaults } from '../../constants/defaults/RealRendererDefaults';

export * from '../../constants/defaults/RealRendererDefaults';

import { undo, redo } from './undo';
import { Circle } from './strokeNodes/_circle';
import { Path } from './strokeNodes/_path';
import { Text } from './strokeNodes/_text';
import { Polygon } from './strokeNodes/_polygon';

import { clamp } from '../../util/clamp';

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

    switch(this.settings.bgType.type) {
      case 'axes':
        this.settings.bgType.xOffset = clamp(this.settings.bgType.xOffset, 0, 100); // %age
        this.settings.bgType.yOffset = clamp(this.settings.bgType.yOffset, 0, 100); // %age
        break;

      case 'grid':
        this.settings.bgType.xSpacing = clamp(this.settings.bgType.xSpacing, 0, 100); // %age
        this.settings.bgType.ySpacing = clamp(this.settings.bgType.ySpacing, 0, 100); // %age
        if (this.settings.bgType.xSpacing === 0) this.settings.bgType.xSpacing = 1;
        if (this.settings.bgType.ySpacing === 0) this.settings.bgType.ySpacing = 1;
        break;

      case 'ruled':
        this.settings.bgType.spacing = clamp(this.settings.bgType.spacing, 0, 100);
        if (this.settings.bgType.spacing === 0) this.settings.bgType.spacing = 1;
        break;

      case 'none':
        break;

      default:
        break;
    }

    this.bgColor = this.settings.bgColor;
    this.bgType = this.settings.bgType;
    this.drawsPerFrame = this.settings.drawsPerFrame;
    this.timeStep = this.settings.timeStep;
    this.time = this.settings.initTime;
    this.scaleFactor = this.settings.scaleFactor;

    // *****DEFAULTS*****
  }

  protected _setSVG() {
    if (this.svg === undefined) {
      throw 'No SVG Element Found';
    }

    this._setViewBox(this.dimensions, this._offsetX, this._offsetY);
    this.svg.setAttribute('preserveAspectRatio', 'none');

    this.svgSections = {
      bg: document.createElementNS('http://www.w3.org/2000/svg', 'g'),
      strokes: document.createElementNS('http://www.w3.org/2000/svg', 'g'),
      overlay: document.createElementNS('http://www.w3.org/2000/svg', 'g')
    }

    this.svg.appendChild(this.svgSections.bg);
    this.svg.appendChild(this.svgSections.strokes);
    this.svg.appendChild(this.svgSections.overlay);

    this._addStroke(
      getBlankGraphPaths(
        this.dimensions,
        this.bgColor,
        this.bgType
      )
    )
    this._display(this.strokes[this._strokeIndex]);

    this._doRender = false;
  }

  protected _setViewBox(dimensions: GraphDimensions, xOffset: number, yOffset: number) {
    this.svg.setAttribute('viewBox', `${xOffset} ${yOffset} ${dimensions[0]} ${dimensions[1]}`);
  }

  protected _drawFunc(time: number) { // Can be overridden
    return this;
  }

  protected _draw() {
    this.time += this.timeStep;

    this._drawFunc(this.time);
    return this;
  }

  protected _addStroke(stroke: Stroke) {
    if (this.strokes.length > this._strokeIndex + 1) this.strokes.splice(this._strokeIndex + 1, this.strokes.length - this._strokeIndex);
    this.strokes[++this._strokeIndex] = stroke;
  }

  protected _render() {
    if (this._doRender) {
      this.draw(this.drawsPerFrame);
      this._display(this.strokes[this._strokeIndex]);

      window.requestAnimationFrame(() => {this._render()});
    }
  }

  protected _display(stroke: Stroke) {
    stroke.forEach((strokeNode) => {
      if (strokeNode.node.parentElement == null) this.svgSections[strokeNode.section].appendChild(strokeNode.node);
    })
  }

  /**
   * Attaches to a DOM SVG element to render to.
   * @param svg The SVG element to attach.
   * @param dimensions Dimensions of the graph.
   * @returns Self for chaining.
   */
  attach(svg: SVGSVGElement, dimensions: GraphDimensions) {
    this.dimensions = dimensions;
    this.originalDimensions = [
      dimensions[0],
      dimensions[1]
    ]

    this.svg = svg;

    this._setSVG();
    return this;
  }

  /**
   * Start rendering.
   * @returns Self for chaining.
   */
  startRender() {
    if (!this._doRender) {
      this._doRender = true;
      this._render();
      this.emit('start-render', {});
    }
    return this;
  }

  /**
   * Stop rendering.
   * @returns Self for chaining.
   */
  stopRender() {
    this._doRender = false;
    this.emit('stop-render', {});

    return this;
  }

  /**
   * Toggle rendering.
   * @returns Self for chaining.
   */
  toggleRender() {
    this._doRender = !this._doRender;
    if (this._doRender) this._render();

    return this;
  }

  /**
   * Draw a certain number of frames.
   * @param numDraws Number of frames to draw.
   * @returns Self for chaining.
   */
  draw(numDraws: number = 1) {
    for (let i = 0; i < numDraws; i++) this._draw();

    return this;
  }

  /**
   * Scale/zoom the graph.
   * @param scaleFactor Factor to scale the graph by. Larger number zooms in.
   * @returns Self for chaining.
   */
  scale(scaleFactor: number) {
    const oldScaleFactor = this.scaleFactor;
    this.scaleFactor = scaleFactor;
    this.dimensions[0] = this.originalDimensions[0] / scaleFactor;
    this.dimensions[1] = this.originalDimensions[1] / scaleFactor;

    // To clamp the offsets as well
    this.changeOffsets(this._offsetX, this._offsetY);

    this.emit('change-scale', {
      oldScaleFactor,
      newScaleFactor: this.scaleFactor
    })

    return this;
  }

  /**
   * Change the offsets of the graph (for panning)
   * @param xOffset Offset in the x-direction.
   * @param yOffset Offset in the y-direction.
   * @returns Self for chaining.
   */
  changeOffsets(xOffset: number, yOffset: number) {
    const oldOffsets = {
      x: this._offsetX,
      y: this._offsetY
    }
    this._offsetX = clamp(xOffset, 0, this.originalDimensions[0] - this.dimensions[0]);
    this._offsetY = clamp(yOffset, 0, this.originalDimensions[1] - this.dimensions[1]);
    this._setViewBox(this.dimensions, this._offsetX, this._offsetY);

    this.emit('change-offsets', {
      oldOffsets,
      newOffsets: {
        x: this._offsetX,
        y: this._offsetY
      }
    })

    return this;
  }

  /**
   * Export the data of the graph in a certain format that can be used to load the data later. Load using .importData().
   * @returns Data of the graph in a storable and loadable format.
   */
  exportData(): RealExport {
    const strokeExport: StrokeExport[] = [];
    this.strokes.forEach((stroke) => {
      strokeExport.push(
        stroke.map((node) => node.export())
      )
    })

    return {
      exportData: strokeExport,
      strokeIndex: this._strokeIndex,
      dimensions: this.dimensions,
      bgType: this.bgType
    }
  }

  /**
   * Import the data exported by .export() method.
   * @param data Data exported by .export()
   * @returns Self for chaining.
   */
  importData(
    data: RealExport
  ) {
    this.strokes.forEach((stroke) => {
      stroke.forEach((node) => node.delete());
    })

    this.svg.setAttribute('viewBox', `0 0 ${this.dimensions[0]} ${this.dimensions[1]}`);
    if (data.bgType) this.bgType = data.bgType;

    this.strokes = [];

    data.exportData.forEach((strokeExport) => {
      this.strokes.push(
        strokeExport.map((strokeNodeData) => {
          switch(strokeNodeData.type) {
            case 'circle':
              const circ = new Circle([0, 0], 0, strokeNodeData.section ? strokeNodeData.section : 'strokes');
              circ.import(strokeNodeData.data);
              return circ;

            case 'path':
              const path = new Path('', strokeNodeData.section ? strokeNodeData.section : 'strokes');
              path.import(strokeNodeData.data);
              return path;

            case 'text':
              const text = new Text([0, 0], '', strokeNodeData.section ? strokeNodeData.section : 'strokes');
              text.import(strokeNodeData.data);
              return text;

            case 'polygon':
              const polygon = new Polygon([], strokeNodeData.section ? strokeNodeData.section : 'strokes');
              polygon.import(strokeNodeData.data);
              return polygon;
          }
        })
      )
    })

    this._strokeIndex = data.strokeIndex;
    for (let i = 0; i <= this._strokeIndex; i++) {
      this._display(this.strokes[i]);
    }

    this.emit('import', {
      import: data
    })

    return this;
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

  /**
   * Changes the background of the graph.
   * @param newBG New background.
   * @returns Self for chaining.
   */
  changeBackground(newBG: BGType) {
    this.bgType = newBG;
    const newBGStrokes = getBlankGraphPaths(this.dimensions, this.bgColor, this.bgType);

    switch(this.bgType.type) {
      case 'axes':
        this.bgType.xOffset = clamp(this.bgType.xOffset, 0, 100); // %age
        this.bgType.yOffset = clamp(this.bgType.yOffset, 0, 100); // %age
        break;

      case 'grid':
        this.bgType.xSpacing = clamp(this.bgType.xSpacing, 0, 100); // %age
        this.bgType.ySpacing = clamp(this.bgType.ySpacing, 0, 100); // %age
        if (this.bgType.xSpacing === 0) this.bgType.xSpacing = 1;
        if (this.bgType.ySpacing === 0) this.bgType.ySpacing = 1;
        break;

      case 'ruled':
        this.bgType.spacing = clamp(this.bgType.spacing, 0, 100);
        if (this.bgType.spacing === 0) this.bgType.spacing = 1;
        break;

      case 'none':
        break;

      default:
        break;
    }

    this.strokes[0].forEach((stroke) => stroke.delete());
    this.strokes[0] = newBGStrokes;
    this._display(this.strokes[0]);

    return this;
  }
}
