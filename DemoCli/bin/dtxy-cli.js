#! /usr/bin/env node

const program = require("commander");

// 定义当前版本
// 定义使用方法
// 定义四个指令
program
  .version(require("../package.json").version)
  .usage("<command> [options]")
  // 后期扩展支持根据配置的地址初始化模板
  // .command("init-config", "generate a new project from a config template")
  .command("init", "generate a new project from a template");

// 解析命令行参数
program.parse(process.argv);
