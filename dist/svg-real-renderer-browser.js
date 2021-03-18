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
	    this._strokeIndex = Math.min(Math.max(this._strokeIndex - numUndo, 0), this.strokes.length - 1);
	    for (var i = this._strokeIndex + 1; i < this.strokes.length; i++) {
	        this.strokes[i].forEach(function (strokeNode) { return strokeNode.delete(); });
	    }
	    return this;
	}
	exports.undo = undo;
	function redo(numRedo) {
	    if (numRedo === void 0) { numRedo = 1; }
	    var doRedo = Math.min(numRedo, this.strokes.length - this._strokeIndex - 1, numRedo);
	    for (var i = 0; i < doRedo; i++) {
	        this._strokeIndex++;
	        this._display(this.strokes[this._strokeIndex]);
	    }
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
	            if (strokeNode.node.parentElement == null)
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

	var _circle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Circle = void 0;
	var Circle = /** @class */ (function () {
	    function Circle(center, initialRadius) {
	        var path = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	        path.setAttribute('cx', center[0].toString());
	        path.setAttribute('cy', center[1].toString());
	        path.setAttribute('r', initialRadius.toString());
	        this.node = path;
	    }
	    Circle.prototype.updateRadius = function (newRadius) {
	        this.node.setAttribute('r', newRadius.toString());
	    };
	    Circle.prototype.updateCenter = function (newCenter) {
	        this.node.setAttribute('cx', newCenter[0].toString());
	        this.node.setAttribute('cy', newCenter[1].toString());
	    };
	    Circle.prototype.setStroke = function (stroke) {
	        this.node.setAttribute('stroke', stroke);
	    };
	    Circle.prototype.setFill = function (fill) {
	        this.node.setAttribute('fill', fill);
	    };
	    Circle.prototype.setStrokeWidth = function (width) {
	        this.node.setAttribute('stroke-width', width.toString());
	    };
	    Circle.prototype.delete = function () {
	        this.node.remove();
	    };
	    return Circle;
	}());
	exports.Circle = Circle;
	});

	var circle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getCircleNode = void 0;


	function getCircleNode(center, radius, color) {
	    var circleNode = new _circle.Circle(center, radius);
	    circleNode.setFill(getRGBColorString_1.getRGBColorString(color));
	    circleNode.setStroke(getRGBColorString_1.getRGBColorString(color));
	    return circleNode;
	}
	exports.getCircleNode = getCircleNode;
	});

	var line = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getLinePathCommand = void 0;
	function getLinePathCommand(pt1, pt2) {
	    var d;
	    d = "M " + pt1[0] + "," + pt1[1] + '\n';
	    d += "L " + pt2[0] + "," + pt2[1];
	    return d;
	}
	exports.getLinePathCommand = getLinePathCommand;
	});

	var brush = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._toolPreview = exports._doStroke = exports._endStroke = exports._startStroke = exports.BrushDefaults = exports.name = void 0;




	exports.name = 'brush';
	exports.BrushDefaults = {
	    brushColor: [1, 1, 1],
	    brushSize: 1
	};
	function _startStroke(coords, identifier) {
	    this._doPreview = false;
	    var brushPath = new _path.Path('');
	    brushPath.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.brushColor));
	    brushPath.setStrokeWidth(this.toolSettings.brushSize);
	    this._addStroke([brushPath]);
	    this.strokes[this._strokeIndex].push(circle.getCircleNode(coords, this.toolSettings.brushSize / 2 - 0.5, this.toolSettings.brushColor));
	}
	exports._startStroke = _startStroke;
	function _endStroke(endCoords, identifier) {
	    this.strokes[this._strokeIndex].push(circle.getCircleNode(endCoords, this.toolSettings.brushSize / 2 - 0.5, this.toolSettings.brushColor));
	    this._doPreview = true;
	}
	exports._endStroke = _endStroke;
	function _doStroke(coords, identifier) {
	    this.strokes[this._strokeIndex].push(circle.getCircleNode(coords, this.toolSettings.brushSize / 2 - 0.5, this.toolSettings.brushColor));
	    this.strokes[this._strokeIndex][0].appendPath(line.getLinePathCommand(this._lastCoords.get(identifier), coords));
	}
	exports._doStroke = _doStroke;
	function _toolPreview(coords, identifier) {
	    if (this._previewStroke.get(identifier).length == 0) {
	        var circleNode = circle.getCircleNode(coords, this.toolSettings.brushSize / 2 - 0.5, this.toolSettings.brushColor);
	        circleNode.setFill(getRGBColorString_1.getRGBColorString(this.toolSettings.brushColor));
	        circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.brushColor));
	        this._previewStroke.get(identifier).push(circleNode);
	    }
	    else {
	        var circleNode = this._previewStroke.get(identifier)[0];
	        circleNode.updateCenter(coords);
	        circleNode.updateRadius(this.toolSettings.brushSize / 2 - 0.5);
	        circleNode.setFill(getRGBColorString_1.getRGBColorString(this.toolSettings.brushColor));
	        circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.brushColor));
	    }
	}
	exports._toolPreview = _toolPreview;
	});

	var eraser = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._toolPreview = exports._doStroke = exports._endStroke = exports._startStroke = exports.EraserDefaults = exports.name = void 0;




	exports.name = 'eraser';
	exports.EraserDefaults = {
	    eraserSize: 2
	};
	function _startStroke(coords, identifier) {
	    this._doPreview = false;
	    var brushPath = new _path.Path('');
	    brushPath.setStroke(getRGBColorString_1.getRGBColorString(this.bgColor));
	    brushPath.setStrokeWidth(this.toolSettings.eraserSize);
	    this._addStroke([brushPath]);
	    this.strokes[this._strokeIndex].push(circle.getCircleNode(coords, this.toolSettings.eraserSize / 2 - 0.5, this.bgColor));
	}
	exports._startStroke = _startStroke;
	function _endStroke(endCoords, identifier) {
	    this.strokes[this._strokeIndex].push(circle.getCircleNode(endCoords, this.toolSettings.eraserSize / 2 - 0.5, this.bgColor));
	    this._doPreview = true;
	}
	exports._endStroke = _endStroke;
	function _doStroke(coords, identifier) {
	    this.strokes[this._strokeIndex].push(circle.getCircleNode(coords, this.toolSettings.eraserSize / 2 - 0.5, this.bgColor));
	    this.strokes[this._strokeIndex][0].appendPath(line.getLinePathCommand(this._lastCoords.get(identifier), coords));
	}
	exports._doStroke = _doStroke;
	function _toolPreview(coords, identifier) {
	    if (this._previewStroke.get(identifier).length == 0) {
	        var circleNode = circle.getCircleNode(coords, this.toolSettings.eraserSize / 2 - 0.5, this.bgColor);
	        circleNode.setFill(getRGBColorString_1.getRGBColorString(this.bgColor));
	        circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.bgColor));
	        this._previewStroke.get(identifier).push(circleNode);
	    }
	    else {
	        var circleNode = this._previewStroke.get(identifier)[0];
	        circleNode.updateCenter(coords);
	        circleNode.updateRadius(this.toolSettings.eraserSize / 2 - 0.5);
	    }
	}
	exports._toolPreview = _toolPreview;
	});

	var line$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._toolPreview = exports._doStroke = exports._endStroke = exports._startStroke = exports.LineDefaults = exports.name = void 0;




	exports.name = 'line';
	exports.LineDefaults = {
	    lineThickness: 1,
	    lineColor: [1, 1, 1]
	};
	/** key -> identifier, value -> coordinate
	   *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
	   */
	var _startCoords = new Map(); /* key -> identifier, value -> coordinate*/
	function _startStroke(coords, identifier) {
	    this._doPreview = false;
	    var linePath = new _path.Path('');
	    linePath.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.lineColor));
	    linePath.setStrokeWidth(this.toolSettings.lineThickness);
	    this._addStroke([linePath]);
	    this.strokes[this._strokeIndex].push(circle.getCircleNode(coords, this.toolSettings.lineThickness / 2 - 0.5, this.toolSettings.lineColor));
	    this.strokes[this._strokeIndex].push(circle.getCircleNode(coords, this.toolSettings.lineThickness / 2 - 0.5, this.toolSettings.lineColor));
	    _startCoords.set(identifier, coords);
	}
	exports._startStroke = _startStroke;
	function _endStroke(endCoords, identifier) {
	    this.strokes[this._strokeIndex][0].updatePath(line.getLinePathCommand(_startCoords.get(identifier), endCoords));
	    this.strokes[this._strokeIndex][2].updateCenter(endCoords);
	    _startCoords.delete(identifier);
	    this._doPreview = true;
	}
	exports._endStroke = _endStroke;
	function _doStroke(coords, identifier) {
	    this.strokes[this._strokeIndex][0].updatePath(line.getLinePathCommand(_startCoords.get(identifier), coords));
	    this.strokes[this._strokeIndex][2].updateCenter(coords);
	}
	exports._doStroke = _doStroke;
	function _toolPreview(coords, identifier) {
	    if (this._previewStroke.get(identifier).length == 0) {
	        var circleNode = circle.getCircleNode(coords, this.toolSettings.lineThickness / 2 - 0.5, this.toolSettings.lineColor);
	        circleNode.setFill(getRGBColorString_1.getRGBColorString(this.toolSettings.lineColor));
	        circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.lineColor));
	        this._previewStroke.get(identifier).push(circleNode);
	    }
	    else {
	        var circleNode = this._previewStroke.get(identifier)[0];
	        circleNode.updateCenter(coords);
	        circleNode.updateRadius(this.toolSettings.lineThickness / 2 - 0.5);
	        circleNode.setFill(getRGBColorString_1.getRGBColorString(this.toolSettings.lineColor));
	        circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.lineColor));
	    }
	}
	exports._toolPreview = _toolPreview;
	});

	var tools = createCommonjsModule(function (module, exports) {
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ToolDefaults = exports.tools = void 0;



	// import * as rainbow_brush from './rainbow_brush';
	exports.tools = {
	    brush: brush,
	    // rainbow_brush,
	    eraser: eraser,
	    line: line$1
	};
	exports.ToolDefaults = __assign(__assign(__assign({}, brush.BrushDefaults), line$1.LineDefaults), eraser.EraserDefaults);
	});

	var RealDrawBoardDefaults = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RealDrawBoardDefaults = void 0;

	exports.RealDrawBoardDefaults = {
	    toolSettings: tools.ToolDefaults,
	    allowUndo: false,
	    maxUndos: 10,
	    tool: 'brush'
	};
	});

	var RealDrawBoardTypes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	});

	var boardManip = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._resetBoard = exports.clear = exports.changeToolSetting = exports.changeTool = void 0;


	function changeTool(newTool) {
	    this.tool = newTool;
	    this._startStroke = tools.tools[this.tool]._startStroke;
	    this._doStroke = tools.tools[this.tool]._doStroke;
	    this._endStroke = tools.tools[this.tool]._endStroke;
	    this._toolPreview = tools.tools[this.tool]._toolPreview;
	    this._previewStroke.forEach(function (stroke) {
	        stroke.forEach(function (node) {
	            node.delete();
	        });
	    });
	    this._previewStroke.clear();
	    return this;
	}
	exports.changeTool = changeTool;
	function changeToolSetting(settingName, value) {
	    this.toolSettings[settingName] = value;
	    return this;
	}
	exports.changeToolSetting = changeToolSetting;
	function clear() {
	    this._strokeIndex = 0;
	    this._lastCoords.clear();
	    this.strokes.forEach(function (stroke) {
	        stroke.forEach(function (strokeNode) { return strokeNode.delete(); });
	    });
	    this.strokes = [
	        [
	            blankGraph.getBlankGraphPath(this.dimensions, this.xOffset, this.yOffset, this.axesColor, this.drawAxes)
	        ]
	    ];
	    this._display(this.strokes[this._strokeIndex]);
	    return this;
	}
	exports.clear = clear;
	function _resetBoard() {
	    this.xScaleFactor = this.options.xScaleFactor;
	    this.yScaleFactor = this.options.yScaleFactor;
	    this.bgColor = this.options.bgColor;
	    this.tool = this.options.tool;
	    this.toolSettings = this.options.toolSettings;
	    this._lastCoords.clear();
	    this.stopRender();
	}
	exports._resetBoard = _resetBoard;
	});

	var _DOMEvents = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._removeDOMEvents = exports._addDOMEvents = void 0;
	function _addDOMEvents() {
	    this.svg.addEventListener('mousedown', this._mouseDownEventListener);
	    this.svg.addEventListener('mouseup', this._mouseUpEventListener);
	    this.svg.addEventListener('mouseleave', this._mouseLeaveEventListener);
	    this.svg.addEventListener('mousemove', this._previewMouseMoveEventListener);
	    this.svg.addEventListener('touchstart', this._touchStartEventListener);
	    this.svg.addEventListener('touchmove', this._touchMoveEventListener);
	    this.svg.addEventListener('touchend', this._touchEndEventListener);
	    this.svg.addEventListener('touchmove', this._previewTouchMoveEventListener);
	}
	exports._addDOMEvents = _addDOMEvents;
	function _removeDOMEvents() {
	    this.svg.removeEventListener('mousedown', this._mouseDownEventListener);
	    this.svg.removeEventListener('mouseup', this._mouseUpEventListener);
	    this.svg.removeEventListener('mouseexit', this._mouseLeaveEventListener);
	    this.svg.removeEventListener('mousemove', this._previewMouseMoveEventListener);
	    this.svg.removeEventListener('touchstart', this._touchStartEventListener);
	    this.svg.removeEventListener('touchmove', this._touchMoveEventListener);
	    this.svg.removeEventListener('touchend', this._touchEndEventListener);
	    this.svg.removeEventListener('touchmove', this._previewTouchMoveEventListener);
	}
	exports._removeDOMEvents = _removeDOMEvents;
	});

	var _coords = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._getTouchCoords = exports._getMouseCoords = void 0;
	function _getMouseCoords(e) {
	    var x = e.offsetX;
	    var y = e.offsetY;
	    return [x, y]; // In graph coordinates
	}
	exports._getMouseCoords = _getMouseCoords;
	function _getTouchCoords(touch) {
	    var x = (touch.clientX - this.svg.getBoundingClientRect().left);
	    var y = (touch.clientY - this.svg.getBoundingClientRect().top);
	    return [x, y];
	}
	exports._getTouchCoords = _getTouchCoords;
	});

	var RealDrawBoard_1 = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
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
	exports.RealDrawBoard = exports.RealDrawBoardTypes = exports.RealRendererTypes = void 0;


	exports.RealRendererTypes = RealRendererTypes;
	exports.RealDrawBoardTypes = RealDrawBoardTypes;
	__exportStar(RealDrawBoardDefaults, exports);




	var RealDrawBoard = /** @class */ (function (_super) {
	    __extends(RealDrawBoard, _super);
	    function RealDrawBoard(options) {
	        var _this = 
	        // *****DEFAULTS*****
	        _super.call(this, options) || this;
	        _this.tool = RealDrawBoardDefaults.RealDrawBoardDefaults.tool;
	        /** key -> identifier, value -> coordinate
	         *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
	         */
	        _this._lastCoords = new Map(); /* key -> identifier, value -> coordinate*/
	        _this._doPreview = true; // If a preview should be drawn
	        /**
	         * The preview for the current stroke
	         */
	        _this._previewStroke = new Map();
	        _this._resetBoard = boardManip._resetBoard;
	        _this._addDOMEvents = _DOMEvents._addDOMEvents;
	        _this._removeDOMEvents = _DOMEvents._removeDOMEvents;
	        _this._startStroke = tools.tools[RealDrawBoardDefaults.RealDrawBoardDefaults.tool]._startStroke;
	        _this._endStroke = tools.tools[RealDrawBoardDefaults.RealDrawBoardDefaults.tool]._endStroke;
	        _this._doStroke = tools.tools[RealDrawBoardDefaults.RealDrawBoardDefaults.tool]._doStroke;
	        _this._toolPreview = tools.tools[RealDrawBoardDefaults.RealDrawBoardDefaults.tool]._toolPreview;
	        _this._getMouseCoords = _coords._getMouseCoords;
	        _this._getTouchCoords = _coords._getTouchCoords;
	        _this.changeToolSetting = boardManip.changeToolSetting;
	        _this.changeTool = boardManip.changeTool;
	        _this.clear = boardManip.clear;
	        // --- DOM Event Listeners ---
	        // --- Mouse Events ---
	        _this._mouseDownEventListener = function (e) {
	            if (e.button === 0 /* Left Click */) {
	                _this.svg.addEventListener('mousemove', _this._mouseMoveEventListener);
	                var coords = _this._getMouseCoords(e);
	                _this._startStroke(coords, 'mouse');
	                _this._lastCoords.set('mouse', coords);
	            }
	        };
	        _this._mouseUpEventListener = function (e) {
	            if (e.button === 0 /* Left Click */) {
	                var endCoords = _this._getMouseCoords(e);
	                _this.svg.removeEventListener('mousemove', _this._mouseMoveEventListener);
	                if (_this._lastCoords.has('mouse')) {
	                    _this._endStroke(endCoords, 'mouse');
	                    _this._lastCoords.delete('mouse');
	                }
	                _this._display(_this.strokes[_this._strokeIndex]);
	            }
	        };
	        _this._mouseLeaveEventListener = function (e) {
	            _this.svg.removeEventListener('mousemove', _this._mouseMoveEventListener);
	            if (_this._lastCoords.has('mouse')) {
	                _this._endStroke(_this._getMouseCoords(e), 'mouse');
	                _this._lastCoords.delete('mouse');
	                _this._display(_this.strokes[_this._strokeIndex]);
	            }
	        };
	        _this._mouseMoveEventListener = function (e) {
	            var coords = _this._getMouseCoords(e);
	            _this._doStroke(coords, 'mouse');
	            _this._lastCoords.set('mouse', coords);
	        };
	        _this._previewMouseMoveEventListener = function (e) {
	            var coords = _this._getMouseCoords(e);
	            if (_this._doPreview) {
	                if (!_this._previewStroke.has('mouse'))
	                    _this._previewStroke.set('mouse', []);
	                _this._toolPreview(coords, 'mouse');
	                _this._display(_this._previewStroke.get('mouse'));
	            }
	            _this._display(_this.strokes[_this._strokeIndex]);
	        };
	        // --- Mouse Events ---
	        // --- Touch Events ---
	        _this._touchStartEventListener = function (e) {
	            e.preventDefault();
	            for (var i = 0; i < e.touches.length; i++) {
	                var coords = _this._getTouchCoords(e.touches.item(i));
	                var identifier = e.touches.item(i).identifier.toString();
	                _this._startStroke(coords, identifier);
	                _this._lastCoords.set(identifier, coords);
	            }
	        };
	        _this._touchEndEventListener = function (e) {
	            for (var i = 0; i < e.changedTouches.length; i++) {
	                var coords = _this._getTouchCoords(e.changedTouches.item(i));
	                var identifier = e.changedTouches.item(i).identifier.toString();
	                _this._endStroke(coords, identifier);
	                _this._lastCoords.delete(identifier);
	            }
	        };
	        _this._touchMoveEventListener = function (e) {
	            for (var i = 0; i < e.touches.length; i++) {
	                var coords = _this._getTouchCoords(e.touches.item(i));
	                _this._doStroke(coords, e.touches.item(i).identifier.toString());
	                _this._lastCoords.set(e.touches.item(i).identifier.toString(), coords);
	            }
	        };
	        _this._previewTouchMoveEventListener = function (e) {
	            for (var i = 0; i < e.touches.length; i++) {
	                var coords = _this._getTouchCoords(e.touches.item(i));
	                var identifier = e.touches.item(i).identifier.toString();
	                if (_this._doPreview) {
	                    if (!_this._previewStroke.has(identifier))
	                        _this._previewStroke.set(identifier, []);
	                    _this._toolPreview(coords, identifier);
	                    _this._display(_this._previewStroke.get(identifier));
	                }
	                _this._display(_this.strokes[_this._strokeIndex]);
	            }
	        };
	        options = __assign(__assign({}, RealDrawBoardDefaults.RealDrawBoardDefaults), options);
	        _this.options = options;
	        _this.toolSettings = options.toolSettings;
	        _this.changeTool(options.tool);
	        return _this;
	        // *****DEFAULTS*****
	    }
	    // --- Touch Events ---
	    // --- DOM Event Listeners ---
	    RealDrawBoard.prototype.startRender = function () {
	        this._addDOMEvents();
	        return this;
	    };
	    RealDrawBoard.prototype.stopRender = function () {
	        this._removeDOMEvents();
	        return this;
	    };
	    RealDrawBoard.prototype.reset = function () {
	        this._resetBoard();
	        _super.prototype.reset.call(this);
	        return this;
	    };
	    return RealDrawBoard;
	}(RealRenderer_1.RealRenderer));
	exports.RealDrawBoard = RealDrawBoard;
	});

	var build = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RealDrawBoard = exports.RealRenderer = void 0;

	Object.defineProperty(exports, "RealRenderer", { enumerable: true, get: function () { return RealRenderer_1.RealRenderer; } });

	Object.defineProperty(exports, "RealDrawBoard", { enumerable: true, get: function () { return RealDrawBoard_1.RealDrawBoard; } });
	});

	var index = /*@__PURE__*/getDefaultExportFromCjs(build);

	return index;

})));
