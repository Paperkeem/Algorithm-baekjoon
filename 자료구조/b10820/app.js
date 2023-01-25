const fs = require('fs');
const { maxHeaderSize } = require('http');
const { off } = require('process');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let result='';

for(let i=0; i<input.length; i++){
  if(input[i]==='') continue;
  let ans = [0,0,0,0];
  let cur=input[i].split('');
  for(let j=0; j<cur.length; j++){
    let cmd=cur[j];
    if(cmd>='0' && cmd<='9'){
      ans[2]++;
    }else if(cmd==' '){
      ans[3]++;
    }else if(cmd.charCodeAt()>=65 && cmd.charCodeAt()<=90){
      ans[1]++;
    }else if(cmd.charCodeAt()>=97 && cmd.charCodeAt()<=122){
      ans[0]++;
    }
  }
  
  result+=ans.join(' ')+'\n';
  }
console.log(result.trim())