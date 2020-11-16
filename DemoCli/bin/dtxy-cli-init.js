#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const ora = require("ora");
const svnUltiMate = require("node-svn-ultimate");
const fs = require("fs");

program.usage("<project-name>");
program.parse(process.argv);

// 当没有输入参数的时候提示
if (program.args.length < 1) return program.help();

const projectName = program.args[0];
// 校验下项目名称
if (!projectName) {
  console.log(chalk.red("\n Project should not be empty! \n"));
  return;
}

console.log(chalk.white("\n Start generating... \n"));
// 加载图标
const spinner = ora("Downloading...");
spinner.start();

const svnUrl = "http://192.168.20.8/svn/TS_Product/JavaPlatForm/jreap/08_工程模板及示例/02branches/0.2.S1/jreap-pro/";

svnUltiMate.commands.checkout(svnUrl, projectName, { username: "huhq", password: "Huhq#909152" }, function (err) {
  spinner.succeed();
  if (err) {
    console.log(chalk.red("\n Copy project template exception"));
    console.log(`\n ${err}`);
  } else {
    try {
      deleteSvnFolder("./" + projectName);
    } catch (error) {
      console.log(chalk.yellow("\n Delete svn folder exception, but does not affect operation"));
    }
    console.log(chalk.green("\n Generation completed!"));
    console.log("\n To get started");
    console.log(`\n    cd ${projectName} \n`);
  }
});

/**
 * 寻找.svn文件，删除svn关联
 *
 * @param {*} pathStr
 */
function deleteSvnFolder(pathStr) {
  let files = [];
  if (fs.existsSync(pathStr)) {
    files = fs.readdirSync(pathStr, "utf8");
    files.forEach(function (file, index) {
      let curPath = pathStr + "/" + file;
      // 匹配特定SVN文件夹，然后移除
      if (/^.svn$/.test(file)) {
        deleteSvnFile(curPath);
      }
    });
  }
}

/**
 * 删除svn文件夹与文件
 *
 * @param {*} pathStr
 */
function deleteSvnFile(pathStr) {
  let files = [];
  if (fs.existsSync(pathStr)) {
    files = fs.readdirSync(pathStr, "utf8");
    files.forEach(function (file, index) {
      let curPath = pathStr + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        deleteSvnFile(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(pathStr);
  }
}
