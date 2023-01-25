const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n=Number(input.shift());
let numbers=input.shift();
let stack=[];
let sh = new Map();

  for(let i=0; i<numbers.length; i++){
    let cur = numbers[i] ;
    // if(/[A-Z]/.test(cur)){
    //   stack.push(cur.charCodeAt(0)-64);
    // }

    if(cur.charCodeAt(0) >= 65 && cur.charCodeAt(0) <= 90)
    {
      if (!sh.has(cur)) {
        sh.set(cur, input.shift());
      }
      stack.push(sh.get(cur));
    }
    else
    {
      let a = Number(stack.pop());
      let b = Number(stack.pop());
      let c = 0;
      
      if(cur=='+') c=(b+a);
      else if(cur=='-') c=(b-a);
      else if(cur=='*') c=(b*a);
      else if(cur=='/') c=(b/a);

      stack.push(c);
    }
  }
  console.log(stack[0].toFixed(2));

// const N = Number(input.shift());
// const expression = input.shift();
// const stack = [];
// let result = 0;
// let sh = new Map();

// for (let i = 0; i < expression.length; i++) {
//   let current = expression[i];

//   if (current.charCodeAt(0) >= 65 && current.charCodeAt(0) <= 90) {
//     if (!sh.has(current)) {
//       sh.set(current, input.shift());
//     }
//     stack.push(sh.get(current));
//   } else {
//     let second = Number(stack.pop());
//     let first = Number(stack.pop());
//     let tempResult = 0;

//     switch (current) {
//       case "+":
//         tempResult = first + second;
//         break;
//       case "-":
//         tempResult = first - second;
//         break;
//       case "/":
//         tempResult = first / second;
//         break;
//       case "*":
//         tempResult = first * second;
//         break;
//     }

//     stack.push(tempResult);
//   }
// }

// console.log(stack[0].toFixed(2));