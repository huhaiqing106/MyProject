/**
* @file 正则验证
* @author lzx
*/

export default {
    // 邮箱
    email: /^([a-zA-Z0-9_*-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
    // 手机
    mobile: /^1[3|4|5|7|8][0-9]{9}$/,
    // 整数或浮点数
    fixedAndInt: /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g,
    // 正浮点数
    fixed: /^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$/g
};
