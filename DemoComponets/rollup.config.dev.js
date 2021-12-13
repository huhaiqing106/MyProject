import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import ascii from 'rollup-plugin-ascii';
import resolve from '@rollup/plugin-node-resolve';
import includePaths from 'rollup-plugin-includepaths';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';

import * as react from 'react';
import * as reactDom from 'react-dom';
import * as reactIs from 'react-is';

export default {
  input: 'yss-biz-base/main.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    includePaths({
      include: { 'yss-biz': './yss-biz-base/index.js' },
    }),
    babel({ exclude: '**/node_modules/**', runtimeHelpers: true }),
    commonjs({
      namedExports: {
        react: Object.keys(react),
        'react-is': Object.keys(reactIs),
        'react-dom': Object.keys(reactDom),
      },
    }),
    ascii(),
    postcss({
      // Extract CSS to the same location where JS file is generated but with .css extension.
      extract: true,
      // Use named exports alongside default export.
      namedExports: true,
      // Minimize CSS, boolean or options for cssnano.
      minimize: true,
      // Enable sourceMap.
      sourceMap: true,
      // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
      extensions: ['.less', '.css'],
    }),
    terser(),
    serve({
      open: false,
      verbose: true,
      contentBase: ['', 'public'],
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: 'dist' }),
  ],
};
