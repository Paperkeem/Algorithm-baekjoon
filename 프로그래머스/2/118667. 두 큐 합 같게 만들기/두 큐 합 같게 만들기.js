function solution(queue1, queue2) {

  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0)
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0)
  const total = (sum1 + sum2) / 2;
  
  let pointer1 = 0;
  let pointer2 = queue1.length;
  const queue = [...queue1, ...queue2];

  const end = queue1.length * 3;

  for(let cnt = 0; cnt < end; cnt++){
    if(sum1 === total){
      return cnt;
    }

    if(sum1 > total){
      sum1 -= queue[pointer1++];
    } else {
      sum1 += queue[pointer2++];
    }
  }
  return -1;
}