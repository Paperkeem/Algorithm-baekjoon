const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    let n=input[0];
    let numbers=input[1].split(' ').map((x)=>+x);
    let stack = [];
    let ans = [];

    for(let i=n-1; i>=0; i--){
      while(stack.length && stack[stack.length-1] < numbers[i]){
        stack.pop();
      }
      if(stack.length==0){
        ans[i]=-1;
      }else{ 
        ans[i]=stack[stack.length-1];
      }
      stack.push(numbers[i])
    }
    console.log(ans.join(' '));
    process.exit();
});