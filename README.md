[![NPM](https://nodei.co/npm/svg-real-renderer.png)](https://npmjs.org/package/svg-real-renderer)

# SVG Real Renderer
A Real Time 2D Graphical Rendering Engine Made With [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG).

### Table of Contents
- [Usage](#usage)
- [Example](https://harshkhandeparkar.github.io/svg-real-renderer)
- [API](#api)
- [Real Renderers](#real-renderers)
- [License](LICENSE)

### Usage
RealRenderer can only be used in the browser through a `svg` element. The library can be directly used in the browser with the included dist files or can be compiled using a packager like webpack or a framework like react.

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

### API
The library exports some util functions(listed below) as well as some [Real Renderers](#real-renderers). In the browser, the library exports these under the global namespace variable `SVGRealRenderer`.

Read the API [docs](docs/docs.md)
### Thank You!

> Open Source by Harsh Khandeparkar
