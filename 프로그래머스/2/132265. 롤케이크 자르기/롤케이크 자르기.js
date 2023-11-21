function solution(topping) {
  var answer = 0;
  let baseSet = new Set(topping);
  let compareSet = new Set();
  let cnt = new Array(100001).fill(0)

  topping.map((v) => {
    cnt[v]++;
  });

  topping.map((v) => {
    if(cnt[v] > 0){
      cnt[v]--;
    } 
    if(cnt[v] === 0){
      baseSet.delete(v)
    }

    compareSet.add(v);

    if(baseSet.size === compareSet.size){
      answer++
    }
  })
  

  return answer;
}