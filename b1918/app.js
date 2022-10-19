const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let numbers=input[0].split('');
let stack=[];
let ans='';

  for(let i=0; i<numbers.length; i++){
    let cur = numbers[i];
    
    if(cur=='('){
      stack.push(cur);
    }else if(cur=='*' || cur=='/'){
        while(stack.length && stack[stack.length-1]=='*' || stack[stack.length-1]=='/'){
          ans+=stack.pop();
        }
      stack.push(cur);
    }else if(cur=='+' || cur=='-'){
      while(stack.length && stack[stack.length-1]!='('){
        ans+= stack.pop();
      }
      stack.push(cur);
    }else if(cur==')'){
      while(stack.length && stack[stack.length-1]!='('){
        ans+=stack.pop();
      }
      stack.pop(); // (꺼내서 버리기
    }else{
      ans+=cur;
    }
  }

  console.log(ans+stack.reverse().join(''));

