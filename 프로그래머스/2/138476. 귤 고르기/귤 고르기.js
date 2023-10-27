function solution(k, tangerine) {
  var answer = 0;
  let obj = {}
  tangerine.forEach(i => {
    if (obj[i] === undefined) {
      obj[i] = 1
    } else {
      obj[i]++;
    }
  });

  const arr = Object.entries(obj).map(([key, value]) => ({key, value}));
  arr.sort((a,b) => b.value - a.value);
  
  for (i = 0; i < arr.length; i++) {
    if(k - arr[i].value <= 0 ){
      answer++;
      break;
    }else {
      k -= arr[i].value;
      answer++;
    }
  }
  return answer;
}