const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

const exportName = 'SVGRealRenderer';
const distName = 'svg-real-renderer'

module.exports = [
  // browser-friendly UMD build
	{
		input: 'build/index.js',
		output: {
			name: exportName,
			file: `dist/${distName}-browser.js`,
			format: 'umd'
		},
		plugins: [
			nodeResolve(),
			commonjs()
		]
	},
	// Minified Build
	{
		input: 'build/index.js',
		output: {
			name: exportName,
			file: `dist/${distName}-browser.min.js`,
			format: 'umd'
		},
		plugins: [
			nodeResolve(),
			commonjs(),
			terser()
		]
  }
]
