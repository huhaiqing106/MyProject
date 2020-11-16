#!/usr/bin/env node
const path = require('path');
const inquirer = require('inquirer');
var colors = require('colors');
const fs = require('fs');

const SOURCES_DIRECTORY = __dirname;  //源目录
const TARGET_SRC = path.join(__dirname, '../../src/yss-biz')

// 控制台颜色
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'red',
    info: 'green',
    data: 'blue',
    help: 'cyan',
    warn: 'yellow',
    debug: 'magenta',
    error: 'red'
});

// 拷贝核心函数
var copy = function (src, dst) {
    let paths = fs.readdirSync(src); //同步读取当前目录
    paths.forEach(function (path) {
        var _src = src + '/' + path;
        var _dst = dst + '/' + path;
        switch(path){
            case 'copy-yss-biz.js':
            case 'create-page.js':
            case 'package.json':
            case 'README.md':
            case 'template':
             return false
            default:
            fs.stat(_src, function (err, stats) {  //stats  该对象 包含文件属性
                if (err) throw err;
                if (stats.isFile()) { //如果是个文件则拷贝 
                    let readable = fs.createReadStream(_src);//创建读取流
                    let writable = fs.createWriteStream(_dst);//创建写入流
                    readable.pipe(writable);
                } else if (stats.isDirectory()) { //是目录则 递归 
                    checkDirectory(_src, _dst, copy);
                }
            });
        }
    });
}

// 遍历拷贝
var checkDirectory = function (src, dst, callback) {
    fs.access(dst, fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdirSync(dst);
            callback(src, dst);
        } else {
            callback(src, dst);
        }
    });
};

// 删除
function deleteFolder(path) {
    let files = [];
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
        let curPath = path + "/" + file;
        if (fs.statSync(curPath).isDirectory()) {
            deleteFolder(curPath);
        } else {
            fs.unlinkSync(curPath);
        }
    });
    fs.rmdirSync(path);
}


// 提示
var prompt = function () {
    if (fs.existsSync(TARGET_SRC)) {
        return inquirer.prompt([{
            type: 'confirm',
            name: '拉出 yss-biz',
            message: '若执行此操作 yss-biz 将被替换!'.yellow,
            default:false
        }]).then(datas => {
            datas['拉出 yss-biz'] && doingCopy()
        });
    }else{
        checkDirectory(SOURCES_DIRECTORY, TARGET_SRC, copy);
    }
}

// 提示后执行删除和拷贝
var doingCopy = function () {
    deleteFolder(TARGET_SRC);
    checkDirectory(SOURCES_DIRECTORY, TARGET_SRC, copy);
}

// doing
prompt()

