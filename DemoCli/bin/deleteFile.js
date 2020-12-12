const fs = require('fs');

/**
 * 寻找.svn文件，删除svn关联
 *
 * @param {*} pathStr
 */
function deleteFolder(pathStr, fileName) {
  let files = [];
  if (fs.existsSync(pathStr)) {
    files = fs.readdirSync(pathStr, 'utf8');
    files.forEach(function (file, index) {
      let curPath = pathStr + '/' + file;
      // 匹配特定SVN文件夹，然后移除
      if (new RegExp(`^${fileName}$`).test(file)) {
        deleteFile(curPath);
      }
    });
  }
}

/**
 * 删除svn文件夹与文件
 *
 * @param {*} pathStr
 */
function deleteFile(pathStr) {
  let files = [];
  if (fs.existsSync(pathStr)) {
    files = fs.readdirSync(pathStr, 'utf8');
    files.forEach(function (file, index) {
      let curPath = pathStr + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        deleteFile(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(pathStr);
  }
}

module.exports = deleteFolder;
