import { RealRenderer } from '../RealRenderer';

export function _render(this: RealRenderer) {
  if (this._doRender) {
    this.draw(this.drawsPerFrame);
    this._display(this.strokes[this._strokeIndex]);

    window.requestAnimationFrame(() => {this._render()});
  }
}

/**
 * Start rendering.
 * @returns Self for chaining.
 */
export function startRender(this: RealRenderer) {
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
export function stopRender(this: RealRenderer) {
  this._doRender = false;
  this.emit('stop-render', {});

  return this;
}

/**
 * Toggle rendering.
 * @returns Self for chaining.
 */
export function toggleRender(this: RealRenderer) {
  this._doRender = !this._doRender;
  if (this._doRender) this._render();

  return this;
}
