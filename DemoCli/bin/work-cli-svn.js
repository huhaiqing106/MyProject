const svnUltiMate = require('node-svn-ultimate');

module.exports = (projectName) => {
  const svnUrl = 'http://192.168.20.8/svn/TS_Product/JavaPlatForm/jreap/08_工程模板及示例/02branches/0.2.S1/jreap-pro/';

  return new Promise((resolve, reject) => {
    svnUltiMate.commands.checkout(svnUrl, projectName, { username: 'huhq', password: 'Huhq#909152' }, function (err) {
      resolve(err);
    });
  });
};
