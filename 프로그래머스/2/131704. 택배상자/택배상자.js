function solution(order) {
  let stack = [];
  let result = [];
  let temp = new Array(order.length - 1).fill(0);
  let orderIndex = 0;
  let tempIndex = 0;

  for(let i = 0; i < order.length; i++){
    temp[i] = i+1;
  }

  while(true){
    if (temp[tempIndex] && order[orderIndex] !== temp[tempIndex] && order[orderIndex] !== stack.at(-1)){
      stack.push(temp[tempIndex])
      tempIndex++;
    } else if(temp[tempIndex] && order[orderIndex] === temp[tempIndex]){
      result.push(temp[tempIndex]);
      tempIndex++;
      orderIndex++;
    } else if(stack.at(-1) && order[orderIndex] === stack.at(-1)){
      result.push(stack.pop());
      orderIndex++;
    } else break;
  }

  return result.length;
}
