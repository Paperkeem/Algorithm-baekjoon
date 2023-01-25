const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const { isRegExp } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
const stack = [];

const fun = {
  pop_front : ()=> stack.shift() || -1,
  pop_back : ()=> stack.pop() || -1,
  size : ()=> stack.length,
  empty : ()=> (stack.length!=0 ? 0 : 1),
  front : ()=> stack[0] || -1,
  back : () => stack.slice(-1)[0] || -1,
  push : (item)=> {
    if(item.startsWith('push_front')){
      stack.unshift(item.split(' ')[1]);
      return '';
    }else if(item.startsWith('push_back')){
      stack.push(item.split(' ')[1]);
      return '';
    }
}
}

let result = input.reduce((acc, v)=>
  acc + (fun[v]?`${fun[v]()}\n`:fun.push(v)) , '');

console.log(result);
