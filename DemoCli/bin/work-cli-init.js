#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const ora = require('ora');
const initSvn = require('./work-cli-svn');
const initGit = require('./work-cli-git');
const deleteFolder = require('./common/deleteFile');

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

console.log(chalk.white('\n Start generating... \n'));
// 加载图标
const spinner = ora('Downloading...');
spinner.start();

const callBack = (err, fileName) => {
  spinner.succeed();
  if (err) {
    console.log(chalk.red('\n Copy project template exception'));
    console.log(`\n ${err}`);
  } else {
    try {
      deleteFolder('./' + projectName, fileName);
    } catch (error) {
      console.log(chalk.yellow('\n Delete ' + fileName + ' folder exception, but does not affect operation'));
    }
    console.log(chalk.green('\n Generation completed!'));
    console.log('\n To get started');
    console.log(`\n    cd ${projectName} \n`);
  }
};

if (warehouseType === 'svn') {
  initSvn(projectName).then((err) => {
    callBack(err, '.svn');
  });
} else {
  const repository = 'direct:https://github.com/huhaiqing106/react-temlpate.git';
  initGit(repository, projectName).then((err) => {
    callBack(err, '.git');
  });
}
