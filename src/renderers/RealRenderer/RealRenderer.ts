import { getBlankGraphPath } from '../../pathMakers/blankGraph';

import { GraphDimensions, Color, RealRendererOptions, Stroke, StrokeExport } from '../../types/RealRendererTypes';
export * as RealRendererTypes from '../../types/RealRendererTypes';

import { RealRendererDefaults } from '../../constants/defaults/RealRendererDefaults';
import { getRGBColorString } from '../../util/getRGBColorString';

export * from '../../constants/defaults/RealRendererDefaults';

import { undo, redo } from './undo';
import { Circle } from './strokeNodes/_circle';
import { Path } from './strokeNodes/_path';
import { Text } from './strokeNodes/_text';

export class RealRenderer {
  svg: SVGSVGElement;
  dimensions: GraphDimensions;
  strokes: Stroke[] = [];
  _strokeIndex: number = -1;
  xScaleFactor: number;
  yScaleFactor: number;
  bgColor: Color;
  drawAxes: boolean;
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
    options = {
      ...RealRendererDefaults,
      ...options
    }

    this.svg = options.svg;
    this.dimensions = options.dimensions;
    this.xScaleFactor = options.xScaleFactor;
    this.yScaleFactor = options.yScaleFactor;
    this.bgColor = options.bgColor;
    this.drawAxes = options.drawAxes;
    this.axesColor = options.axesColor;
    this.drawsPerFrame = options.drawsPerFrame;
    this.timeStep = options.timeStep;
    this.time = options.initTime;

    this.xOffset = options.xOffset; // %age offset
    this.yOffset = options.yOffset; // %age offset

    this.xOffset = Math.max(0, Math.min(100, this.xOffset)) // Between 0 and 100
    this.yOffset = Math.max(0, Math.min(100, this.yOffset)) // Between 0 and 100
    // *****DEFAULTS*****

    if (this.svg === undefined) {
      throw 'No SVG Element Found';
    }

    this.svg.setAttribute('width', this.dimensions[0].toString());
    this.svg.setAttribute('height', this.dimensions[1].toString());

    this.svg.style.backgroundColor = `${getRGBColorString(this.bgColor)}`;

    this._addStroke(
      [getBlankGraphPath(this.dimensions, this.xOffset, this.yOffset, this.axesColor, this.drawAxes)]
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

  exportData(): {
    exportData: StrokeExport[],
    strokeIndex: number
  } {
    const strokeExport: StrokeExport[] = [];
    this.strokes.forEach((stroke) => {
      strokeExport.push(
        stroke.map((node) => node.export())
      )
    })

    return {
      exportData: strokeExport,
      strokeIndex: this._strokeIndex
    }
  }

  importData(
    data: {
      exportData: StrokeExport[],
      strokeIndex: number
    }
  ) {
    this.strokes.forEach((stroke) => {
      stroke.forEach((node) => node.delete());
    })

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
      [
        getBlankGraphPath(
          this.dimensions,
          this.xOffset,
          this.yOffset,
          this.axesColor,
          this.drawAxes
        )
      ]
    ]
    this._strokeIndex = 0;
    this.resetTime();

    this._display(this.strokes[this._strokeIndex]);

    return this;
  }
}
