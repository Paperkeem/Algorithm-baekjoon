function solution(n, left, right) {
  let arr =[];

  for(i = left; i <= right; i++){
    let share = Math.floor(i / n);
    let remain = i % n;

    let ans = (share<=remain) ? remain + 1 : share + 1;
    arr.push(ans)
  }

  return arr;
}