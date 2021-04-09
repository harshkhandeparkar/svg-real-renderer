import { getBlankGraphPaths } from '../../pathMakers/blankGraph';

import { GraphDimensions, Color, RealRendererOptions, Stroke, StrokeExport, RealRendererSettings, BGType, RealExport } from '../../types/RealRendererTypes';
export * as RealRendererTypes from '../../types/RealRendererTypes';

import { RealRendererDefaults } from '../../constants/defaults/RealRendererDefaults';

export * from '../../constants/defaults/RealRendererDefaults';

import { undo, redo } from './undo';
import { Circle } from './strokeNodes/_circle';
import { Path } from './strokeNodes/_path';
import { Text } from './strokeNodes/_text';
import { Polygon } from './strokeNodes/_polygon';

export class RealRenderer {
  svg: SVGSVGElement;
  dimensions: GraphDimensions;
  strokes: Stroke[] = [];
  settings: RealRendererSettings;
  _strokeIndex: number = -1;
  yScaleFactor: number;
  bgColor: Color;
  bgType: BGType;
  axesColor: Color;
  drawsPerFrame: number;
  timeStep: number;
  time: number;
  xOffset: number;
  yOffset: number;
  _doRender: boolean;

  public undo = undo;
  public redo = redo;

  constructor(options: RealRendererOptions) {
    // *****DEFAULTS*****
    this.settings = {
      ...RealRendererDefaults,
      ...options
    }

    this.svg = this.settings.svg;
    this.dimensions = this.settings.dimensions;
    this.yScaleFactor = this.settings.yScaleFactor;
    this.bgColor = this.settings.bgColor;
    this.bgType = this.settings.bgType;
    this.axesColor = this.settings.axesColor;
    this.drawsPerFrame = this.settings.drawsPerFrame;
    this.timeStep = this.settings.timeStep;
    this.time = this.settings.initTime;

    this.xOffset = this.settings.xOffset; // %age offset
    this.yOffset = this.settings.yOffset; // %age offset

    this.xOffset = Math.max(0, Math.min(100, this.xOffset)) // Between 0 and 100
    this.yOffset = Math.max(0, Math.min(100, this.yOffset)) // Between 0 and 100
    // *****DEFAULTS*****

    if (this.svg === undefined) {
      throw 'No SVG Element Found';
    }

    this.svg.setAttribute('viewBox', `0 0 ${this.dimensions[0]} ${this.dimensions[1]}`);
    this.svg.setAttribute('preserveAspectRatio', 'none');

    this._addStroke(
      getBlankGraphPaths(
        this.dimensions,
        this.xOffset,
        this.yOffset,
        this.axesColor,
        this.bgColor,
        this.bgType
      )
    )
    this._display(this.strokes[this._strokeIndex]);

    this._doRender = false;
  }

  _drawFunc(time: number) { // Can be overridden
    return this;
  }

  _draw() {
    this.time += this.timeStep;

    this._drawFunc(this.time);
    return this;
  }

  _addStroke(stroke: Stroke) {
    if (this.strokes.length > this._strokeIndex + 1) this.strokes.splice(this._strokeIndex + 1, this.strokes.length - this._strokeIndex);
    this.strokes[++this._strokeIndex] = stroke;
  }

  draw(numDraws: number = 1) {
    for (let i = 0; i < numDraws; i++) this._draw();
    return this;
  }

  _render() {
    if (this._doRender) {
      this.draw(this.drawsPerFrame);
      this._display(this.strokes[this._strokeIndex]);

      window.requestAnimationFrame(() => {this._render()});
    }
  }

  _display(stroke: Stroke) {
    stroke.forEach((strokeNode) => {
      if (strokeNode.node.parentElement == null) this.svg.appendChild(strokeNode.node);
    })
  }

  startRender() {
    if (!this._doRender) {
      this._doRender = true;
      this._render();
      return this;
    }
  }

  stopRender() {
    this._doRender = false;
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
              const circ = new Circle([0, 0], 0);
              circ.import(strokeNodeData.data);
              return circ;

            case 'path':
              const path = new Path('');
              path.import(strokeNodeData.data);
              return path;

            case 'text':
              const text = new Text([0, 0], '');
              text.import(strokeNodeData.data);
              return text;

            case 'polygon':
              const polygon = new Polygon([]);
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
        this.xOffset,
        this.yOffset,
        this.axesColor,
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
