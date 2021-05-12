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

	var _node = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Node = void 0;
	var Node = /** @class */ (function () {
	    function Node(section, elementName, strokeNodeType) {
	        var path = document.createElementNS('http://www.w3.org/2000/svg', this.elementName);
	        this.elementName = elementName;
	        this.strokeNodeType = strokeNodeType;
	        this.node = path;
	        this.section = section;
	    }
	    Node.prototype.export = function () {
	        return {
	            type: this.strokeNodeType,
	            data: this.node.outerHTML.toString(),
	            section: this.section
	        };
	    };
	    Node.prototype.import = function (data) {
	        var wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	        wrapper.innerHTML = data;
	        this.node = wrapper.firstChild;
	        wrapper.removeChild(this.node);
	        wrapper.remove();
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
	    return Path;
	}(_node.Node));
	exports.Path = Path;
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
	    return Polygon;
	}(_node.Node));
	exports.Polygon = Polygon;
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

	var RealRendererTypes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    return Circle;
	}(_node.Node));
	exports.Circle = Circle;
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Text = void 0;

	var Text = /** @class */ (function (_super) {
	    __extends(Text, _super);
	    function Text(position, initialText, section) {
	        var _this = _super.call(this, section, 'text', 'text') || this;
	        var path = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	        path.textContent = initialText;
	        path.setAttribute('x', position[0].toString());
	        path.setAttribute('y', position[1].toString());
	        _this.node = path;
	        _this.section = section;
	        return _this;
	    }
	    Text.prototype.updateText = function (newText) {
	        this.node.textContent = newText;
	    };
	    Text.prototype.setStyle = function (proprty, value) {
	        this.node.style[proprty] = value;
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.GroupNode = void 0;

	var GroupNode = /** @class */ (function (_super) {
	    __extends(GroupNode, _super);
	    function GroupNode(section, initialInnerNodes) {
	        var _this = _super.call(this, section, 'group', 'group') || this;
	        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	        initialInnerNodes.forEach(function (node) { return g.appendChild(node.node); });
	        _this.innerNodes = initialInnerNodes;
	        _this.node = g;
	        _this.section = section;
	        return _this;
	    }
	    return GroupNode;
	}(_node.Node));
	exports.GroupNode = GroupNode;
	});

	var importExport = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.importData = exports.exportData = void 0;





	/**
	 * Export the data of the graph in a certain format that can be used to load the data later. Load using .importData().
	 * @returns Data of the graph in a storable and loadable format.
	 */
	function exportData() {
	    var strokeExport = [];
	    this.strokes.forEach(function (stroke) {
	        strokeExport.push(stroke.map(function (node) { return node.export(); }));
	    });
	    return {
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
	    this.strokes.forEach(function (stroke) {
	        stroke.forEach(function (node) { return node.delete(); });
	    });
	    this.svg.setAttribute('viewBox', "0 0 " + this.dimensions[0] + " " + this.dimensions[1]);
	    if (data.bgType)
	        this.bgType = data.bgType;
	    this.strokes = [];
	    data.exportData.forEach(function (strokeExport) {
	        _this.strokes.push(strokeExport.map(function (strokeNodeData) {
	            switch (strokeNodeData.type) {
	                case 'circle':
	                    var circ = new _circle.Circle([0, 0], 0, strokeNodeData.section ? strokeNodeData.section : 'strokes');
	                    circ.import(strokeNodeData.data);
	                    return circ;
	                case 'path':
	                    var path = new _path.Path('', strokeNodeData.section ? strokeNodeData.section : 'strokes');
	                    path.import(strokeNodeData.data);
	                    return path;
	                case 'text':
	                    var text = new _text.Text([0, 0], '', strokeNodeData.section ? strokeNodeData.section : 'strokes');
	                    text.import(strokeNodeData.data);
	                    return text;
	                case 'group':
	                    var group = new _group.GroupNode(strokeNodeData.section ? strokeNodeData.section : 'strokes', []);
	                    group.import(strokeNodeData.data);
	                    return group;
	                case 'polygon':
	                    var polygon = new _polygon.Polygon([], strokeNodeData.section ? strokeNodeData.section : 'strokes');
	                    polygon.import(strokeNodeData.data);
	                    return polygon;
	            }
	        }));
	    });
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



	exports.RealRendererTypes = RealRendererTypes;

	__exportStar(RealRendererDefaults, exports);







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
	        _this._display = draw_1._display;
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

	var getRadiusFromThickness = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getRadiusFromThickness = void 0;
	exports.getRadiusFromThickness = function (thickness) { return thickness / 2 - 0.5; };
	});

	var brush = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._onScroll = exports._toolPreview = exports._doStroke = exports._endStroke = exports._startStroke = exports.BrushDefaults = exports.name = void 0;





	exports.name = 'brush';
	exports.BrushDefaults = {
	    brushColor: [1, 1, 1],
	    brushSize: 1
	};
	function _startStroke(coords, identifier) {
	    this._doPreview = false;
	    var brushPath = new _path.Path('', 'strokes');
	    brushPath.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.brushColor));
	    brushPath.setStrokeWidth(this.toolSettings.brushSize);
	    this._addStroke([brushPath]);
	    this._strokeIdentifierMap.set(identifier, this._strokeIndex);
	    this.strokes[this._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.brushSize), this.toolSettings.brushColor, 'strokes'));
	}
	exports._startStroke = _startStroke;
	function _endStroke(endCoords, identifier) {
	    this.strokes[this._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(endCoords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.brushSize), this.toolSettings.brushColor, 'strokes'));
	    this._strokeIdentifierMap.delete(identifier);
	    this._doPreview = true;
	}
	exports._endStroke = _endStroke;
	function _doStroke(coords, identifier) {
	    this.strokes[this._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.brushSize), this.toolSettings.brushColor, 'strokes'));
	    this.strokes[this._strokeIdentifierMap.get(identifier)][0].appendPath(line.getLinePathCommand(this._lastCoords.get(identifier), coords));
	}
	exports._doStroke = _doStroke;
	function _toolPreview(coords, identifier) {
	    if (!this._previewStroke.has(identifier))
	        this._previewStroke.set(identifier, []);
	    if (this._previewStroke.get(identifier).length == 0) {
	        var circleNode = circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.brushSize), this.toolSettings.brushColor, 'overlay');
	        circleNode.setFill(getRGBColorString_1.getRGBColorString(this.toolSettings.brushColor));
	        circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.brushColor));
	        this._previewStroke.get(identifier).push(circleNode);
	    }
	    else {
	        var circleNode = this._previewStroke.get(identifier)[0];
	        circleNode.updateCenter(coords);
	        circleNode.updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.brushSize));
	        circleNode.setFill(getRGBColorString_1.getRGBColorString(this.toolSettings.brushColor));
	        circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.brushColor));
	    }
	}
	exports._toolPreview = _toolPreview;
	function _onScroll(scrollDelta, coords, identifier) {
	    this.changeToolSetting('brushSize', Math.max(1, this.toolSettings.brushSize - scrollDelta));
	    if (this._previewStroke.get(identifier) && this._previewStroke.get(identifier).length !== 0) {
	        this._previewStroke.get(identifier)[0].updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.brushSize));
	        this._display(this._previewStroke.get(identifier));
	    }
	}
	exports._onScroll = _onScroll;
	});

	var eraser = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._onScroll = exports._toolPreview = exports._doStroke = exports._endStroke = exports._startStroke = exports.EraserDefaults = exports.name = void 0;





	exports.name = 'eraser';
	exports.EraserDefaults = {
	    eraserSize: 2
	};
	function _startStroke(coords, identifier) {
	    var brushPath = new _path.Path('', 'strokes');
	    brushPath.setStroke(getRGBColorString_1.getRGBColorString(this.bgColor));
	    brushPath.setStrokeWidth(this.toolSettings.eraserSize);
	    this._addStroke([brushPath]);
	    this._strokeIdentifierMap.set(identifier, this._strokeIndex);
	    this.strokes[this._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.eraserSize), this.bgColor, 'strokes'));
	}
	exports._startStroke = _startStroke;
	function _endStroke(endCoords, identifier) {
	    this.strokes[this._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(endCoords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.eraserSize), this.bgColor, 'strokes'));
	    this._doPreview = true;
	}
	exports._endStroke = _endStroke;
	function _doStroke(coords, identifier) {
	    this.strokes[this._strokeIdentifierMap.get(identifier)].push(circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.eraserSize), this.bgColor, 'strokes'));
	    this.strokes[this._strokeIdentifierMap.get(identifier)][0].appendPath(line.getLinePathCommand(this._lastCoords.get(identifier), coords));
	}
	exports._doStroke = _doStroke;
	function _toolPreview(coords, identifier) {
	    if (this._previewStroke.get(identifier).length == 0) {
	        var circleNode = circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.eraserSize), this.bgColor, 'overlay');
	        circleNode.setFill(getRGBColorString_1.getRGBColorString(this.bgColor));
	        circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.bgColor));
	        circleNode.setDashed(getRGBColorString_1.getRGBColorString(this.bgColor.map(function (c) { return 1 - c; })));
	        this._previewStroke.get(identifier).push(circleNode);
	    }
	    else {
	        var circleNode = this._previewStroke.get(identifier)[0];
	        circleNode.updateCenter(coords);
	        circleNode.updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.eraserSize));
	    }
	}
	exports._toolPreview = _toolPreview;
	function _onScroll(scrollDelta, coords, identifier) {
	    this.changeToolSetting('eraserSize', Math.max(1, this.toolSettings.eraserSize - scrollDelta));
	    if (this._previewStroke.get(identifier) && this._previewStroke.get(identifier).length !== 0) {
	        this._previewStroke.get(identifier)[0].updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.eraserSize));
	        this._display(this._previewStroke.get(identifier));
	    }
	}
	exports._onScroll = _onScroll;
	});

	var line$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._onScroll = exports._toolPreview = exports._doStroke = exports._endStroke = exports._startStroke = exports.LineDefaults = exports.name = void 0;






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
	    if (this._previewStroke.has(identifier)) {
	        this._previewStroke.get(identifier).forEach(function (strokeNode) {
	            strokeNode.delete();
	        });
	    }
	    var linePath = new _path.Path('', 'strokes');
	    linePath.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.lineColor));
	    linePath.setStrokeWidth(this.toolSettings.lineThickness);
	    var startCircle = circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.lineThickness), this.toolSettings.lineColor, 'strokes');
	    var endCircle = circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.lineThickness), this.toolSettings.lineColor, 'strokes');
	    this._addStroke([new _group.GroupNode('strokes', [linePath, startCircle, endCircle])]);
	    this._strokeIdentifierMap.set(identifier, this._strokeIndex);
	    _startCoords.set(identifier, coords);
	}
	exports._startStroke = _startStroke;
	function _endStroke(endCoords, identifier) {
	    var lineNode = this.strokes[this._strokeIdentifierMap.get(identifier)][0];
	    lineNode.innerNodes[0].updatePath(line.getLinePathCommand(_startCoords.get(identifier), endCoords));
	    lineNode.innerNodes[2].updateCenter(endCoords);
	    _startCoords.delete(identifier);
	    this._doPreview = true;
	}
	exports._endStroke = _endStroke;
	function _doStroke(coords, identifier) {
	    var lineNode = this.strokes[this._strokeIndex][0];
	    lineNode.innerNodes[0].updatePath(line.getLinePathCommand(_startCoords.get(identifier), coords));
	    lineNode.innerNodes[2].updateCenter(coords);
	}
	exports._doStroke = _doStroke;
	function _toolPreview(coords, identifier) {
	    if (this._previewStroke.get(identifier).length == 0) {
	        var circleNode = circle.getCircleNode(coords, getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.lineThickness), this.toolSettings.lineColor, 'overlay');
	        circleNode.setFill(getRGBColorString_1.getRGBColorString(this.toolSettings.lineColor));
	        circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.lineColor));
	        this._previewStroke.get(identifier).push(circleNode);
	    }
	    else {
	        var circleNode = this._previewStroke.get(identifier)[0];
	        circleNode.updateCenter(coords);
	        circleNode.updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.lineThickness));
	        circleNode.setFill(getRGBColorString_1.getRGBColorString(this.toolSettings.lineColor));
	        circleNode.setStroke(getRGBColorString_1.getRGBColorString(this.toolSettings.lineColor));
	    }
	}
	exports._toolPreview = _toolPreview;
	function _onScroll(scrollDelta, coords, identifier) {
	    this.changeToolSetting('lineThickness', Math.max(1, this.toolSettings.lineThickness - scrollDelta));
	    if (this._previewStroke.get(identifier) && this._previewStroke.get(identifier).length !== 0) {
	        this._previewStroke.get(identifier)[0].updateRadius(getRadiusFromThickness.getRadiusFromThickness(this.toolSettings.lineThickness));
	        this._display(this._previewStroke.get(identifier));
	    }
	}
	exports._onScroll = _onScroll;
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

	var RealDrawBoardTypes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    var oldTool = this.tool;
	    this.tool = newTool;
	    this._startStroke = tools.tools[this.tool]._startStroke;
	    this._doStroke = tools.tools[this.tool]._doStroke;
	    this._endStroke = tools.tools[this.tool]._endStroke;
	    this._toolPreview = tools.tools[this.tool]._toolPreview;
	    this._onScroll = tools.tools[this.tool]._onScroll;
	    this._previewStroke.forEach(function (stroke) {
	        stroke.forEach(function (node) {
	            node.delete();
	        });
	    });
	    this._previewStroke.clear();
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

	var _DOMEvents = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._removeDOMEvents = exports._addDOMEvents = void 0;
	function _addDOMEvents() {
	    this.svg.addEventListener('mousedown', this._mouseDownEventListener);
	    this.svg.addEventListener('mouseup', this._mouseUpEventListener);
	    this.svg.addEventListener('mouseleave', this._mouseLeaveEventListener);
	    this.svg.addEventListener('mousemove', this._previewMouseMoveEventListener);
	    this.svg.addEventListener('wheel', this._wheelEventListener);
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
	        _this._startStroke = tools.tools[RealDrawBoardDefaults.RealDrawBoardDefaults.tool]._startStroke;
	        _this._endStroke = tools.tools[RealDrawBoardDefaults.RealDrawBoardDefaults.tool]._endStroke;
	        _this._doStroke = tools.tools[RealDrawBoardDefaults.RealDrawBoardDefaults.tool]._doStroke;
	        _this._toolPreview = tools.tools[RealDrawBoardDefaults.RealDrawBoardDefaults.tool]._toolPreview;
	        _this._onScroll = tools.tools[RealDrawBoardDefaults.RealDrawBoardDefaults.tool]._onScroll;
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
	                    _this._startStroke(coords, 'mouse');
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
	            _this.clearPreview();
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
	        _this._wheelEventListener = function (e) {
	            e.preventDefault();
	            if (e.ctrlKey) {
	                _this.scale(Math.max(_this.scaleFactor - e.deltaY * 0.001, 1));
	            }
	            else
	                _this._onScroll(e.deltaY * 0.05, _this._getMouseCoords(e), 'mouse');
	        };
	        _this._panEventListener = function (e) {
	            if (e.ctrlKey) {
	                _this.changeOffsets(_this._offsetX - e.movementX, _this._offsetY - e.movementY);
	            }
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
	            _this.clearPreview();
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
	        _this.changeTool(_this.settings.tool);
	        return _this;
	        // *****DEFAULTS*****
	    }
	    RealDrawBoard.prototype.reset = function () {
	        this._resetBoard();
	        _super.prototype.reset.call(this);
	        return this;
	    };
	    return RealDrawBoard;
	}(RealRenderer_1.RealRenderer));
	exports.RealDrawBoard = RealDrawBoard;
	});

	var renderPreview_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.renderPreview = void 0;
	/**
	 * Renders a preview of the given data to a given separate SVG element.
	 * @param data Data to be rendered (exported by using .export()).
	 * @param renderTo SVG Element to render to.
	 */
	function renderPreview(data, renderTo) {
	    var exportData = data.exportData, dimensions = data.dimensions;
	    renderTo.setAttribute('viewBox', "0 0 " + dimensions[0] + " " + dimensions[1]);
	    exportData.forEach(function (strokeExport) {
	        strokeExport.forEach(function (strokeNodeData) {
	            renderTo.innerHTML += strokeNodeData.data;
	        });
	    });
	}
	exports.renderPreview = renderPreview;
	});

	var build = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.renderPreview = exports.RealRenderer = exports.RealDrawBoard = void 0;

	Object.defineProperty(exports, "RealDrawBoard", { enumerable: true, get: function () { return RealDrawBoard_1.RealDrawBoard; } });

	Object.defineProperty(exports, "RealRenderer", { enumerable: true, get: function () { return RealRenderer_1.RealRenderer; } });

	Object.defineProperty(exports, "renderPreview", { enumerable: true, get: function () { return renderPreview_1.renderPreview; } });
	});

	var index = /*@__PURE__*/getDefaultExportFromCjs(build);

	return index;

})));
