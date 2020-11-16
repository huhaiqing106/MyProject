import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import ascii from "rollup-plugin-ascii";
import resolve from "@rollup/plugin-node-resolve";
import includePaths from "rollup-plugin-includepaths";
import { terser } from "rollup-plugin-terser";

const externalAry = [
  "antd",
  "antd/es/locale/zh_CN",
  "antd/dist/antd.css",
  "moment",
  "moment/locale/zh-cn",
  "echarts",
  "prop-types",
  "snowflake-id",
  "win-trade-base",
  "@lugia/lugiax",
  "@ant-design/icons",
  "react",
  "immutable",
  "react-transition-group",
  "react-dnd",
  "react-dnd-html5-backend",
  "react-loadable",
  "react-resizable",
  "braft-editor",
  "react-pdf-js"
];

export default {
  input: "yss-biz-base/index.js",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    includePaths({
      include: { "yss-biz": "./yss-biz-base/index.js" },
    }),
    babel({ exclude: "**/node_modules/**", runtimeHelpers: true }),
    commonjs(),
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
      extensions: [".less", ".css"],
    }),
    // terser(),
  ],
  //不能使用正则匹配，有定制化组件也是以echarts命名
  external: externalAry,
};
