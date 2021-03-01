import { getBlankGraphPath } from '../pathHandlers/blankGraph';

import { GraphDimensions, Color, RealRendererOptions } from '../types/RealRendererTypes';
export * as RealRendererTypes from '../types/RealRendererTypes';

import { RealRendererDefaults } from '../constants/defaults/RealRendererDefaults';
export * from '../constants/defaults/RealRendererDefaults';

export class RealRenderer {
  svg: SVGSVGElement;
  dimensions: GraphDimensions;
  paths: string[] = [];
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

    this.svg.style.backgroundColor = `rgb(${this.bgColor[0] * 255}, ${this.bgColor[1] * 255}, ${this.bgColor[2] * 255})`;

    this.paths.push(
      getBlankGraphPath(this.dimensions, this.xOffset, this.yOffset, this.axesColor, this.drawAxes)
    )
    this.svg.innerHTML = this.paths.join('\n');

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

  draw(numDraws: number = 1) {
    for (let i = 0; i < numDraws; i++) this._draw();
    return this;
  }

  _render() {
    if (this._doRender) {
      this.draw(this.drawsPerFrame);
      this._display(this.paths);

      window.requestAnimationFrame(() => {this._render()});
    }
  }

  _display(paths: string[]) {
    this.svg.innerHTML = paths.join('\n');
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

  resetTime() {
    this.time = 0;
    return this;
  }

  reset() {
    this.paths = [getBlankGraphPath(
      this.dimensions,
      this.xOffset,
      this.yOffset,
      this.axesColor,
      this.drawAxes
    )]
    this.resetTime();

    this._display(this.paths);

    return this;
  }
}
