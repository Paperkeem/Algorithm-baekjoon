const findSu = (num) => {
  if(num <= 1) {return false}
  for(let i = 2; i * i <= num; i++){
    if(num % i === 0) {return false}
  }
  return true;
}

function solution(n, k) {
  let answer = 0; 
  let convertNum = n.toString(k)

  const numArr = convertNum.replace(/0/gi, ',').split(',')
  for(let i=0; i < numArr.length; i++){
    if(findSu(Number(numArr[i]))){
      answer++;
    }
  }
  
  return answer;
}