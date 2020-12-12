#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const initSvn = require('./work-cli-svn');

program.usage('<project-name> <git or svn>');
program.parse(process.argv);

// 当没有输入参数的时候提示
if (program.args.length < 1) return program.help();

const projectName = program.args[0];
// 校验下项目名称
if (!projectName) {
  console.log(chalk.red('\n Project should not be empty! \n'));
  return;
}

const warehouseType = program.args[1];
// 校验仓库类型
if (!warehouseType) {
  console.log(chalk.red('\n Warehouse should not be empty! \n'));
  return;
}

if (warehouseType === 'svn') {
  initSvn();
}
