[![NPM](https://nodei.co/npm/svg-real-renderer.png)](https://npmjs.org/package/svg-real-renderer)

# SVG Real Renderer
A Real Time 2D Graphical Rendering Engine Made With [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG).

### Table of Contents
- [Usage](#usage)
- [Example](https://harshkhandeparkar.github.io/svg-real-renderer)
- [Real Renderers](#real-renderers)
- [License](LICENSE)

### Usage
RealRenderer can only be used in the browser through a `canvas` element. The library can be directly used in the browser with the included dist files or can be compiled using a packager like webpack or a framework like react.

#### Dist Files
The browserified and minified dist files can be found in the `/dist` directory on github or in the npm package.

#### Browser Usage
Including the dist for SVG Real Renderer in a `script` tag.

```html
<script src="path/to/svg-real-renderer-browser.min.js"> <!-- Real Renderer Dist-->
```
R
RealRenderer can be used under the namespace `SVGRealRenderer` from any javascript file that is loaded after the two dist files.

```js
const renderer = SVGRealRenderer;
const LineGraph = new renderer.LineGraph(options); // For example
```

#### Node Usage
`svg-real-renderer` packages need to be installed via npm or yarn.

```js
const DrawBoard = new require('svg-real-renderer').RealDrawBoard({svg: document.getElementById('svg-id')}) // DrawBoard is an example.
```

NOTE: It works with typescript

### Real Renderers
A *Real Renderer* is a fancy name for a class that is exported by this package. Each of these classes can be used to render, manipulate and display specific things on a graph for specific purposes.

#### List of Real Renderers
- [`RealRenderer`](#realrenderer)
- [`RealDrawBoard`](#realdrawboard)

#### `RealRenderer`
This is the base class. It does not have any specific use. It can only display a blank graph with coordinate axes on it. See [example](https://harshkhandeparkar.github.io/svg-real-renderer).

```js
const renderer = SVGRealRenderer.RealRenderer(options); // options is an object that is explained ahead
```

##### Options
The constructor of the class takes an options javascript object as the only argument. The object can have the following properties.

- `svg`([*SVGSVGElement*](https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement)) (Required, No default):  The `svg` element on which the graph should be rendered.
- `dimensions`(*Array*) (Default: `[1000, 1000]`): An array which contains the x and y dimensions(in pixels) of graph.
- `xScaleFactor`(*Number) (Default: `10`): This is a number that determines the scaling of the x-axis. A greater value zooms into the x-axis. Greater values provide more precision and lower values increase the limits of the x-axis.

Technically, each coordinate on the x-axis is divided by this number.

- `yScaleFactor`(*Number*) (Default: `1`): This is a number that determines the scaling of the y-axis. A greater value zooms into the y-axis. Greater values provide more precision and lower values increase the limits of the y-axis.

Technically, each coordinate on the y-axis is divided by this number.

- `bgColor`(*Array*) (Default: `[0, 0, 0]`): This is an array with three numbers between `0` and `1`. The numbers represent the red, green and blue color values of the background color of the graph.

- `drawAxes`(*boolean*) (Default: `true`): Whether to draw the x and y axes or not.

- `axesColor`(*Array*) (Default: `[1, 1, 1]`): Same as `bgColor` but defines the color of the x and y axes.

- `xOffset`(*Number*) (Default: `50`): Percentage offset on the graph for the x-axis.

- `xOffset`(*Number*) (Default: `50`): Percentage offset on the graph for the y-axis.

- `drawsPerFrame`(*Integer*) (Default: `1`): A draw is an iteration over the graph. The graph is manipulated once per draw and the end result is displayed at the end of every frame. This integer number determines the number of draws that should be done per frame before displaying.

- `timeStep`(*Number*) (Default: `1/60`): `RealRenderer` internally stores a `time` variable which is used to keep track of constantly changing elements on the graph. The time value is incremented by the `timeStep` value once per draw. Lower values will make things happen slower and vice versa.

This time value is not used by the `RealRenderer` class but is used by its child classes.

- `initTime`(*Number*) (Default: `0`): The initial value of the internal `time` variable.


##### Methods
The class exposes the followind methods to the user. These methods are also chainable which means that you can run another method on the value returned by the previous method call.

e.g.: `RealRenderer.draw().reset().startRender()`

- `draw(numDraws)`: Draws the graph `numDraws` number of times and displays the graph at the end of the last draw.

- `startRender()`: Starts the continous rendering of the graph. The graph will be rendered at 30 or 60 fps depending on the hardware and browser used.

- `stopRender()`: Stops the rendering.

- `toggleRender()`: Toggles the rendering.

- `exportData()`: Returns the data of the current whiteboard in an importable format. Saves undos and redos as well.

- `importData(data)`: Import data exported by `exportData()`.

- `undo(numUndos = 1)`: Undoes the specified number of brush strokes. (Defualt: undoes one stroke)

- `redo(numUndos = 1)`: Redoes the specified number of brush strokes. (Defualt: redoes one stroke)

- `resetTime()`: Resets the internal time value to `0`.

- `reset()`: Resets the pixels on the graph to a blank graph with the coordinate axes.

#### `RealDrawBoard`
This Real Renderer extends the `RealRenderer` class and can be used as a general purpose drawing board!
Click and drag on the canvas to draw, change modes to erase. The brush color and eraser/brush sized can be changed.
See [example](https://harshkhandeparkar.github.io/svg-real-renderer).

##### Properties (Read-Only)
- `tool` (`'brush'` | `'eraser'` | `'line'`): The current tool used on the board. This tool can be set in the options or using the `changeTool` method.
  - `brush`: Normal brush which uses the `brushColor` property as the color.
  - `eraser`: Erases.
  - `line`: Draws a line with `brushColor` property as the color.
- `toolSettings` (`Object`): Settings for all the different tools. It contains the following properties.
  - `brushSize` (`number`): Size of the `brush` tool.
  - `brushColor` (`[number, number, number]`): Color of the `brush` tool.
  - `eraserSize` (`number`): Size of the `eraser` tool.
  - `lineThickness` (`number`): Thickness of the `line` tool.
  - `lineColor` (`[number, number, number]`): Color of the `line` tool.

##### Options
Since this is a child class of `RealRenderer`, all the options of `RealRender` are applicable here as well.
Apart from those, the following are additional options that can be passed on to the constructor.
- `toolSettings` (`Object`): Settings for all the different tools. Same as described in the **properties** section above.

- `tool` (*'brush' | 'eraser' | 'line'*) (Default: `'brush'`): Determines which tool to use.

##### Methods
Since this is a child class of `RealRenderer`, all the methods of `RealRender` are available here as well.
Apart from these methods, the following new methods are also available and are chainable too.

- `startRender()` and `stopRender()`: Slightly different compared to `RealRenderer` but they don't draw continously.
- `changeTool(newTool)`: Change the tool.
- `changeToolSetting(settingName, value)`: Changes a specific setting in the `toolSettings` *property*. See **properties** section above.
- `clear()`: Clears the board.
- `reset()`: Clears the whole board and resets all options to original values.

****

### Thank You!

> Open Source by Harsh Khandeparkar
