# 脚手架

## 构建项目

### step 1

安装SVN命令行工具，附下载地址 http://www.visualsvn.com/downloads/

下载Apache Subversion command line tools，这是一个可以在cmd下使用的命令行工具，解压后把里面bin目录这个路径添加到环境变量的path，这样在cmd下就可以使用了，和Linux下使用svn的习惯一样了。

### step 2

配置环境变量

```
安装目录\Apache-Subversion\bin\
```

附相关教程

https://www.jianshu.com/p/725e49003e44

### step 3

全局安装脚手架

```bash
npm i xxx-cli -g
```

### step 4

执行初始化项目命令

第一个参数是构建的项目名称

第二个参数是构建项目模板的仓库类型，`GIT`或者`SVN`

```bash
xxx init <project-name> <git or svn>
```

## 构建业务界面

按照构建项目安装相关依赖，执行命令

```bash
xxx create <business-pageName>
```

