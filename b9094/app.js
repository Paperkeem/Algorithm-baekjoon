const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

for(let j=0; j<input.length; j++){

  var command = input[j].split(' '); 
  for(let i=0; i<command.length; i++){
    command[i]=command[i].split('').reverse().join('');
  }
  console.log(command.join(' '));

}
