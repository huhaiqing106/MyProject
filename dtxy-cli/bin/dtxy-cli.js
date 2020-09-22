#! /usr/bin/env node

const program = require("commander");

// 定义当前版本
// 定义使用方法
// 定义四个指令
program
  .version(require("../package.json").version)
  .usage("<command> [options]")
  .command("add", "add a new template")
  .command("init", "generate a new project from a template");

// 解析命令行参数
program.parse(process.argv);
