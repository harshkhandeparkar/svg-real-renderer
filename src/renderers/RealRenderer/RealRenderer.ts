import { EventEmitter } from './events/eventEmitter';
import { IRealRendererEvents, RealRendererEventList } from './events/RealRendererEvents';

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
   * @param {RealRendererOptions} options
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

    this.svg = this.settings.svg;
    this.dimensions = this.settings.dimensions;
    this.originalDimensions = [
      this.settings.dimensions[0],
      this.settings.dimensions[1]
    ]
    this.bgColor = this.settings.bgColor;
    this.bgType = this.settings.bgType;
    this.drawsPerFrame = this.settings.drawsPerFrame;
    this.timeStep = this.settings.timeStep;
    this.time = this.settings.initTime;
    this.scaleFactor = this.settings.scaleFactor;

    // *****DEFAULTS*****

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

  draw(numDraws: number = 1) {
    for (let i = 0; i < numDraws; i++) this._draw();
    return this;
  }

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
  }

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
  }

  protected _render() {
    if (this._doRender) {
      this.draw(this.drawsPerFrame);
      this._display(this.strokes[this._strokeIndex]);

      window.requestAnimationFrame(() => {this._render()});
    }
  }

  _display(stroke: Stroke) {
    stroke.forEach((strokeNode) => {
      if (strokeNode.node.parentElement == null) this.svgSections[strokeNode.section].appendChild(strokeNode.node);
    })
  }

  startRender() {
    if (!this._doRender) {
      this._doRender = true;
      this._render();
      this.emit('start-render', {});
    }
    return this;
  }

  stopRender() {
    this._doRender = false;
    this.emit('stop-render', {});
    return this;
  }

  toggleRender() {
    this._doRender = !this._doRender;
    if (this._doRender) this._render();
    return this;
  }

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
      dimensions: this.dimensions
    }
  }

  importData(
    data: RealExport
  ) {
    this.strokes.forEach((stroke) => {
      stroke.forEach((node) => node.delete());
    })

    this.svg.setAttribute('viewBox', `0 0 ${this.dimensions[0]} ${this.dimensions[1]}`);

    this.strokes = [];

    data.exportData.forEach((strokeExport) => {
      this.strokes.push(
        strokeExport.map((strokeNodeData) => {
          switch(strokeNodeData.type) {
            case 'circle':
              const circ = new Circle([0, 0], 0, strokeNodeData.section);
              circ.import(strokeNodeData.data);
              return circ;

            case 'path':
              const path = new Path('', strokeNodeData.section);
              path.import(strokeNodeData.data);
              return path;

            case 'text':
              const text = new Text([0, 0], '', strokeNodeData.section);
              text.import(strokeNodeData.data);
              return text;

            case 'polygon':
              const polygon = new Polygon([], strokeNodeData.section);
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
  }

  resetTime() {
    this.time = 0;
    return this;
  }

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
