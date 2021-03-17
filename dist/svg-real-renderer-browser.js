(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SVGRealRenderer = factory());
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

	var getRGBColorString_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getRGBColorString = void 0;
	function getRGBColorString(color) {
	    return "rgb(" + color[0] * 255 + ", " + color[1] * 255 + ", " + color[2] * 255 + ")";
	}
	exports.getRGBColorString = getRGBColorString;
	});

	var _path = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Path = void 0;
	var Path = /** @class */ (function () {
	    function Path(initialD) {
	        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	        path.setAttribute('d', initialD);
	        this.node = path;
	    }
	    Path.prototype.updatePath = function (newD) {
	        this.node.setAttribute('d', newD);
	    };
	    Path.prototype.appendPath = function (appendD) {
	        this.node.setAttribute('d', this.node.getAttribute('d') + '\n' + appendD);
	    };
	    Path.prototype.setStroke = function (stroke) {
	        this.node.setAttribute('stroke', stroke);
	    };
	    Path.prototype.setFill = function (fill) {
	        this.node.setAttribute('fill', fill);
	    };
	    Path.prototype.setStrokeWidth = function (width) {
	        this.node.setAttribute('stroke-width', width.toString());
	    };
	    Path.prototype.delete = function () {
	        this.node.remove();
	    };
	    return Path;
	}());
	exports.Path = Path;
	});

	var blankGraph = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getBlankGraphPath = void 0;


	function getBlankGraphPath(dimensions, xOffset, yOffset, axesColor, drawAxes) {
	    var outX = dimensions[0], outY = dimensions[1];
	    var X = Math.floor(outY * (xOffset / 100));
	    var Y = Math.floor(outX * (yOffset / 100));
	    var d;
	    if (drawAxes) {
	        d = "M 0," + Y + " H " + (dimensions[0] - 1) + " \n";
	        d += "M " + X + ",0 V " + (dimensions[1] - 1);
	    }
	    else
	        d = '';
	    var path = new _path.Path(d);
	    path.setStroke(getRGBColorString_1.getRGBColorString(axesColor));
	    return path;
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

	var undo_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.redo = exports.undo = void 0;
	function undo(numUndo) {
	    if (numUndo === void 0) { numUndo = 1; }
	    var wasRendering = this._doRender;
	    this.stopRender();
	    this._strokeIndex = Math.min(Math.max(this._strokeIndex - numUndo, 0), this.strokes.length - 1);
	    for (var i = this._strokeIndex + 1; i < this.strokes.length; i++) {
	        this.strokes[i].forEach(function (strokeNode) { return strokeNode.delete(); });
	    }
	    if (wasRendering)
	        this.startRender();
	    return this;
	}
	exports.undo = undo;
	function redo(numRedo) {
	    if (numRedo === void 0) { numRedo = 1; }
	    var wasRendering = this._doRender;
	    this.stopRender();
	    var doRedo = Math.min(numRedo, this.strokes.length - this._strokeIndex - 1, numRedo);
	    for (var i = 0; i < doRedo; i++) {
	        this._strokeIndex++;
	        this._display(this.strokes[this._strokeIndex]);
	    }
	    if (wasRendering)
	        this.startRender();
	    return this;
	}
	exports.redo = redo;
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
	        this.strokes = [];
	        this._strokeIndex = -1;
	        this.undo = undo_1.undo;
	        this.redo = undo_1.redo;
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
	        this.svg.style.backgroundColor = "" + getRGBColorString_1.getRGBColorString(this.bgColor);
	        this._addStroke([blankGraph.getBlankGraphPath(this.dimensions, this.xOffset, this.yOffset, this.axesColor, this.drawAxes)]);
	        this._display(this.strokes[this._strokeIndex]);
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
	    RealRenderer.prototype._addStroke = function (stroke) {
	        if (this.strokes.length > this._strokeIndex + 1)
	            this.strokes.splice(this._strokeIndex + 1, this.strokes.length - this._strokeIndex);
	        this.strokes[++this._strokeIndex] = stroke;
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
	            this._display(this.strokes[this._strokeIndex]);
	            window.requestAnimationFrame(function () { _this._render(); });
	        }
	    };
	    RealRenderer.prototype._display = function (stroke) {
	        var _this = this;
	        stroke.forEach(function (strokeNode) {
	            _this.svg.appendChild(strokeNode.node);
	        });
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
	        this.strokes = [
	            [
	                blankGraph.getBlankGraphPath(this.dimensions, this.xOffset, this.yOffset, this.axesColor, this.drawAxes)
	            ]
	        ];
	        this._strokeIndex = 0;
	        this.resetTime();
	        this._display(this.strokes[this._strokeIndex]);
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
