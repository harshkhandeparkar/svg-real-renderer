(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.GPUjsRealRenderer = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var blankGraph = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getBlankGraphPath = void 0;
	/**
	 * @param gpu GPU.js instance
	 * @param dimensions Dimensions of Graph
	 * @param xOffset
	 * @param yOffset
	 * @param axesColor
	 * @param drawAxes
	 */
	function getBlankGraphPath(dimensions, xOffset, yOffset, axesColor, drawAxes) {
	    var outX = dimensions[0], outY = dimensions[1];
	    var X = Math.floor(outY * (xOffset / 100));
	    var Y = Math.floor(outX * (yOffset / 100));
	    if (drawAxes) {
	        return "<line x1=\"0\" y1=\"" + Y + "\" x2=\"" + (dimensions[0] - 1) + "\" y2=" + Y + " stroke=\"rgb(" + axesColor[0] * 255 + ", " + axesColor[1] * 255 + ", " + axesColor[2] * 255 + ")\" />" +
	            ("<line x1=\"" + X + "\" y1=\"0\" x2=\"" + X + "\" y2=\"" + (dimensions[1] - 1) + "\" stroke=\"rgb(" + axesColor[0] * 255 + ", " + axesColor[1] * 255 + ", " + axesColor[2] * 255 + ")\" />");
	    }
	}
	exports.getBlankGraphPath = getBlankGraphPath;
	});

	var RealRendererTypes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	});

	var RealRendererDefaults = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RealRendererDefaults = void 0;
	exports.RealRendererDefaults = {
	    dimensions: [1000, 1000],
	    xScaleFactor: 10,
	    yScaleFactor: 1,
	    bgColor: [0, 0, 0],
	    drawAxes: true,
	    axesColor: [1, 1, 1],
	    drawsPerFrame: 1,
	    timeStep: 1 / 60,
	    initTime: 0,
	    xOffset: 50,
	    yOffset: 50
	};
	});

	var RealRenderer_1 = createCommonjsModule(function (module, exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RealRenderer = exports.RealRendererTypes = void 0;

	exports.RealRendererTypes = RealRendererTypes;

	__exportStar(RealRendererDefaults, exports);
	var RealRenderer = /** @class */ (function () {
	    function RealRenderer(options) {
	        this.paths = [];
	        // *****DEFAULTS*****
	        options = __assign(__assign({}, RealRendererDefaults.RealRendererDefaults), options);
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
	        this.xOffset = Math.max(0, Math.min(100, this.xOffset)); // Between 0 and 100
	        this.yOffset = Math.max(0, Math.min(100, this.yOffset)); // Between 0 and 100
	        // *****DEFAULTS*****
	        if (this.svg === undefined) {
	            throw 'No SVG Element Found';
	        }
	        this.svg.setAttribute('width', this.dimensions[0].toString());
	        this.svg.setAttribute('height', this.dimensions[1].toString());
	        this.svg.style.backgroundColor = "rgb(" + this.bgColor[0] * 255 + ", " + this.bgColor[1] * 255 + ", " + this.bgColor[2] * 255 + ")";
	        this.paths.push(blankGraph.getBlankGraphPath(this.dimensions, this.xOffset, this.yOffset, this.axesColor, this.drawAxes));
	        this.svg.innerHTML = this.paths.join('\n');
	        this._doRender = false;
	    }
	    RealRenderer.prototype._drawFunc = function (time) {
	        return this;
	    };
	    RealRenderer.prototype._draw = function () {
	        this.time += this.timeStep;
	        this._drawFunc(this.time);
	        return this;
	    };
	    RealRenderer.prototype.draw = function (numDraws) {
	        if (numDraws === void 0) { numDraws = 1; }
	        for (var i = 0; i < numDraws; i++)
	            this._draw();
	        return this;
	    };
	    RealRenderer.prototype._render = function () {
	        var _this = this;
	        if (this._doRender) {
	            this.draw(this.drawsPerFrame);
	            this._display(this.paths);
	            window.requestAnimationFrame(function () { _this._render(); });
	        }
	    };
	    RealRenderer.prototype._display = function (paths) {
	        this.svg.innerHTML = paths.join('\n');
	    };
	    RealRenderer.prototype.startRender = function () {
	        if (!this._doRender) {
	            this._doRender = true;
	            this._render();
	            return this;
	        }
	    };
	    RealRenderer.prototype.stopRender = function () {
	        this._doRender = false;
	        return this;
	    };
	    RealRenderer.prototype.toggleRender = function () {
	        this._doRender = !this._doRender;
	        if (this._doRender)
	            this._render();
	        return this;
	    };
	    RealRenderer.prototype.resetTime = function () {
	        this.time = 0;
	        return this;
	    };
	    RealRenderer.prototype.reset = function () {
	        this.paths = [blankGraph.getBlankGraphPath(this.dimensions, this.xOffset, this.yOffset, this.axesColor, this.drawAxes)];
	        this.resetTime();
	        this._display(this.paths);
	        return this;
	    };
	    return RealRenderer;
	}());
	exports.RealRenderer = RealRenderer;
	});

	var build = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RealRenderer = void 0;

	Object.defineProperty(exports, "RealRenderer", { enumerable: true, get: function () { return RealRenderer_1.RealRenderer; } });
	// export { RealLineGraph } from './src/renderers/RealLineGraph';
	// export { RealComplexSpace } from './src/renderers/RealComplexSpace';
	// export { RealDrawBoard } from './src/renderers/RealDrawBoard/RealDrawBoard';
	});

	var index = /*@__PURE__*/getDefaultExportFromCjs(build);

	return index;

})));
