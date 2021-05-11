import { getBlankGraphPaths } from '../../../pathMakers/blankGraph';
import { GraphDimensions } from '../../../types/RealRendererTypes';
import { RealRenderer } from '../RealRenderer';

export function _setSVG(this: RealRenderer) {
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

export function _setViewBox(this: RealRenderer, dimensions: GraphDimensions, xOffset: number, yOffset: number) {
  this.svg.setAttribute('viewBox', `${xOffset} ${yOffset} ${dimensions[0]} ${dimensions[1]}`);
}

/**
   * Attaches to a DOM SVG element to render to.
   * @param svg The SVG element to attach.
   * @param dimensions Dimensions of the graph.
   * @returns Self for chaining.
   */
export function attach(this: RealRenderer, svg: SVGSVGElement, dimensions: GraphDimensions) {
  this.dimensions = dimensions;
  this.originalDimensions = [
    dimensions[0],
    dimensions[1]
  ]

  this.svg = svg;

  this._setSVG();
  return this;
}
