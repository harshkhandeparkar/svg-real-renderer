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

	var _node = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Node = void 0;
	var Node = /** @class */ (function () {
	    function Node(section, elementName, strokeNodeType) {
	        var path = document.createElementNS('http://www.w3.org/2000/svg', elementName);
	        this.strokeNodeType = strokeNodeType;
	        this.node = path;
	        this.section = section;
	    }
	    Node.prototype._exportBasicData = function () {
	        return {
	            stroke: this.node.hasAttribute('stroke') ? this.node.getAttribute('stroke') : null,
	            fill: this.node.hasAttribute('fill') ? this.node.getAttribute('fill') : null,
	            strokeWidth: this.node.hasAttribute('stroke-width') ? this.node.getAttribute('stroke-width') : null,
	            dashed: this.node.hasAttribute('stroke-dasharray') ? { dashColor: this.node.getAttribute('stroke') } : false,
	            id: this.node.hasAttribute('id') ? this.node.getAttribute('id') : null,
	            class: this.node.hasAttribute('class') ? this.node.getAttribute('class') : null,
	            style: this.node.hasAttribute('style') ? this.node.getAttribute('style') : null,
	            type: this.strokeNodeType,
	            section: this.section
	        };
	    };
	    /** @deprecated */
	    Node.prototype.importV1 = function (data) {
	        var wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	        wrapper.innerHTML = data;
	        this.node = wrapper.firstChild;
	        wrapper.removeChild(this.node);
	        wrapper.remove();
	    };
	    Node.prototype.import = function (data) {
	        if (data.stroke !== null)
	            this.setStroke(data.stroke);
	        if (data.fill !== null)
	            this.setFill(data.fill);
	        if (data.strokeWidth !== null)
	            this.node.setAttribute('stroke-width', data.strokeWidth);
	        if (data.dashed !== false)
	            this.setDashed(data.dashed.dashColor);
	        if (data.id !== null)
	            this.setId(data.id);
	        if (data.class !== null)
	            this.node.setAttribute('class', data.class);
	        if (data.style !== null)
	            this.node.setAttribute('style', data.style);
	    };
	    Node.prototype.setStroke = function (stroke) {
	        this.node.setAttribute('stroke', stroke);
	    };
	    Node.prototype.setFill = function (fill) {
	        this.node.setAttribute('fill', fill);
	    };
	    Node.prototype.setStrokeWidth = function (width) {
	        this.node.setAttribute('stroke-width', width.toString());
	    };
	    Node.prototype.setDashed = function (dashColor) {
	        this.node.setAttribute('stroke-dasharray', '2,2');
	        this.setStroke(dashColor);
	    };
	    Node.prototype.setId = function (id) {
	        this.node.setAttribute('id', id);
	    };
	    Node.prototype.setClassName = function (className) {
	        this.node.classList.add(className);
	    };
	    Node.prototype.delete = function () {
	        this.node.remove();
	    };
	    return Node;
	}());
	exports.Node = Node;
	});

	var _circle = createCommonjsModule(function (module, exports) {
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Circle = void 0;

	var Circle = /** @class */ (function (_super) {
	    __extends(Circle, _super);
	    function Circle(center, initialRadius, section) {
	        var _this = _super.call(this, section, 'circle', 'circle') || this;
	        var path = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	        path.setAttribute('cx', center[0].toString());
	        path.setAttribute('cy', center[1].toString());
	        path.setAttribute('r', initialRadius.toString());
	        _this.node = path;
	        _this.section = section;
	        return _this;
	    }
	    Circle.prototype.updateRadius = function (newRadius) {
	        this.node.setAttribute('r', newRadius.toString());
	    };
	    Circle.prototype.updateCenter = function (newCenter) {
	        this.node.setAttribute('cx', newCenter[0].toString());
	        this.node.setAttribute('cy', newCenter[1].toString());
	    };
	    Circle.prototype.export = function () {
	        return __assign(__assign({}, this._exportBasicData()), { center: [this.node.getAttribute('cx'), this.node.getAttribute('cy')], radius: this.node.getAttribute('radius'), type: this.strokeNodeType });
	    };
	    Circle.prototype.import = function (data) {
	        _super.prototype.import.call(this, data);
	        this.node.setAttribute('cx', data.center[0]);
	        this.node.setAttribute('cy', data.center[1]);
	        this.node.setAttribute('r', data.radius);
	    };
	    return Circle;
	}(_node.Node));
	exports.Circle = Circle;
	});

	var getRGBColorString_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getRGBColorString = void 0;
	/**
	 *
	 * @param color Converts a color array to rgb() css color format.
	 * @returns
	 */
	function getRGBColorString(color) {
	    return "rgb(" + color[0] * 255 + ", " + color[1] * 255 + ", " + color[2] * 255 + ")";
	}
	exports.getRGBColorString = getRGBColorString;
	});

	var circle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getCircleNode = void 0;


	function getCircleNode(center, radius, color, section) {
	    var circleNode = new _circle.Circle(center, radius, section);
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
	    d = "M " + pt1[0] + "," + pt1[1];
	    d += " L " + pt2[0] + "," + pt2[1];
	    return d;
	}
	exports.getLinePathCommand = getLinePathCommand;
	});

	var _path = createCommonjsModule(function (module, exports) {
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Path = void 0;

	var Path = /** @class */ (function (_super) {
	    __extends(Path, _super);
	    function Path(initialD, section) {
	        var _this = _super.call(this, section, 'path', 'path') || this;
	        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	        path.setAttribute('d', initialD);
	        _this.node = path;
	        _this.section = section;
	        return _this;
	    }
	    Path.prototype.updatePath = function (newD) {
	        this.node.setAttribute('d', newD);
	    };
	    Path.prototype.appendPath = function (appendD) {
	        this.node.setAttribute('d', this.node.getAttribute('d') + ' ' + appendD);
	    };
	    Path.prototype.export = function () {
	        return __assign(__assign({}, this._exportBasicData()), { d: this.node.getAttribute('d'), type: this.strokeNodeType });
	    };
	    Path.prototype.import = function (data) {
	        _super.prototype.import.call(this, data);
	        this.node.setAttribute('d', data.d);
	    };
	    return Path;
	}(_node.Node));
	exports.Path = Path;
	});

	var getRadiusFromThickness = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getRadiusFromThickness = void 0;
	exports.getRadiusFromThickness = function (thickness) { return thickness / 2 - 0.5; };
	});

	var _tool = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Tool = void 0;
	/** @internal */
	var Tool = /** @class */ (function () {
	    function Tool(RDB) {
	        this.RDB = RDB;
	    }
	    Tool.prototype._onLoad = function () { };
	    Tool.prototype._onUnload = function () { };
	    Tool.prototype._startStroke = function (coords, identifier, target) { };
	    Tool.prototype._doStroke = function (coords, identifier, target) { };
	    Tool.prototype._endStroke = function (coords, identifier, target) { };
	    Tool.prototype._toolPreview = function (coords, identifier, target) { };
	    Tool.prototype._onScroll = function (scrollDelta, coords, identifier) { };
	    Tool.prototype._onKey = function (e) { };
	    return Tool;
	}());
	exports.Tool = Tool;
	});

	var brush = createCommonjsModule(function (module, exports) {
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Brush = exports.BrushDefaults = exports.name = void 0;






	exports.name = 'brush';
	exports.BrushDefaults = {
	    brushColor: [1, 1, 1],
	    brushSize: 1
	};
	var Brush = /** @class */ (function (_super) {
	    __extends(Brush, _super);
	    function Brush() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Brush.prototype._startStroke = function (coords, identifier, target) {
	        this.RDB._doPreview = false;
	        var brushPath = new _path.Path('', 'strokes');
	        brushPath.setStroke(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.brushColor));
	        brushPath.setStrokeWidth(this.RDB.toolSettings.brushSize);
	        this.RDB._addStroke([brushPath]);
	        this.RDB._strokeIdentifierMap.set(identifier, this.RDB._strokeIndex);
	        this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.brushSize), this.RDB.toolSettings.brushColor, 'strokes'));
	    };
	    Brush.prototype._endStroke = function (endCoords, identifier, target) {
	        this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(endCoords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.brushSize), this.RDB.toolSettings.brushColor, 'strokes'));
	        this.RDB._strokeIdentifierMap.delete(identifier);
	        this.RDB._doPreview = true;
	    };
	    Brush.prototype._doStroke = function (coords, identifier, target) {
	        this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.brushSize), this.RDB.toolSettings.brushColor, 'strokes'));
	        this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)][0].appendPath(line.getLinePathCommand(this.RDB._lastCoords.get(identifier), coords));
	    };
	    Brush.prototype._toolPreview = function (coords, identifier, target) {
	        if (!this.RDB._previewStroke.has(identifier))
	            this.RDB._previewStroke.set(identifier, []);
	        if (this.RDB._previewStroke.get(identifier).length == 0) {
	            var circleNode = circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.brushSize), this.RDB.toolSettings.brushColor, 'overlay');
	            circleNode.setFill(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.brushColor));
	            circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.brushColor));
	            this.RDB._previewStroke.get(identifier).push(circleNode);
	        }
	        else {
	            var circleNode = this.RDB._previewStroke.get(identifier)[0];
	            circleNode.updateCenter(coords);
	            circleNode.updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.brushSize));
	            circleNode.setFill(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.brushColor));
	            circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.brushColor));
	        }
	    };
	    Brush.prototype._onScroll = function (scrollDelta, coords, identifier) {
	        this.RDB.changeToolSetting('brushSize', Math.max(1, this.RDB.toolSettings.brushSize - scrollDelta));
	        if (this.RDB._previewStroke.get(identifier) != null && this.RDB._previewStroke.get(identifier).length !== 0) {
	            this.RDB._previewStroke.get(identifier)[0].updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.brushSize));
	            this.RDB._display(this.RDB._previewStroke.get(identifier));
	        }
	    };
	    return Brush;
	}(_tool.Tool));
	exports.Brush = Brush;
	});

	var eraser = createCommonjsModule(function (module, exports) {
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Eraser = exports.EraserDefaults = exports.name = void 0;






	exports.name = 'eraser';
	exports.EraserDefaults = {
	    eraserSize: 2
	};
	var Eraser = /** @class */ (function (_super) {
	    __extends(Eraser, _super);
	    function Eraser() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Eraser.prototype._startStroke = function (coords, identifier, target) {
	        var brushPath = new _path.Path('', 'strokes');
	        brushPath.setStroke(getRGBColorString_1.getRGBColorString(this.RDB.bgColor));
	        brushPath.setStrokeWidth(this.RDB.toolSettings.eraserSize);
	        this.RDB._addStroke([brushPath]);
	        this.RDB._strokeIdentifierMap.set(identifier, this.RDB._strokeIndex);
	        this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.eraserSize), this.RDB.bgColor, 'strokes'));
	    };
	    Eraser.prototype._endStroke = function (endCoords, identifier, target) {
	        this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(endCoords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.eraserSize), this.RDB.bgColor, 'strokes'));
	        this.RDB._doPreview = true;
	    };
	    Eraser.prototype._doStroke = function (coords, identifier, target) {
	        this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.eraserSize), this.RDB.bgColor, 'strokes'));
	        this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)][0].appendPath(line.getLinePathCommand(this.RDB._lastCoords.get(identifier), coords));
	    };
	    Eraser.prototype._toolPreview = function (coords, identifier, target) {
	        if (this.RDB._previewStroke.get(identifier).length == 0) {
	            var circleNode = circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.eraserSize), this.RDB.bgColor, 'overlay');
	            circleNode.setFill(getRGBColorString_1.getRGBColorString(this.RDB.bgColor));
	            circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.RDB.bgColor));
	            circleNode.setDashed(getRGBColorString_1.getRGBColorString(this.RDB.bgColor.map(function (c) { return 1 - c; })));
	            this.RDB._previewStroke.get(identifier).push(circleNode);
	        }
	        else {
	            var circleNode = this.RDB._previewStroke.get(identifier)[0];
	            circleNode.updateCenter(coords);
	            circleNode.updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.eraserSize));
	        }
	    };
	    Eraser.prototype._onScroll = function (scrollDelta, coords, identifier) {
	        this.RDB.changeToolSetting('eraserSize', Math.max(1, this.RDB.toolSettings.eraserSize - scrollDelta));
	        if (this.RDB._previewStroke.get(identifier) != null && this.RDB._previewStroke.get(identifier).length !== 0) {
	            this.RDB._previewStroke.get(identifier)[0].updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.eraserSize));
	            this.RDB._display(this.RDB._previewStroke.get(identifier));
	        }
	    };
	    return Eraser;
	}(_tool.Tool));
	exports.Eraser = Eraser;
	});

	var _polygon = createCommonjsModule(function (module, exports) {
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Polygon = void 0;

	var Polygon = /** @class */ (function (_super) {
	    __extends(Polygon, _super);
	    function Polygon(points, section) {
	        var _this = _super.call(this, section, 'polygon', 'polygon') || this;
	        var path = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
	        var pointsString = '';
	        points.forEach(function (point) {
	            pointsString += point[0] + "," + point[1] + " ";
	        });
	        path.setAttribute('points', pointsString);
	        _this.node = path;
	        _this.section = section;
	        return _this;
	    }
	    Polygon.prototype.updatePoints = function (newPoints) {
	        var pointsString = '';
	        newPoints.forEach(function (point) {
	            pointsString += point[0] + "," + point[1] + " ";
	        });
	        this.node.setAttribute('points', pointsString);
	    };
	    Polygon.prototype.addPoint = function (point) {
	        this.node.setAttribute('points', this.node.getAttribute('points') + (point[0] + "," + point[1] + " "));
	    };
	    Polygon.prototype.export = function () {
	        return __assign(__assign({}, this._exportBasicData()), { points: this.node.getAttribute('points'), type: this.strokeNodeType });
	    };
	    Polygon.prototype.import = function (data) {
	        _super.prototype.import.call(this, data);
	        this.node.setAttribute('points', data.points);
	    };
	    return Polygon;
	}(_node.Node));
	exports.Polygon = Polygon;
	});

	var _cursor = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.addCursor = exports.destroyCursor = exports.moveCursorUp = exports.moveCursorDown = exports.moveCursorRight = exports.moveCursorLeft = void 0;
	var moveOneCharacterLeft = function (_a) {
	    var str1 = _a[0], str2 = _a[1];
	    return [str1 + str2[0], str2.slice(1)];
	};
	var moveOneCharacterRight = function (_a) {
	    var str1 = _a[0], str2 = _a[1];
	    return [str1.slice(0, -1), str1[str1.length - 1] + str2];
	};
	var editTspanText = function (_a, textChangeFunc) {
	    var tspan1 = _a[0], tspan2 = _a[1];
	    var _b = textChangeFunc([tspan1.textContent, tspan2.textContent]), newTspan1Text = _b[0], newTspan2Text = _b[1];
	    tspan1.textContent = newTspan1Text;
	    tspan2.textContent = newTspan2Text;
	};
	function moveCursorLeft() {
	    // if the cursor is in between the line, move the cursor in the text
	    if (this.tspans[this.cursorIndex].textContent.length > 0) {
	        editTspanText([this.tspans[this.cursorIndex], this.tspans[this.cursorIndex + 1]], moveOneCharacterRight);
	        // workaround: empty svg tspans act like they do not exist
	        if (this.tspans[this.cursorIndex].textContent === '' && this.cursorIndex !== 0) {
	            this._setTspanPositioning(this.cursorSpan, 'lineBreak');
	        }
	    }
	    // if the cursor is at the beginning of the line, move the cursor up
	    else if (this.cursorIndex > 0) {
	        this._setTspanPositioning(this.tspans[this.cursorIndex + 1], 'lineBreak');
	        this.cursorIndex = this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex) - 1];
	        this._setTspanPositioning(this.tspans[this.cursorIndex + 1], 'inline');
	        this.cursorSpan.remove();
	        this.tspans[this.cursorIndex].insertAdjacentElement('afterend', this.cursorSpan);
	        this._setTspanPositioning(this.cursorSpan, 'inline');
	        this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex + 1)] = this.cursorIndex + 2;
	    }
	}
	exports.moveCursorLeft = moveCursorLeft;
	function moveCursorRight() {
	    if (this.tspans[this.cursorIndex + 1] !== undefined && this.tspans[this.cursorIndex + 1].textContent.length > 0) {
	        editTspanText([this.tspans[this.cursorIndex], this.tspans[this.cursorIndex + 1]], moveOneCharacterLeft);
	        // workaround: empty svg tspans act like they do not exist
	        if (this.tspans[this.cursorIndex].textContent !== '' && this.cursorIndex !== 0) {
	            this._setTspanPositioning(this.cursorSpan, 'inline');
	            this._setTspanPositioning(this.tspans[this.cursorIndex], 'lineBreak');
	        }
	    }
	    else if (this.cursorIndex < this.tspans.length - 2) {
	        this.cursorIndex = this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex) + 1] - 1;
	        this.cursorSpan.remove();
	        this.tspans[this.cursorIndex].insertAdjacentElement('afterend', this.cursorSpan);
	        this._setTspanPositioning(this.cursorSpan, 'lineBreak');
	        this._setTspanPositioning(this.tspans[this.cursorIndex + 1], 'inline');
	        this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex + 1)] = this.cursorIndex;
	    }
	}
	exports.moveCursorRight = moveCursorRight;
	function moveCursorDown() {
	    // check if another line exists
	    var newLineIndex = this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex) + 1];
	    if (newLineIndex !== undefined) {
	        // merge the current line into a single tspan
	        var beforeCursorText = this.tspans[this.cursorIndex].textContent;
	        var afterCursorText = this.tspans[this.cursorIndex + 1].textContent;
	        // put all the text in one tspan
	        this.tspans[this.cursorIndex].textContent = beforeCursorText + afterCursorText;
	        // find out how the next line should be split
	        var newLineText = this.tspans[newLineIndex].textContent;
	        var newLineLength = newLineText.length;
	        var splitIndex = Math.min(beforeCursorText.length - 1, newLineLength - 1);
	        // find the split text
	        var newSplitText = [
	            newLineText.slice(0, splitIndex + 1),
	            newLineText.slice(splitIndex + 1)
	        ];
	        // put the text in the right place
	        this.tspans[newLineIndex - 1].textContent = newSplitText[0];
	        this.tspans[newLineIndex].textContent = newSplitText[1];
	        // move the cursor
	        this.cursorSpan.remove();
	        this.tspans[newLineIndex - 1].insertAdjacentElement('afterend', this.cursorSpan);
	        // fix the dy
	        this._setTspanPositioning(this.tspans[newLineIndex], 'inline');
	        // workaround: empty svg tspans act like they do not exist
	        if (newSplitText[0] === '')
	            this._setTspanPositioning(this.cursorSpan, 'lineBreak');
	        else
	            this._setTspanPositioning(this.tspans[newLineIndex - 1], 'lineBreak');
	        // fix the lineIndex
	        this.lineIndexes[this.lineIndexes.indexOf(newLineIndex)] = newLineIndex - 1;
	        this.lineIndexes.sort(function (a, b) { return a - b; });
	        this.cursorIndex = newLineIndex - 1;
	    }
	}
	exports.moveCursorDown = moveCursorDown;
	function moveCursorUp() {
	    // check if another line exists
	    var newLineIndex = this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex) - 1];
	    if (this.lineIndexes.includes(newLineIndex)) {
	        // merge the current line into a single tspan
	        var beforeCursorText = this.tspans[this.cursorIndex].textContent;
	        var afterCursorText = this.tspans[this.cursorIndex + 1].textContent;
	        // put all the text in one tspan
	        this.tspans[this.cursorIndex + 1].textContent = beforeCursorText + afterCursorText;
	        // find out how the next line should be split
	        var newLineText = this.tspans[newLineIndex].textContent;
	        var newLineLength = newLineText.length;
	        var splitIndex = Math.min(beforeCursorText.length - 1, newLineLength - 1);
	        // find the split text
	        var newSplitText = [
	            newLineText.slice(0, splitIndex + 1),
	            newLineText.slice(splitIndex + 1)
	        ];
	        // put the text in the right place
	        this.tspans[newLineIndex].textContent = newSplitText[0];
	        this.tspans[newLineIndex + 1].textContent = newSplitText[1];
	        // move the cursor
	        this.cursorSpan.remove();
	        this.tspans[newLineIndex].insertAdjacentElement('afterend', this.cursorSpan);
	        // fix the dy
	        this._setTspanPositioning(this.tspans[newLineIndex + 1], 'inline');
	        this._setTspanPositioning(this.tspans[this.cursorIndex + 1], 'lineBreak');
	        // fix the lineIndex
	        this.lineIndexes[this.lineIndexes.indexOf(this.cursorIndex)] = this.cursorIndex + 1;
	        this.lineIndexes.sort(function (a, b) { return a - b; });
	        this.cursorIndex = newLineIndex;
	    }
	}
	exports.moveCursorUp = moveCursorUp;
	function destroyCursor() {
	    // if the cursor was acting as the newline, transfer newline to next tspan
	    if (this.cursorSpan.hasAttribute('dy'))
	        this._setTspanPositioning(this.tspans[this.cursorIndex + 1], 'lineBreak');
	    this.cursorSpan.remove();
	}
	exports.destroyCursor = destroyCursor;
	function addCursor() {
	    this.tspans[this.cursorIndex].insertAdjacentElement('afterend', this.cursorSpan);
	}
	exports.addCursor = addCursor;
	});

	var _editing = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.setUnderline = exports.setItalic = exports.setBold = exports.deleteNextCharacter = exports.deleteLastCharacter = exports.appendText = exports.getText = exports._updateAfterCursorText = exports._updateBeforeCursorText = exports._getAfterCursorText = exports._getBeforeCursorText = void 0;
	function _getBeforeCursorText() {
	    return this.tspans[this.cursorIndex].textContent;
	}
	exports._getBeforeCursorText = _getBeforeCursorText;
	function _getAfterCursorText() {
	    return this.tspans[this.cursorIndex + 1].textContent;
	}
	exports._getAfterCursorText = _getAfterCursorText;
	function _updateBeforeCursorText(newText) {
	    this.tspans[this.cursorIndex].textContent = newText;
	    // workaround: empty svg tspans act like they do not exist
	    if (this.tspans[this.cursorIndex].textContent !== '' && this.cursorIndex !== 0) {
	        this._setTspanPositioning(this.cursorSpan, 'inline');
	        this._setTspanPositioning(this.tspans[this.cursorIndex], 'lineBreak');
	    }
	}
	exports._updateBeforeCursorText = _updateBeforeCursorText;
	function _updateAfterCursorText(newText) {
	    this.tspans[this.cursorIndex + 1].textContent = newText;
	}
	exports._updateAfterCursorText = _updateAfterCursorText;
	function getText() {
	    return this.tspans.map(function (tspan) { return tspan.textContent; }).join('');
	}
	exports.getText = getText;
	function appendText(append) {
	    this._updateBeforeCursorText(this._getBeforeCursorText() + append);
	}
	exports.appendText = appendText;
	function deleteLastCharacter() {
	    this._updateBeforeCursorText(this._getBeforeCursorText().slice(0, -1));
	    // end of a newline
	    if (this._getBeforeCursorText() === '' && this.cursorIndex > 0) {
	        this.removeLine();
	    }
	}
	exports.deleteLastCharacter = deleteLastCharacter;
	function deleteNextCharacter() {
	    this._updateAfterCursorText(this._getAfterCursorText().slice(1));
	}
	exports.deleteNextCharacter = deleteNextCharacter;
	function setBold(bold) {
	    this.setStyle('font-weight', bold ? 'bold' : 'normal');
	}
	exports.setBold = setBold;
	function setItalic(italic) {
	    this.setStyle('font-style', italic ? 'italic' : 'normal');
	}
	exports.setItalic = setItalic;
	function setUnderline(underline) {
	    this.setStyle('text-decoration', underline ? 'underline' : 'none');
	}
	exports.setUnderline = setUnderline;
	});

	var _newlines = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.removeLine = exports.newLine = void 0;
	function newLine() {
	    if (this.tspans[this.cursorIndex + 1] !== undefined) {
	        // if there is a span after the cursor, linebreak the cursor
	        this._setTspanPositioning(this.cursorSpan, 'lineBreak');
	        // add a new empty span on that line
	        this._addTspan('', this.cursorIndex + 1, 'spanBefore');
	        // increment cursorIndex due to new span
	        this.cursorIndex++;
	        this.lineIndexes.push(this.cursorIndex);
	        this.lineIndexes.sort(function (a, b) { return a - b; });
	    }
	}
	exports.newLine = newLine;
	function removeLine() {
	    // remove the cursorIndex line
	    var removedLine = this.lineIndexes.splice(this.lineIndexes.indexOf(this.cursorIndex), 1)[0];
	    this.tspans[removedLine].remove();
	    this.tspans.splice(removedLine, 1);
	    this.lineIndexes = this.lineIndexes.map(function (i) { return i >= removedLine ? i - 1 : i; });
	    this.cursorIndex = removedLine - 1;
	}
	exports.removeLine = removeLine;
	});

	var _text = createCommonjsModule(function (module, exports) {
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
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Text = void 0;




	var Text = /** @class */ (function (_super) {
	    __extends(Text, _super);
	    function Text(position, initialText, section) {
	        var _this = _super.call(this, section, 'text', 'text') || this;
	        _this.tspans = [];
	        /** The text tspan after which the cursor is placed */
	        _this.cursorIndex = 0;
	        /** span indexes at which a newLine starts */
	        _this.lineIndexes = [];
	        _this.position = [0, 0];
	        _this.newLine = _newlines.newLine;
	        _this.removeLine = _newlines.removeLine;
	        _this.addCursor = _cursor.addCursor;
	        _this.destroyCursor = _cursor.destroyCursor;
	        _this.moveCursorLeft = _cursor.moveCursorLeft;
	        _this.moveCursorRight = _cursor.moveCursorRight;
	        _this.moveCursorDown = _cursor.moveCursorDown;
	        _this.moveCursorUp = _cursor.moveCursorUp;
	        _this._getBeforeCursorText = _editing._getBeforeCursorText;
	        _this._updateBeforeCursorText = _editing._updateBeforeCursorText;
	        _this._getAfterCursorText = _editing._getAfterCursorText;
	        _this._updateAfterCursorText = _editing._updateAfterCursorText;
	        _this.getText = _editing.getText;
	        _this.appendText = _editing.appendText;
	        _this.deleteLastCharacter = _editing.deleteLastCharacter;
	        _this.deleteNextCharacter = _editing.deleteNextCharacter;
	        _this.setBold = _editing.setBold;
	        _this.setItalic = _editing.setItalic;
	        _this.setUnderline = _editing.setUnderline;
	        var path = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	        _this.node = path;
	        _this.section = section;
	        _this.node.setAttribute('text-anchor', 'middle');
	        _this._addTspan(initialText);
	        _this.cursorSpan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
	        _this.node.appendChild(_this.cursorSpan);
	        _this.cursorSpan.classList.add('svg-real-db-text-cursor');
	        _this.cursorSpan.style.setProperty('position', 'relative');
	        _this.cursorSpan.textContent = '|';
	        _this.cursorIndex = 0;
	        _this._addTspan('', _this.cursorIndex + 1); // span after cursor
	        _this.lineIndexes.push(0);
	        _this.position = __spreadArrays(position);
	        _this.node.setAttribute('x', (_this.position[0]).toString());
	        _this.node.setAttribute('y', _this.position[1].toString());
	        return _this;
	    }
	    Text.prototype._addTspan = function (text, index, relativeTo) {
	        if (index === void 0) { index = 0; }
	        if (relativeTo === void 0) { relativeTo = 'spanAfter'; }
	        this.lineIndexes = this.lineIndexes.map(function (i) { return i >= index ? i + 1 : i; });
	        this.tspans.splice(index, 0, document.createElementNS('http://www.w3.org/2000/svg', 'tspan'));
	        var newTspan = this.tspans[index];
	        if (relativeTo === 'spanAfter') {
	            if (this.tspans[index + 1] !== undefined)
	                this.tspans[index + 1].insertAdjacentElement('beforebegin', newTspan);
	            else
	                this.node.insertAdjacentElement('beforeend', newTspan);
	        }
	        else {
	            if (this.tspans[index - 1] !== undefined)
	                this.tspans[index - 1].insertAdjacentElement('afterend', newTspan);
	            else
	                this.node.insertAdjacentElement('afterbegin', newTspan);
	        }
	        newTspan.textContent = text;
	        newTspan.style.setProperty('whiteSpace', 'pre');
	    };
	    Text.prototype._setTspanPositioning = function (tspan, positioningType) {
	        if (positioningType === 'lineBreak') {
	            tspan.setAttribute('x', this.position[0].toString());
	            tspan.setAttribute('dy', 1.2 + "em");
	        }
	        else if (positioningType === 'inline') {
	            tspan.removeAttribute('x');
	            tspan.removeAttribute('dy');
	        }
	    };
	    Text.prototype.updateTextBaseline = function (position) {
	        this.node.setAttribute('x', position[0].toString());
	        this.node.setAttribute('y', position[1].toString());
	        this.tspans.forEach(function (tspan) {
	            if (tspan.hasAttribute('x'))
	                tspan.setAttribute('x', position[0].toString());
	        });
	    };
	    Text.prototype.setStyle = function (property, value) {
	        this.node.style.setProperty(property, value);
	    };
	    Text.prototype.setFontSize = function (size) {
	        this.node.style.fontSize = size + "px";
	    };
	    /** @deprecated */
	    Text.prototype.importV1 = function (data) {
	        var _this = this;
	        _super.prototype.importV1.call(this, data);
	        this.position = [
	            Number(this.node.getAttribute('x')),
	            Number(this.node.getAttribute('y'))
	        ];
	        this.tspans = [];
	        this.lineIndexes = [];
	        this.cursorIndex = 0;
	        this.node.childNodes.forEach(function (node) {
	            if (node instanceof SVGTSpanElement) {
	                var numTspans = _this.tspans.push(node);
	                if (node.hasAttribute('dy'))
	                    _this.lineIndexes.push(numTspans - 1);
	            }
	        });
	        this.lineIndexes.sort(function (a, b) { return a - b; });
	        this.destroyCursor();
	    };
	    Text.prototype.import = function (data) {
	        var _this = this;
	        _super.prototype.import.call(this, data);
	        this.tspans = data.tspans.map(function (tspan) {
	            var tspan_ = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
	            tspan_.textContent = tspan.textContent;
	            if (tspan.dy !== null)
	                tspan_.setAttribute('dy', tspan.dy);
	            if (tspan.x !== null)
	                tspan_.setAttribute('x', tspan.x);
	            _this.node.append(tspan_);
	            return tspan_;
	        });
	        this.position = data.position;
	        this.updateTextBaseline(this.position);
	        this.destroyCursor();
	    };
	    Text.prototype.export = function () {
	        return __assign(__assign({}, this._exportBasicData()), { position: this.position, tspans: this.tspans.map(function (tspan) {
	                return {
	                    x: tspan.hasAttribute('x') ? tspan.getAttribute('x') : null,
	                    dy: tspan.hasAttribute('dy') ? tspan.getAttribute('dy') : null,
	                    textContent: tspan.textContent
	                };
	            }), type: this.strokeNodeType });
	    };
	    return Text;
	}(_node.Node));
	exports.Text = Text;
	});

	var _group = createCommonjsModule(function (module, exports) {
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.GroupNode = void 0;





	var GroupNode = /** @class */ (function (_super) {
	    __extends(GroupNode, _super);
	    function GroupNode(section, initialInnerNodes) {
	        var _this = _super.call(this, section, 'group', 'group') || this;
	        _this.innerNodes = [];
	        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	        initialInnerNodes.forEach(function (node) { return g.appendChild(node.node); });
	        _this.innerNodes = initialInnerNodes;
	        _this.node = g;
	        _this.section = section;
	        return _this;
	    }
	    GroupNode.prototype.export = function () {
	        return __assign(__assign({}, this._exportBasicData()), { innerNodes: this.innerNodes.map(function (innerNode) { return innerNode.export(); }), type: this.strokeNodeType });
	    };
	    GroupNode.prototype.import = function (data) {
	        var _this = this;
	        _super.prototype.import.call(this, data);
	        this.innerNodes = data.innerNodes.map(function (strokeNodeData) {
	            var _a, _b, _c, _d, _e;
	            switch (strokeNodeData.type) {
	                case 'circle':
	                    var circ = new _circle.Circle([0, 0], 0, (_a = strokeNodeData.section) !== null && _a !== void 0 ? _a : 'strokes');
	                    circ.import(strokeNodeData);
	                    return circ;
	                case 'path':
	                    var path = new _path.Path('', (_b = strokeNodeData.section) !== null && _b !== void 0 ? _b : 'strokes');
	                    path.import(strokeNodeData);
	                    return path;
	                case 'text':
	                    var text = new _text.Text([0, 0], '', (_c = strokeNodeData.section) !== null && _c !== void 0 ? _c : 'strokes');
	                    text.import(strokeNodeData);
	                    return text;
	                case 'group':
	                    var group = new GroupNode((_d = strokeNodeData.section) !== null && _d !== void 0 ? _d : 'strokes', []);
	                    group.import(strokeNodeData);
	                    return group;
	                case 'polygon':
	                    var polygon = new _polygon.Polygon([], (_e = strokeNodeData.section) !== null && _e !== void 0 ? _e : 'strokes');
	                    polygon.import(strokeNodeData);
	                    return polygon;
	            }
	        });
	        this.innerNodes.forEach(function (node) { return _this.node.appendChild(node.node); });
	    };
	    return GroupNode;
	}(_node.Node));
	exports.GroupNode = GroupNode;
	});

	var line$1 = createCommonjsModule(function (module, exports) {
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Line = exports.LineDefaults = exports.name = void 0;







	exports.name = 'line';
	exports.LineDefaults = {
	    lineThickness: 1,
	    lineColor: [1, 1, 1]
	};
	var Line = /** @class */ (function (_super) {
	    __extends(Line, _super);
	    function Line() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        /** key -> identifier, value -> coordinate
	         *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
	         */
	        _this._startCoords = new Map(); /* key -> identifier, value -> coordinate*/
	        return _this;
	    }
	    Line.prototype._startStroke = function (coords, identifier, target) {
	        this.RDB._doPreview = false;
	        if (this.RDB._previewStroke.has(identifier)) {
	            this.RDB._previewStroke.get(identifier).forEach(function (strokeNode) {
	                strokeNode.delete();
	            });
	        }
	        var linePath = new _path.Path('', 'strokes');
	        linePath.setStroke(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.lineColor));
	        linePath.setStrokeWidth(this.RDB.toolSettings.lineThickness);
	        var startCircle = circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.lineThickness), this.RDB.toolSettings.lineColor, 'strokes');
	        var endCircle = circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.lineThickness), this.RDB.toolSettings.lineColor, 'strokes');
	        this.RDB._addStroke([new _group.GroupNode('strokes', [linePath, startCircle, endCircle])]);
	        this.RDB._strokeIdentifierMap.set(identifier, this.RDB._strokeIndex);
	        this._startCoords.set(identifier, coords);
	    };
	    Line.prototype._endStroke = function (endCoords, identifier, target) {
	        var lineNode = this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)][0];
	        lineNode.innerNodes[0].updatePath(line.getLinePathCommand(this._startCoords.get(identifier), endCoords));
	        lineNode.innerNodes[2].updateCenter(endCoords);
	        this._startCoords.delete(identifier);
	        this.RDB._doPreview = true;
	    };
	    Line.prototype._doStroke = function (coords, identifier, target) {
	        var lineNode = this.RDB.strokes[this.RDB._strokeIndex][0];
	        lineNode.innerNodes[0].updatePath(line.getLinePathCommand(this._startCoords.get(identifier), coords));
	        lineNode.innerNodes[2].updateCenter(coords);
	    };
	    Line.prototype._toolPreview = function (coords, identifier, target) {
	        if (this.RDB._previewStroke.get(identifier).length == 0) {
	            var circleNode = circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.lineThickness), this.RDB.toolSettings.lineColor, 'overlay');
	            circleNode.setFill(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.lineColor));
	            circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.lineColor));
	            this.RDB._previewStroke.get(identifier).push(circleNode);
	        }
	        else {
	            var circleNode = this.RDB._previewStroke.get(identifier)[0];
	            circleNode.updateCenter(coords);
	            circleNode.updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.lineThickness));
	            circleNode.setFill(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.lineColor));
	            circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.lineColor));
	        }
	    };
	    Line.prototype._onScroll = function (scrollDelta, coords, identifier) {
	        this.RDB.changeToolSetting('lineThickness', Math.max(1, this.RDB.toolSettings.lineThickness - scrollDelta));
	        if (this.RDB._previewStroke.get(identifier) != null && this.RDB._previewStroke.get(identifier).length !== 0) {
	            this.RDB._previewStroke.get(identifier)[0].updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.RDB.toolSettings.lineThickness));
	            this.RDB._display(this.RDB._previewStroke.get(identifier));
	        }
	    };
	    return Line;
	}(_tool.Tool));
	exports.Line = Line;
	});

	var _mapKeyToAction_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._mapKeyToAction = void 0;
	function _mapKeyToAction(e, _selectedNode) {
	    switch (e.key.toLowerCase()) {
	        case 'backspace':
	            _selectedNode.deleteLastCharacter();
	            break;
	        case 'delete':
	            _selectedNode.deleteNextCharacter();
	            break;
	        case 'arrowleft':
	            _selectedNode.moveCursorLeft();
	            break;
	        case 'arrowright':
	            _selectedNode.moveCursorRight();
	            break;
	        case 'arrowdown':
	            _selectedNode.moveCursorDown();
	            break;
	        case 'arrowup':
	            _selectedNode.moveCursorUp();
	            break;
	        case 'enter':
	            if (e.shiftKey)
	                _selectedNode.newLine();
	            else {
	                _selectedNode.destroyCursor();
	                return [null, true];
	            }
	            break;
	        case 'shift':
	        case 'control':
	        case 'alt':
	        case 'altgraph':
	        case 'command':
	        case 'tab':
	        case 'home':
	        case 'end':
	        case 'pageup':
	        case 'pagedown':
	        case 'escape':
	        case 'insert':
	        case 'f1':
	        case 'f2':
	        case 'f3':
	        case 'f4':
	        case 'f5':
	        case 'f6':
	        case 'f7':
	        case 'f8':
	        case 'f9':
	        case 'f10':
	        case 'f11':
	        case 'f12':
	            return [_selectedNode, false];
	        default:
	            if (!e.ctrlKey)
	                _selectedNode.appendText(e.key);
	            else
	                return [_selectedNode, false];
	            break;
	    }
	    return [_selectedNode, true];
	}
	exports._mapKeyToAction = _mapKeyToAction;
	});

	var text = createCommonjsModule(function (module, exports) {
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TextTool = exports.TextDefaults = exports.name = void 0;





	exports.name = 'text';
	exports.TextDefaults = {
	    fontSize: 10,
	    fontColor: [1, 1, 1],
	    textToolMode: 'new',
	    bold: false,
	    italic: false,
	    underline: false
	};
	/**
	 * Text Tool
	 * HOW TO USE:
	 * There are two modes: 'new' and 'edit'
	 * In 'new' mode, drag on the board to insert new text, this will also change the mode to edit mode.
	 * In 'edit' mode, type to enter text. The following keyboard shortcuts/functions are supported:
	 * 1) Arrow keys: Move the cursor.
	 * 2) Backspace
	 * 3) Shift + Enter: Add a new line.
	 * 4) Enter: Confirm editing. NOTE: The text will NOT be editable after this step. This will be changed in future version.
	 *
	 * Cursor Styling:
	 * The cursor is currently just a '|' character in an SVG <tspan>.
	 * To style the cursor (blinking, color), add CSS to the `.svg-real-db-text-cursor' class.
	 * See: /example/index.css in the repo.
	 */
	var TextTool = /** @class */ (function (_super) {
	    __extends(TextTool, _super);
	    function TextTool() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        /** key -> identifier, value -> coordinate
	         *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
	         */
	        _this._startCoords = new Map(); /* key -> identifier, value -> coordinate*/
	        _this._selectedNode = null;
	        return _this;
	    }
	    TextTool.prototype._onLoad = function () {
	        var _this = this;
	        this.RDB.on('tool-setting-change', 'text-tool-handler', function (_a) {
	            var settingName = _a.settingName, newValue = _a.newValue;
	            if (_this.RDB.toolSettings.textToolMode === 'edit' && _this._selectedNode !== null) {
	                switch (settingName) {
	                    case 'fontColor':
	                        _this._selectedNode.setFill(getRGBColorString_1.getRGBColorString(newValue));
	                        break;
	                    case 'fontSize':
	                        _this._selectedNode.setFontSize(newValue);
	                        break;
	                    case 'bold':
	                        _this._selectedNode.setBold(newValue);
	                        break;
	                    case 'italic':
	                        _this._selectedNode.setItalic(newValue);
	                        break;
	                    case 'underline':
	                        _this._selectedNode.setUnderline(newValue);
	                        break;
	                }
	            }
	            if (settingName === 'textToolMode' && newValue === 'new') {
	                if (_this._selectedNode !== null) {
	                    _this._selectedNode.destroyCursor();
	                    _this._selectedNode = null;
	                }
	            }
	        });
	        this.RDB.on('board-cleared', 'text-tool-handler', function () {
	            _this.RDB.changeToolSetting('textToolMode', 'edit');
	        });
	    };
	    TextTool.prototype._onUnload = function () {
	        this.RDB.changeToolSetting('textToolMode', 'new');
	    };
	    TextTool.prototype._startStroke = function (coords, identifier, target) {
	        if (this.RDB.toolSettings.textToolMode === 'new') {
	            if (this.RDB._previewStroke.has(identifier)) {
	                this.RDB._previewStroke.get(identifier).forEach(function (strokeNode) {
	                    strokeNode.delete();
	                });
	            }
	            this._startCoords.set(identifier, coords);
	            var boundingBox = new _polygon.Polygon([coords, coords, coords, coords], 'overlay');
	            boundingBox.setDashed(getRGBColorString_1.getRGBColorString(this.RDB.bgColor.map(function (c) { return 1 - c; })));
	            boundingBox.setFill('transparent');
	            this.RDB._previewStroke.set(identifier, [boundingBox]);
	        }
	    };
	    TextTool.prototype._endStroke = function (endCoords, identifier, target) {
	        if (this.RDB.toolSettings.textToolMode === 'new') {
	            var _a = this._startCoords.get(identifier), startX = _a[0], startY = _a[1];
	            var endX = endCoords[0], endY = endCoords[1];
	            var baselineCoords = [
	                (startX + endX) / 2,
	                (startY + endY) / 2
	            ];
	            var textPath = new _text.Text(baselineCoords, 'Enter Text', 'strokes');
	            textPath.setFill(getRGBColorString_1.getRGBColorString(this.RDB.toolSettings.fontColor));
	            textPath.setFontSize(this.RDB.toolSettings.fontSize);
	            textPath.setBold(this.RDB.toolSettings.bold);
	            textPath.setItalic(this.RDB.toolSettings.italic);
	            textPath.setUnderline(this.RDB.toolSettings.underline);
	            this.RDB._addStroke([textPath]);
	            this.RDB._strokeIdentifierMap.set(identifier, this.RDB._strokeIndex);
	            if (this._selectedNode !== null)
	                this._selectedNode.destroyCursor();
	            this._selectedNode = textPath;
	            this.RDB.changeToolSetting('textToolMode', 'edit');
	            if (this.RDB._previewStroke.has(identifier)) {
	                this.RDB._previewStroke.get(identifier).forEach(function (node) { return node.delete(); });
	                this.RDB._previewStroke.delete(identifier);
	            }
	        }
	    };
	    TextTool.prototype._doStroke = function (coords, identifier, target) {
	        if (this.RDB.toolSettings.textToolMode === 'new') {
	            var boundingBox = this.RDB._previewStroke.get(identifier)[0];
	            var _a = this._startCoords.get(identifier), startX = _a[0], startY = _a[1];
	            var endX = coords[0], endY = coords[1];
	            boundingBox.updatePoints([
	                [startX, startY],
	                [endX, startY],
	                [endX, endY],
	                [startX, endY]
	            ]);
	        }
	    };
	    TextTool.prototype._onKey = function (e) {
	        if (this.RDB.toolSettings.textToolMode === 'edit' && this._selectedNode !== null) {
	            var _a = _mapKeyToAction_1._mapKeyToAction(e, this._selectedNode), _selectedNode = _a[0], doPrevent = _a[1];
	            if (doPrevent)
	                e.preventDefault();
	            this._selectedNode = _selectedNode;
	            if (this._selectedNode === null)
	                this.RDB.changeToolSetting('textToolMode', 'new');
	        }
	    };
	    TextTool.prototype._onScroll = function (scrollDelta) {
	        this.RDB.changeToolSetting('fontSize', Math.max(1, this.RDB.toolSettings.fontSize - scrollDelta / 5));
	    };
	    return TextTool;
	}(_tool.Tool));
	exports.TextTool = TextTool;
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
	exports.TextTool = exports.LineTool = exports.EraserTool = exports.BrushTool = exports.ToolDefaults = void 0;




	exports.ToolDefaults = __assign(__assign(__assign(__assign({}, brush.BrushDefaults), line$1.LineDefaults), eraser.EraserDefaults), text.TextDefaults
	// ...rainbow_brush.RainbowBrushDefaults
	);
	var brush_1 = brush;
	Object.defineProperty(exports, "BrushTool", { enumerable: true, get: function () { return brush_1.Brush; } });
	var eraser_1 = eraser;
	Object.defineProperty(exports, "EraserTool", { enumerable: true, get: function () { return eraser_1.Eraser; } });
	var line_1 = line$1;
	Object.defineProperty(exports, "LineTool", { enumerable: true, get: function () { return line_1.Line; } });
	var text_1 = text;
	Object.defineProperty(exports, "TextTool", { enumerable: true, get: function () { return text_1.TextTool; } });
	});

	var RealRendererDefaults = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RealRendererDefaults = void 0;
	exports.RealRendererDefaults = {
	    bgColor: [0, 0, 0],
	    bgType: {
	        type: 'axes',
	        axesColor: [1, 1, 1],
	        xOffset: 20,
	        yOffset: 20
	    },
	    drawsPerFrame: 1,
	    timeStep: 1 / 60,
	    initTime: 0,
	    scaleFactor: 1
	};
	});

	var RealDrawBoardDefaults = createCommonjsModule(function (module, exports) {
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
	exports.RealDrawBoardDefaults = void 0;


	exports.RealDrawBoardDefaults = __assign(__assign({}, RealRendererDefaults.RealRendererDefaults), { toolSettings: tools.ToolDefaults, allowUndo: false, maxUndos: 10, tool: 'brush' });
	});

	var RealRendererEvents = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RealRendererEventList = void 0;
	exports.RealRendererEventList = [
	    'start-render',
	    'stop-render',
	    'change-scale',
	    'change-offsets',
	    'import'
	];
	});

	var RealDrawBoardEvents = createCommonjsModule(function (module, exports) {
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RealDrawBoardEventList = void 0;

	exports.RealDrawBoardEventList = __spreadArrays(RealRendererEvents.RealRendererEventList, [
	    'tool-change',
	    'tool-setting-change',
	    'board-cleared',
	    'board-reset'
	]);
	});

	var blankGraph = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getBlankGraphPaths = void 0;



	function getBlankGraphPaths(dimensions, bgColor, bgType) {
	    var outX = dimensions[0], outY = dimensions[1];
	    var axesPath = new _path.Path('', 'bg');
	    switch (bgType.type) {
	        case 'none':
	            break;
	        case 'axes':
	            var X = Math.floor(outY * (bgType.xOffset / 100));
	            var Y = Math.floor(outX * (bgType.yOffset / 100));
	            axesPath.setStroke(getRGBColorString_1.getRGBColorString(bgType.axesColor));
	            axesPath.appendPath("M 0," + Y + " H " + (dimensions[0] - 1));
	            axesPath.appendPath("M " + X + ",0 V " + (dimensions[1] - 1));
	            break;
	        case 'grid':
	            var xSpacing = dimensions[0] * (bgType.xSpacing / 100);
	            var ySpacing = dimensions[1] * (bgType.ySpacing / 100);
	            axesPath.setStroke(getRGBColorString_1.getRGBColorString(bgType.lineColor));
	            // x-axis
	            for (var x = xSpacing; x < dimensions[0]; x += xSpacing) {
	                axesPath.appendPath("M " + x + ",0 V " + (dimensions[1] - 1));
	            }
	            // y-axis
	            for (var y = ySpacing; y < dimensions[1]; y += ySpacing) {
	                axesPath.appendPath("M 0," + y + " H " + (dimensions[0] - 1));
	            }
	            break;
	        case 'ruled':
	            var perpendicularDimension = bgType.orientation === 'horizontal' ? dimensions[1] : dimensions[0];
	            var spacing = perpendicularDimension * (bgType.spacing / 100);
	            axesPath.setStroke(getRGBColorString_1.getRGBColorString(bgType.lineColor));
	            for (var dist = spacing; dist < perpendicularDimension; dist += spacing) {
	                var d = void 0;
	                if (bgType.orientation === 'horizontal')
	                    d = "M 0," + dist + " H " + (dimensions[0] - 1);
	                else
	                    d = "M " + dist + ",0 V " + (dimensions[1] - 1);
	                axesPath.appendPath(d);
	            }
	            break;
	    }
	    var bgPolygon = new _polygon.Polygon([
	        [0, 0],
	        [0, dimensions[1]],
	        [dimensions[0], dimensions[1]],
	        [dimensions[0], 0]
	    ], 'bg');
	    bgPolygon.setFill(getRGBColorString_1.getRGBColorString(bgColor));
	    bgPolygon.setStroke(getRGBColorString_1.getRGBColorString(bgColor));
	    return [bgPolygon, axesPath];
	}
	exports.getBlankGraphPaths = getBlankGraphPaths;
	});

	var clamp_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.clamp = void 0;
	/**
	 * Clamps a given number between two bounds.
	 * @param input The number to be clamped.
	 * @param min Lower bound.
	 * @param max Upper bound.
	 */
	function clamp(input, min, max) {
	    return Math.min(Math.max(input, min), max);
	}
	exports.clamp = clamp;
	});

	var background = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.normalizeBG = exports.changeBackground = void 0;


	/**
	 * Changes the background of the graph.
	 * @param newBG New background.
	 * @returns Self for chaining.
	 */
	function changeBackground(newBG) {
	    this.bgType = newBG;
	    var newBGStrokes = blankGraph.getBlankGraphPaths(this.dimensions, this.bgColor, this.bgType);
	    this.normalizeBG();
	    this.strokes[0].forEach(function (stroke) { return stroke.delete(); });
	    this.strokes[0] = newBGStrokes;
	    this._display(this.strokes[0]);
	    return this;
	}
	exports.changeBackground = changeBackground;
	function normalizeBG() {
	    switch (this.bgType.type) {
	        case 'axes':
	            this.bgType.xOffset = clamp_1.clamp(this.bgType.xOffset, 0, 100); // %age
	            this.bgType.yOffset = clamp_1.clamp(this.bgType.yOffset, 0, 100); // %age
	            break;
	        case 'grid':
	            this.bgType.xSpacing = clamp_1.clamp(this.bgType.xSpacing, 0, 100); // %age
	            this.bgType.ySpacing = clamp_1.clamp(this.bgType.ySpacing, 0, 100); // %age
	            if (this.bgType.xSpacing === 0)
	                this.bgType.xSpacing = 1;
	            if (this.bgType.ySpacing === 0)
	                this.bgType.ySpacing = 1;
	            break;
	        case 'ruled':
	            this.bgType.spacing = clamp_1.clamp(this.bgType.spacing, 0, 100);
	            if (this.bgType.spacing === 0)
	                this.bgType.spacing = 1;
	            break;
	    }
	}
	exports.normalizeBG = normalizeBG;
	});

	var draw_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._addStroke = exports._display = exports.draw = exports._draw = exports._drawFunc = void 0;
	function _drawFunc(time) {
	    return this;
	}
	exports._drawFunc = _drawFunc;
	function _draw() {
	    this.time += this.timeStep;
	    this._drawFunc(this.time);
	    return this;
	}
	exports._draw = _draw;
	/**
	 * Draw a certain number of frames.
	 * @param numDraws Number of frames to draw.
	 * @returns Self for chaining.
	 */
	function draw(numDraws) {
	    if (numDraws === void 0) { numDraws = 1; }
	    for (var i = 0; i < numDraws; i++)
	        this._draw();
	    return this;
	}
	exports.draw = draw;
	function _display(stroke) {
	    var _this = this;
	    stroke.forEach(function (strokeNode) {
	        if (strokeNode.node.parentElement == null)
	            _this.svgSections[strokeNode.section].appendChild(strokeNode.node);
	    });
	}
	exports._display = _display;
	function _addStroke(stroke) {
	    if (this.strokes.length > this._strokeIndex + 1)
	        this.strokes.splice(this._strokeIndex + 1, this.strokes.length - this._strokeIndex);
	    this.strokes[++this._strokeIndex] = stroke;
	}
	exports._addStroke = _addStroke;
	});

	var render = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.toggleRender = exports.stopRender = exports.startRender = exports._render = void 0;
	function _render() {
	    var _this = this;
	    if (this._doRender) {
	        this.draw(this.drawsPerFrame);
	        this._display(this.strokes[this._strokeIndex]);
	        window.requestAnimationFrame(function () { _this._render(); });
	    }
	}
	exports._render = _render;
	/**
	 * Start rendering.
	 * @returns Self for chaining.
	 */
	function startRender() {
	    if (!this._doRender) {
	        this._doRender = true;
	        this._render();
	        this.emit('start-render', {});
	    }
	    return this;
	}
	exports.startRender = startRender;
	/**
	 * Stop rendering.
	 * @returns Self for chaining.
	 */
	function stopRender() {
	    this._doRender = false;
	    this.emit('stop-render', {});
	    return this;
	}
	exports.stopRender = stopRender;
	/**
	 * Toggle rendering.
	 * @returns Self for chaining.
	 */
	function toggleRender() {
	    this._doRender = !this._doRender;
	    if (this._doRender)
	        this._render();
	    return this;
	}
	exports.toggleRender = toggleRender;
	});

	var eventEmitter = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.EventEmitter = void 0;
	var EventEmitter = /** @class */ (function () {
	    function EventEmitter(eventList) {
	        var _this = this;
	        this.eventHandlers = {};
	        eventList.forEach(function (event) {
	            _this.eventHandlers[event] = new Map();
	        });
	    }
	    EventEmitter.prototype.on = function (eventName, handlerName, handler) {
	        if (!this.eventHandlers[eventName].has(handlerName))
	            this.eventHandlers[eventName].set(handlerName, handler);
	    };
	    EventEmitter.prototype.off = function (eventName, handlerName) {
	        this.eventHandlers[eventName].delete(handlerName);
	    };
	    EventEmitter.prototype.emit = function (eventName, parameters) {
	        this.eventHandlers[eventName].forEach(function (handler) {
	            handler(parameters);
	        });
	    };
	    return EventEmitter;
	}());
	exports.EventEmitter = EventEmitter;
	});

	var importExport = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.importData = exports.exportData = void 0;





	/**
	 * Export the data of the graph in a certain format that can be used to load the data later. Load using .importData().
	 * @returns Data of the graph in a storable and loadable format.
	 */
	function exportData() {
	    this._beforeExport();
	    var strokeExport = [];
	    this.strokes.forEach(function (stroke) {
	        strokeExport.push(stroke.map(function (node) { return node.export(); }));
	    });
	    return {
	        version: 2,
	        exportData: strokeExport,
	        strokeIndex: this._strokeIndex,
	        dimensions: this.dimensions,
	        bgType: this.bgType
	    };
	}
	exports.exportData = exportData;
	/**
	 * Import the data exported by .export() method.
	 * @param data Data exported by .export()
	 * @returns Self for chaining.
	 */
	function importData(data) {
	    var _this = this;
	    var _a;
	    this.strokes.forEach(function (stroke) {
	        stroke.forEach(function (node) { return node.delete(); });
	    });
	    this.svg.setAttribute('viewBox', "0 0 " + this.dimensions[0] + " " + this.dimensions[1]);
	    this.bgType = (_a = data.bgType) !== null && _a !== void 0 ? _a : this.bgType;
	    this.strokes = [];
	    if ('version' in data) {
	        if (data.version === 2) {
	            data.exportData.forEach(function (strokeExport) {
	                _this.strokes.push(strokeExport.map(function (strokeNodeData) {
	                    var _a, _b, _c, _d, _e;
	                    switch (strokeNodeData.type) {
	                        case 'circle':
	                            var circ = new _circle.Circle([0, 0], 0, (_a = strokeNodeData.section) !== null && _a !== void 0 ? _a : 'strokes');
	                            circ.import(strokeNodeData);
	                            return circ;
	                        case 'path':
	                            var path = new _path.Path('', (_b = strokeNodeData.section) !== null && _b !== void 0 ? _b : 'strokes');
	                            path.import(strokeNodeData);
	                            return path;
	                        case 'text':
	                            var text = new _text.Text([0, 0], '', (_c = strokeNodeData.section) !== null && _c !== void 0 ? _c : 'strokes');
	                            text.import(strokeNodeData);
	                            return text;
	                        case 'group':
	                            var group = new _group.GroupNode((_d = strokeNodeData.section) !== null && _d !== void 0 ? _d : 'strokes', []);
	                            group.import(strokeNodeData);
	                            return group;
	                        case 'polygon':
	                            var polygon = new _polygon.Polygon([], (_e = strokeNodeData.section) !== null && _e !== void 0 ? _e : 'strokes');
	                            polygon.import(strokeNodeData);
	                            return polygon;
	                    }
	                }));
	            });
	        }
	    }
	    else {
	        // legacy deprecated unsafe
	        data.exportData.forEach(function (strokeExport) {
	            _this.strokes.push(strokeExport.map(function (strokeNodeData) {
	                var _a, _b, _c, _d, _e;
	                switch (strokeNodeData.type) {
	                    case 'circle':
	                        var circ = new _circle.Circle([0, 0], 0, (_a = strokeNodeData.section) !== null && _a !== void 0 ? _a : 'strokes');
	                        circ.importV1(strokeNodeData.data);
	                        return circ;
	                    case 'path':
	                        var path = new _path.Path('', (_b = strokeNodeData.section) !== null && _b !== void 0 ? _b : 'strokes');
	                        path.importV1(strokeNodeData.data);
	                        return path;
	                    case 'text':
	                        var text = new _text.Text([0, 0], '', (_c = strokeNodeData.section) !== null && _c !== void 0 ? _c : 'strokes');
	                        text.importV1(strokeNodeData.data);
	                        return text;
	                    case 'group':
	                        var group = new _group.GroupNode((_d = strokeNodeData.section) !== null && _d !== void 0 ? _d : 'strokes', []);
	                        group.importV1(strokeNodeData.data);
	                        return group;
	                    case 'polygon':
	                        var polygon = new _polygon.Polygon([], (_e = strokeNodeData.section) !== null && _e !== void 0 ? _e : 'strokes');
	                        polygon.importV1(strokeNodeData.data);
	                        return polygon;
	                }
	            }));
	        });
	    }
	    this._strokeIndex = data.strokeIndex;
	    for (var i = 0; i <= this._strokeIndex; i++) {
	        this._display(this.strokes[i]);
	    }
	    this.emit('import', {
	        import: data
	    });
	    return this;
	}
	exports.importData = importData;
	});

	var svgDom = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.attach = exports._setViewBox = exports._setSVG = void 0;

	function _setSVG() {
	    if (this.svg === undefined) {
	        throw 'No SVG Element Found';
	    }
	    this._setViewBox(this.dimensions, this._offsetX, this._offsetY);
	    this.svg.setAttribute('preserveAspectRatio', 'none');
	    this.svgSections = {
	        bg: document.createElementNS('http://www.w3.org/2000/svg', 'g'),
	        strokes: document.createElementNS('http://www.w3.org/2000/svg', 'g'),
	        overlay: document.createElementNS('http://www.w3.org/2000/svg', 'g')
	    };
	    this.svg.appendChild(this.svgSections.bg);
	    this.svg.appendChild(this.svgSections.strokes);
	    this.svg.appendChild(this.svgSections.overlay);
	    this._addStroke(blankGraph.getBlankGraphPaths(this.dimensions, this.bgColor, this.bgType));
	    this._display(this.strokes[this._strokeIndex]);
	    this._doRender = false;
	}
	exports._setSVG = _setSVG;
	function _setViewBox(dimensions, xOffset, yOffset) {
	    this.svg.setAttribute('viewBox', xOffset + " " + yOffset + " " + dimensions[0] + " " + dimensions[1]);
	}
	exports._setViewBox = _setViewBox;
	/**
	   * Attaches to a DOM SVG element to render to.
	   * @param svg The SVG element to attach.
	   * @param dimensions Dimensions of the graph.
	   * @returns Self for chaining.
	   */
	function attach(svg, dimensions) {
	    this.dimensions = dimensions;
	    this.originalDimensions = [
	        dimensions[0],
	        dimensions[1]
	    ];
	    this.svg = svg;
	    this._setSVG();
	    return this;
	}
	exports.attach = attach;
	});

	var svgSettings = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.changeOffsets = exports.scale = void 0;

	/**
	 * Scale/zoom the graph.
	 * @param scaleFactor Factor to scale the graph by. Larger number zooms in.
	 * @returns Self for chaining.
	 */
	function scale(scaleFactor) {
	    var oldScaleFactor = this.scaleFactor;
	    this.scaleFactor = scaleFactor;
	    this.dimensions[0] = this.originalDimensions[0] / scaleFactor;
	    this.dimensions[1] = this.originalDimensions[1] / scaleFactor;
	    // To clamp the offsets as well
	    this.changeOffsets(this._offsetX, this._offsetY);
	    this.emit('change-scale', {
	        oldScaleFactor: oldScaleFactor,
	        newScaleFactor: this.scaleFactor
	    });
	    return this;
	}
	exports.scale = scale;
	/**
	 * Change the offsets of the graph (for panning)
	 * @param xOffset Offset in the x-direction.
	 * @param yOffset Offset in the y-direction.
	 * @returns Self for chaining.
	 */
	function changeOffsets(xOffset, yOffset) {
	    var oldOffsets = {
	        x: this._offsetX,
	        y: this._offsetY
	    };
	    this._offsetX = clamp_1.clamp(xOffset, 0, this.originalDimensions[0] - this.dimensions[0]);
	    this._offsetY = clamp_1.clamp(yOffset, 0, this.originalDimensions[1] - this.dimensions[1]);
	    this._setViewBox(this.dimensions, this._offsetX, this._offsetY);
	    this.emit('change-offsets', {
	        oldOffsets: oldOffsets,
	        newOffsets: {
	            x: this._offsetX,
	            y: this._offsetY
	        }
	    });
	    return this;
	}
	exports.changeOffsets = changeOffsets;
	});

	var undo_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.redo = exports.undo = void 0;

	/**
	 * Undos a certain number of strokes drawn on the graph.
	 * @param numUndo Number of strokes to undo.
	 * @returns Self for chaining.
	 */
	function undo(numUndo) {
	    if (numUndo === void 0) { numUndo = 1; }
	    this._strokeIndex = clamp_1.clamp(this._strokeIndex - numUndo, 0, this.strokes.length - 1);
	    for (var i = this._strokeIndex + 1; i < this.strokes.length; i++) {
	        this.strokes[i].forEach(function (strokeNode) { return strokeNode.delete(); });
	    }
	    return this;
	}
	exports.undo = undo;
	/**
	 * Redos a certain number of strokes drawn on the graph.
	 * @param numRedo Number of strokes to redo.
	 * @returns Self for chaining.
	 */
	function redo(numRedo) {
	    if (numRedo === void 0) { numRedo = 1; }
	    var doRedo = clamp_1.clamp(numRedo, numRedo, this.strokes.length - this._strokeIndex - 1);
	    for (var i = 0; i < doRedo; i++) {
	        this._strokeIndex++;
	        this._display(this.strokes[this._strokeIndex]);
	    }
	    return this;
	}
	exports.redo = redo;
	});

	var RealRendererTypes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	});

	var RealRenderer_1 = createCommonjsModule(function (module, exports) {
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
	exports.RealRenderer = exports.RealRendererTypes = void 0;











	__exportStar(RealRendererDefaults, exports);
	exports.RealRendererTypes = RealRendererTypes;
	/**
	 * General Real Renderer with no specific purpose. Should be extended to use.
	 */
	var RealRenderer = /** @class */ (function (_super) {
	    __extends(RealRenderer, _super);
	    /**
	     *
	     * @param options
	     * @param eventList
	     */
	    function RealRenderer(options, eventList) {
	        if (eventList === void 0) { eventList = RealRendererEvents.RealRendererEventList; }
	        var _this = _super.call(this, eventList) || this;
	        _this._offsetX = 0;
	        _this._offsetY = 0;
	        _this.strokes = [];
	        _this._strokeIndex = -1;
	        _this.undo = undo_1.undo;
	        _this.redo = undo_1.redo;
	        _this.exportData = importExport.exportData;
	        _this.importData = importExport.importData;
	        _this.changeBackground = background.changeBackground;
	        _this.scale = svgSettings.scale;
	        _this.changeOffsets = svgSettings.changeOffsets;
	        _this.attach = svgDom.attach;
	        _this.draw = draw_1.draw;
	        _this.startRender = render.startRender;
	        _this.stopRender = render.stopRender;
	        _this.toggleRender = render.toggleRender;
	        _this.normalizeBG = background.normalizeBG;
	        _this._setSVG = svgDom._setSVG;
	        _this._setViewBox = svgDom._setViewBox;
	        _this._drawFunc = draw_1._drawFunc;
	        _this._draw = draw_1._draw;
	        /** @internal */
	        _this._display = draw_1._display;
	        /** @internal */
	        _this._addStroke = draw_1._addStroke;
	        _this._render = render._render;
	        // *****DEFAULTS*****
	        _this.settings = __assign(__assign({}, RealRendererDefaults.RealRendererDefaults), options);
	        _this.bgType = _this.settings.bgType;
	        _this.normalizeBG();
	        _this.bgColor = _this.settings.bgColor;
	        _this.drawsPerFrame = _this.settings.drawsPerFrame;
	        _this.timeStep = _this.settings.timeStep;
	        _this.time = _this.settings.initTime;
	        _this.scaleFactor = _this.settings.scaleFactor;
	        return _this;
	        // *****DEFAULTS*****
	    }
	    RealRenderer.prototype._beforeExport = function () { };
	    /**
	     * Resets the internal time counter.
	     * @returns Self for chaining.
	     */
	    RealRenderer.prototype.resetTime = function () {
	        this.time = 0;
	        return this;
	    };
	    /**
	     * Resets everything regarding the graph.
	     * @returns Self for chaining.
	     */
	    RealRenderer.prototype.reset = function () {
	        this.strokes = [
	            blankGraph.getBlankGraphPaths(this.dimensions, this.bgColor, this.bgType)
	        ];
	        this._strokeIndex = 0;
	        this.resetTime();
	        this._display(this.strokes[this._strokeIndex]);
	        return this;
	    };
	    return RealRenderer;
	}(eventEmitter.EventEmitter));
	exports.RealRenderer = RealRenderer;
	});

	var boardManip = createCommonjsModule(function (module, exports) {
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
	exports._resetBoard = exports.clear = exports.clearPreview = exports.changeToolSetting = exports.changeTool = void 0;


	/**
	 * Change the currently selected tool on the draw board.
	 * @param newTool
	 * @returns Self for chaining.
	 */
	function changeTool(newTool) {
	    this._tools[this.tool]._onUnload();
	    var oldTool = this.tool;
	    this.tool = newTool;
	    this._previewStroke.forEach(function (stroke) {
	        stroke.forEach(function (node) {
	            node.delete();
	        });
	    });
	    this._previewStroke.clear();
	    this._tools[this.tool]._onLoad();
	    this.emit('tool-change', {
	        newTool: newTool,
	        oldTool: oldTool
	    });
	    return this;
	}
	exports.changeTool = changeTool;
	/**
	 * Change a tool setting.
	 * @param settingName Name of the tool setting.
	 * @param value New value for the setting.
	 * @returns Self for chaining.
	 */
	function changeToolSetting(settingName, value) {
	    var oldValue = this.toolSettings[settingName];
	    this.toolSettings[settingName] = value;
	    this.emit('tool-setting-change', {
	        settingName: settingName,
	        newValue: value,
	        oldValue: oldValue
	    });
	    return this;
	}
	exports.changeToolSetting = changeToolSetting;
	/**
	 * Clear all tool previews.
	 * @returns Self for chaining.
	 */
	function clearPreview() {
	    this._previewStroke.forEach(function (stroke) {
	        stroke.forEach(function (node) {
	            node.delete();
	        });
	    });
	    this._previewStroke.clear();
	    return this;
	}
	exports.clearPreview = clearPreview;
	/**
	 * Clear the board without resetting any parameters.
	 * @returns Self for chaining.
	 */
	function clear() {
	    if (this._strokeIndex > 0) {
	        this._strokeIndex = 0;
	        this._lastCoords.clear();
	        this.strokes.forEach(function (stroke) {
	            stroke.forEach(function (strokeNode) { return strokeNode.delete(); });
	        });
	        this.strokes = [
	            blankGraph.getBlankGraphPaths(this.dimensions, this.bgColor, this.bgType)
	        ];
	        this._display(this.strokes[this._strokeIndex]);
	        this.emit('board-cleared', {});
	    }
	    return this;
	}
	exports.clear = clear;
	/**
	 * @internal
	 */
	function _resetBoard() {
	    this.bgColor = this.settings.bgColor;
	    this.tool = this.settings.tool;
	    this.toolSettings = __assign(__assign({}, tools.ToolDefaults), this.settings.toolSettings);
	    this._lastCoords.clear();
	    this.stopRender();
	    this.emit('board-reset', {});
	    return this;
	}
	exports._resetBoard = _resetBoard;
	});

	var _coords = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._getTouchCoords = exports._getMouseCoords = void 0;
	function _getMouseCoords(e) {
	    var xScaleFactor = this.dimensions[0] / this.svg.clientWidth;
	    var yScaleFactor = this.dimensions[1] / this.svg.clientHeight;
	    var x = e.offsetX * xScaleFactor + this._offsetX;
	    var y = e.offsetY * yScaleFactor + this._offsetY;
	    return [x, y]; // In graph coordinates
	}
	exports._getMouseCoords = _getMouseCoords;
	function _getTouchCoords(touch) {
	    var xScaleFactor = this.dimensions[0] / this.svg.clientWidth;
	    var yScaleFactor = this.dimensions[1] / this.svg.clientHeight;
	    var x = (touch.clientX - this.svg.getBoundingClientRect().left + this._offsetY) * xScaleFactor;
	    var y = (touch.clientY - this.svg.getBoundingClientRect().top + this._offsetY) * yScaleFactor;
	    return [x, y];
	}
	exports._getTouchCoords = _getTouchCoords;
	});

	var _DOMEvents = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._removeDOMEvents = exports._addDOMEvents = void 0;
	function _addDOMEvents() {
	    this.svg.addEventListener('mousedown', this._mouseDownEventListener);
	    this.svg.addEventListener('mouseup', this._mouseUpEventListener);
	    this.svg.addEventListener('mouseleave', this._mouseLeaveEventListener);
	    this.svg.addEventListener('mousemove', this._previewMouseMoveEventListener);
	    this.svg.addEventListener('wheel', this._wheelEventListener);
	    document.addEventListener('keydown', this._keyPressEventListener);
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
	    this.svg.removeEventListener('wheel', this._wheelEventListener);
	    document.removeEventListener('keydown', this._keyPressEventListener);
	    this.svg.removeEventListener('touchstart', this._touchStartEventListener);
	    this.svg.removeEventListener('touchmove', this._touchMoveEventListener);
	    this.svg.removeEventListener('touchend', this._touchEndEventListener);
	    this.svg.removeEventListener('touchmove', this._previewTouchMoveEventListener);
	}
	exports._removeDOMEvents = _removeDOMEvents;
	});

	var RealDrawBoardTypes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
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
	exports.RealDrawBoard = exports.RealRendererTypes = exports.RealDrawBoardTypes = void 0;







	__exportStar(RealDrawBoardDefaults, exports);
	exports.RealDrawBoardTypes = RealDrawBoardTypes;
	exports.RealRendererTypes = RealRendererTypes;
	/**
	 * Drawing board.
	 */
	var RealDrawBoard = /** @class */ (function (_super) {
	    __extends(RealDrawBoard, _super);
	    function RealDrawBoard(options) {
	        var _this = 
	        // *****DEFAULTS*****
	        _super.call(this, options, RealDrawBoardEvents.RealDrawBoardEventList) || this;
	        _this.tool = RealDrawBoardDefaults.RealDrawBoardDefaults.tool;
	        /** key -> identifier, value -> coordinate
	         *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
	         * @internal
	         */
	        _this._lastCoords = new Map();
	        /** @internal */
	        _this._doPreview = true; // If a preview should be drawn
	        /**
	         * The preview for the current stroke
	         */
	        /** @internal */
	        _this._previewStroke = new Map();
	        /**
	         * Map of ongoing strokes to their identifiers
	         * key -> identifier, value -> strokeIndex
	         * @internal
	         */
	        _this._strokeIdentifierMap = new Map();
	        _this._resetBoard = boardManip._resetBoard;
	        _this._addDOMEvents = _DOMEvents._addDOMEvents;
	        _this._removeDOMEvents = _DOMEvents._removeDOMEvents;
	        _this._getMouseCoords = _coords._getMouseCoords;
	        _this._getTouchCoords = _coords._getTouchCoords;
	        _this.changeToolSetting = boardManip.changeToolSetting;
	        _this.changeTool = boardManip.changeTool;
	        _this.clearPreview = boardManip.clearPreview;
	        _this.clear = boardManip.clear;
	        // --- DOM Event Listeners ---
	        // --- Mouse Events ---
	        _this._mouseDownEventListener = function (e) {
	            if (e.button === 0 /* Left Click */) {
	                if (e.ctrlKey) {
	                    _this.svg.addEventListener('mousemove', _this._panEventListener);
	                }
	                else {
	                    _this.svg.addEventListener('mousemove', _this._mouseMoveEventListener);
	                    var coords = _this._getMouseCoords(e);
	                    _this._tools[_this.tool]._startStroke(coords, 'mouse', e.target);
	                    _this._lastCoords.set('mouse', coords);
	                }
	            }
	        };
	        _this._mouseUpEventListener = function (e) {
	            if (e.button === 0 /* Left Click */) {
	                var endCoords = _this._getMouseCoords(e);
	                _this.svg.removeEventListener('mousemove', _this._mouseMoveEventListener);
	                _this.svg.removeEventListener('mousemove', _this._panEventListener);
	                if (_this._lastCoords.has('mouse')) {
	                    _this._tools[_this.tool]._endStroke(endCoords, 'mouse', e.target);
	                    _this._lastCoords.delete('mouse');
	                }
	                _this._display(_this.strokes[_this._strokeIndex]);
	            }
	        };
	        _this._mouseLeaveEventListener = function (e) {
	            _this.svg.removeEventListener('mousemove', _this._mouseMoveEventListener);
	            if (_this._lastCoords.has('mouse')) {
	                _this._tools[_this.tool]._endStroke(_this._getMouseCoords(e), 'mouse', e.target);
	                _this._lastCoords.delete('mouse');
	                _this._display(_this.strokes[_this._strokeIndex]);
	            }
	            _this.clearPreview();
	        };
	        _this._mouseMoveEventListener = function (e) {
	            var coords = _this._getMouseCoords(e);
	            _this._tools[_this.tool]._doStroke(coords, 'mouse', e.target);
	            _this._lastCoords.set('mouse', coords);
	        };
	        _this._previewMouseMoveEventListener = function (e) {
	            var coords = _this._getMouseCoords(e);
	            if (_this._doPreview) {
	                if (!_this._previewStroke.has('mouse'))
	                    _this._previewStroke.set('mouse', []);
	                _this._tools[_this.tool]._toolPreview(coords, 'mouse', e.target);
	                _this._display(_this._previewStroke.get('mouse'));
	            }
	            _this._display(_this.strokes[_this._strokeIndex]);
	        };
	        _this._wheelEventListener = function (e) {
	            e.preventDefault();
	            if (e.ctrlKey) {
	                _this.scale(Math.max(_this.scaleFactor - e.deltaY * 0.001, 1));
	            }
	            else
	                _this._tools[_this.tool]._onScroll(e.deltaY * 0.05, _this._getMouseCoords(e), 'mouse');
	        };
	        _this._panEventListener = function (e) {
	            if (e.ctrlKey) {
	                _this.changeOffsets(_this._offsetX - e.movementX, _this._offsetY - e.movementY);
	            }
	        };
	        // --- Mouse Events ---
	        // --- Keyboard Events ---
	        _this._keyPressEventListener = function (e) {
	            _this._tools[_this.tool]._onKey(e);
	        };
	        // --- /Keyboard Events ---
	        // --- Touch Events ---
	        _this._touchStartEventListener = function (e) {
	            e.preventDefault();
	            for (var i = 0; i < e.touches.length; i++) {
	                var coords = _this._getTouchCoords(e.touches.item(i));
	                var identifier = e.touches.item(i).identifier.toString();
	                _this._tools[_this.tool]._startStroke(coords, identifier, e.target);
	                _this._lastCoords.set(identifier, coords);
	            }
	        };
	        _this._touchEndEventListener = function (e) {
	            for (var i = 0; i < e.changedTouches.length; i++) {
	                var coords = _this._getTouchCoords(e.changedTouches.item(i));
	                var identifier = e.changedTouches.item(i).identifier.toString();
	                _this._tools[_this.tool]._endStroke(coords, identifier, e.target);
	                _this._lastCoords.delete(identifier);
	            }
	            _this.clearPreview();
	        };
	        _this._touchMoveEventListener = function (e) {
	            for (var i = 0; i < e.touches.length; i++) {
	                var coords = _this._getTouchCoords(e.touches.item(i));
	                _this._tools[_this.tool]._doStroke(coords, e.touches.item(i).identifier.toString(), e.target);
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
	                    _this._tools[_this.tool]._toolPreview(coords, identifier, e.target);
	                    _this._display(_this._previewStroke.get(identifier));
	                }
	                _this._display(_this.strokes[_this._strokeIndex]);
	            }
	        };
	        // --- Touch Events ---
	        // --- DOM Event Listeners ---
	        _this.startRender = function startRender() {
	            this._addDOMEvents();
	            return this;
	        };
	        _this.stopRender = function stopRender() {
	            this._removeDOMEvents();
	            return this;
	        };
	        _this.settings = __assign(__assign(__assign({}, RealDrawBoardDefaults.RealDrawBoardDefaults), options), { toolSettings: __assign(__assign({}, RealDrawBoardDefaults.RealDrawBoardDefaults.toolSettings), ('toolSettings' in options ? options.toolSettings : {})) });
	        _this.toolSettings = __assign(__assign({}, tools.ToolDefaults), _this.settings.toolSettings);
	        // *****DEFAULTS*****
	        _this._tools = {
	            brush: new tools.BrushTool(_this),
	            eraser: new tools.EraserTool(_this),
	            line: new tools.LineTool(_this),
	            text: new tools.TextTool(_this)
	        };
	        _this.changeTool(_this.settings.tool);
	        return _this;
	    }
	    RealDrawBoard.prototype.reset = function () {
	        this._resetBoard();
	        _super.prototype.reset.call(this);
	        return this;
	    };
	    RealDrawBoard.prototype._beforeExport = function () {
	        console.log('before export');
	        this._tools[this.tool]._onUnload();
	    };
	    return RealDrawBoard;
	}(RealRenderer_1.RealRenderer));
	exports.RealDrawBoard = RealDrawBoard;
	});

	var build = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RealRenderer = exports.RealDrawBoard = void 0;

	Object.defineProperty(exports, "RealDrawBoard", { enumerable: true, get: function () { return RealDrawBoard_1.RealDrawBoard; } });

	Object.defineProperty(exports, "RealRenderer", { enumerable: true, get: function () { return RealRenderer_1.RealRenderer; } });
	});

	var index = /*@__PURE__*/getDefaultExportFromCjs(build);

	return index;

})));
