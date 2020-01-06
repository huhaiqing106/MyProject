const fs = require("fs");
const path = require("path");
const babylon = require("babylon");
const traverse = require("babel-traverse").default;
const { transformFromAst } = require("babel-core");

function readCode(filePath) {
  // 读取文件内容
  const content = fs.readFileSync(filePath, "utf-8");
  // 生成AST
  const ast = babylon.parse(content, {
    sourceType: "module"
  });
  // 寻找当前文件的依赖关系
  const dependencies = [];
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value);
    }
  });
  // 通过 AST 将代码转换为 ES5
  const { code } = transformFromAst(ast, null, {
    presets: ["env"]
  });

  return {
    filePath,
    dependencies,
    code
  };
}

function getDependencies(entry) {
  // 读取入口文件
  const entryObject = readCode(entry);
  const dependencies = [entryObject];
  // 遍历所有文件依赖关系
  for (const asset of dependencies) {
    // 获取文件目录
    const dirname = path.dirname(asset.filePath);

    asset.dependencies.forEach(relativePath => {
      // 获得绝对路径
      const abslutePath = path.join(dirname, relativePath);
      const child = readCode(abslutePath);
      child.relativePath = relativePath;
      dependencies.push(child);
    });
  }
  return dependencies;
}

function bundle(dependencies, entry) {
  let modules = "";
  // 构建函数参数，生成的结构为
  // { './entry.js': function(module, exports, require) { 代码 } }
  dependencies.forEach(dep => {
    const filePath = dep.relativePath || entry;
    modules += `'${filePath}':(
      function (module, exports, require) { ${dep.code} }
    ),`;
  });
  // 构建 require 函数，目的是为了获取模块暴露出来的内容
  const result = `
    (function(modules) {
      function require(id) {
        const module = { exports: {} }
        modules[id](module, module.exports, require)
        return module.exports;
      }
      require('${entry}')
    })(${modules})
  `;
  // 当生成的内容写入到文件中
  fs.writeFileSync("./demo/WebpackDemo/bundle.js", result);
}

bundle(
  getDependencies("./demo/WebpackDemo/demo1.js"),
  "./demo/WebpackDemo/demo1.js"
);
