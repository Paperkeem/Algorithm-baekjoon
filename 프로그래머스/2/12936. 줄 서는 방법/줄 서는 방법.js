function solution(n, k) {
  let answer = [];
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let fac = arr.reduce((acc, cur) => acc * cur, 1);
  k--;

  while (answer.length !== n) {
    fac = fac / arr.length;
    let temp = arr[Math.floor(k / fac)];
    answer.push(temp);
    k = k % fac;
    arr = arr.filter((v) => v !== temp);
  }

  return answer;
}