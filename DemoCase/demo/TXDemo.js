const regStr = 'abaabaaccaadddaaaaabccccccccdffff7772221';
let str = '';
let resultAry = [];

for (let index = 0; index < regStr.length; index++) {
  const currStr = regStr.charAt(index);
  const nextStr = regStr.charAt(index + 1) || '';
  if (currStr === nextStr) {
    str = `${str}${currStr}`;
  } else {
    if (str.charAt(0) === currStr) str = `${str}${currStr}`;
    if (str) resultAry.push(str);
    str = '';
  }
}

console.log(resultAry.join(','));

function f(str) {
  let res = '';
  str.replace(/(.)\1+/g, (x) => (res += x));
  console.log(res);
}

f(regStr);
