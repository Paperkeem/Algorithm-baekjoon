const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

// console.log(input)

// console.log(input[0].split(''));


for(let i=0; i<input.length; i++){

  var item = input[i]
  var test = 0;
  
  for(let j=0; j<item.length; j++){
    if(test<0){
      break;
    }else{
      if(item[j]=='('){
        test += 1;
      }else{
        test -=1;
      }
    }
  }

  if(test == 0){
    console.log('YES');
  }else{
    console.log('NO');
  }
}

// for(let j=0; j<input.length; j++){

//   var command = input[j].split(' '); 
//   for(let i=0; i<command.length; i++){
//     command[i]=command[i].split('').reverse().join('');
//   }
//   console.log(command.join(' '));

// }
