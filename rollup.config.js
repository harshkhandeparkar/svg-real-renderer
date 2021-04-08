const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

const exportName = 'SVGRealRenderer';
const distName = 'svg-real-renderer';

const input = 'build/index.js';

const output = {
  name: exportName,
  format: 'umd'
}

const plugins = [
  nodeResolve(),
  commonjs()
]

module.exports = [
  // browser-friendly UMD build
  {
    input,
    output: {
      ...output,
      file: `dist/${distName}-browser.js`
    },
    plugins
  },

  // Minified Build
  {
    input,
    output: {
      ...output,
      file: `dist/${distName}-browser.min.js`
    },
    plugins: [
     ...plugins,
      terser()
    ]
  }
]
