#!/usr/bin/env node
const path = require('path');
const inquirer = require('inquirer');
var colors = require('colors');
const fs = require('fs');
const SOURCES_DIRECTORY = path.join(__dirname, './template');  //源目录

let TARGET_SRC, pageUrl

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
    return true
};

// 创建
var create = function () {
    return inquirer.prompt([{
        type: 'input',
        name: '请设置文件夹名称',
        placeholder: 'page-name',
        validate(input) {
            if (!!input) {
                pageUrl = input
                TARGET_SRC = path.join(__dirname, '../../src/page/' + pageUrl)
                return prompt();
            }
            console.log('\n', 'Error: 目标名称不能为空'.error)
        }
    }]);
}

// 提示
var prompt = function () {
    if (fs.existsSync(TARGET_SRC)) {
        console.log('\n', 'Error: 目标已存在,请更换名称'.error)
    } else {
        return checkDirectory(SOURCES_DIRECTORY, TARGET_SRC, copy);
    }
}

// doing
create()

