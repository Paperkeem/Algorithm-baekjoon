const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input=input[0].split('');
let ans=[];

for(let i=0; i<input.length; i++){
  let cmd=input[i];
  if(!isNaN(cmd)){
    ans.push(cmd);
  }else if(isNaN(cmd)){
    if(cmd.charCodeAt()>=65 && cmd.charCodeAt()<=90){
      let temp = cmd.charCodeAt()+13;
      if(temp>90){
        temp=temp-26;
      }
      temp = String.fromCharCode(temp);
      ans.push(temp);
    }else if(cmd.charCodeAt()>=97 && cmd.charCodeAt()<=122){
      let temp = cmd.charCodeAt()+13;
      if(temp>122){
        temp=temp-26;
      }
      temp = String.fromCharCode(temp);
      ans.push(temp);
    }
  }
}
console.log(ans.join(''));