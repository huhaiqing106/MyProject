const url = '';
let xhr = new XMLHttpRequest();
// 创建HTTP请求
xhr.open('GET', url);
xhr.onreadystatechange = function () {
  console.log(arguments);
  if (this.readyState !== 4) return;
  // 当请求成功时
  console.log('success');
};
// 设置请求失败时的监听函数
xhr.onerror = function () {
  console.log(this.statusText);
};
// 设置请求头信息
xhr.responseType = 'json';
xhr.setRequestHeader();
// 发送HTTP请求
xhr.send();
