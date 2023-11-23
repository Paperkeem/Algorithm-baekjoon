function solution(x, y, n) {
  let answer = 0;
  const dp = new Array(y+1).fill(123456789);
  dp[x] = 0

  for(let i = x; i < y; i++){
    if(2 * i <= y) dp[2 * i] = Math.min(dp[i] + 1, dp[2 * i])
    if(3 * i <= y) dp[3 * i] = Math.min(dp[i] + 1, dp[3 * i])
    if(i + n <= y) dp[i + n] = Math.min(dp[i] + 1, dp[i + n])
  }
  return dp.at(-1) === 123456789 ? -1 : dp.at(-1);
}