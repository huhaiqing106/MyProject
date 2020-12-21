const program = require('commander');
const chalk = require('chalk');
const initGit = require('./work-cli-git');
const ora = require('ora');
const deleteFolder = require('./common/deleteFile');

program.usage('<business-pageName>');
program.parse(program.args);

if (program.args.length < 1) {
  return program.help();
}

const pageName = program.args[0];

if (!pageName) {
  console.log(chalk.red('\n PageName should not be empty \n'));
  return;
}

console.log(chalk.white('\n Start generating... \n'));
// 加载图标
const spinner = ora('Downloading...');
spinner.start();

const repository = 'direct:https://github.com/huhaiqing106/business-page-template.git';
initGit(repository, pageName).then((err) => {
  spinner.succeed();
  if (err) {
    console.log(chalk.red('\n Copy business page template exception'));
    console.log(`\n ${err}`);
  } else {
    try {
      deleteFolder('./' + pageName, '.git');
    } catch (error) {
      console.log(chalk.yellow('\n Delete ' + fileName + ' folder exception, but does not affect operation'));
    }
    console.log(chalk.green('\n Generation completed!'));
  }
});
