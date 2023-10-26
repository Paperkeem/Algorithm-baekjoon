function solution(n) {
  const arr = [1, 2]
  const na = 1234567;
  
  for(i=2; i<=n-1; i++){
    let ans = (arr[i-2] % na) + (arr[i-1] % na);
    arr.push(ans)
  }

  return arr[n-1] % na;
}