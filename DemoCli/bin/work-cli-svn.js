const svnUltiMate = require('node-svn-ultimate');

module.exports = (projectName) => {
  const svnUrl = 'xxxx';

  return new Promise((resolve, reject) => {
    svnUltiMate.commands.checkout(svnUrl, projectName, { username: 'xxx', password: 'xxx' }, function (err) {
      resolve(err);
    });
  });
};
