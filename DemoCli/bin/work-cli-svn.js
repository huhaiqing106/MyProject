const ora = require('ora');
const svnUltiMate = require('node-svn-ultimate');
const deleteFolder = require('./deleteFile');
const chalk = require('chalk');
const program = require('commander');

module.exports = () => {
  const projectName = program.args[0];

  console.log(chalk.white('\n Start generating... \n'));
  // 加载图标
  const spinner = ora('Downloading...');
  spinner.start();

  const svnUrl = 'http://192.168.20.8/svn/TS_Product/JavaPlatForm/jreap/08_工程模板及示例/02branches/0.2.S1/jreap-pro/';

  svnUltiMate.commands.checkout(svnUrl, projectName, { username: 'huhq', password: 'Huhq#909152' }, function (err) {
    spinner.succeed();
    if (err) {
      console.log(chalk.red('\n Copy project template exception'));
      console.log(`\n ${err}`);
    } else {
      try {
        deleteFolder('./' + projectName, '.svn');
      } catch (error) {
        console.log(chalk.yellow('\n Delete svn folder exception, but does not affect operation'));
      }
      console.log(chalk.green('\n Generation completed!'));
      console.log('\n To get started');
      console.log(`\n    cd ${projectName} \n`);
    }
  });
};
