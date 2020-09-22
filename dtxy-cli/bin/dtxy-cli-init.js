#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const ora = require("ora");
const download = require("download-git-repo");
// const temObj = require(`${__dirname}/../template`);
const svnUltiMate = require("node-svn-ultimate");

program.usage("<project-name>");
program.parse(process.argv);

// 当没有输入参数的时候提示
if (program.args.length < 1) return program.help();

const proejectName = program.args[0];
// 校验下项目名称
if (!proejectName) {
  console.log(chalk.red("\n Project should not be empty! \n"));
  return;
}

console.log(chalk.white("\n Start generating... \n"));
// 加载图标
const spinner = ora("Downloading...");
spinner.start();

const svnUrl = "http://192.168.20.8/svn/TS_Product/JavaPlatForm/jreap/08_工程模板及示例/02branches/0.2.S1/jreap-pro";

svnUltiMate.commands.checkout(svnUrl, proejectName, function (err) {
  console.log(err);
});

spinner.succeed();
