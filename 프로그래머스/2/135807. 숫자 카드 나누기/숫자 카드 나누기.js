let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

function solution(arrayA, arrayB) {
  let gcd = 0;

  let temp = 0;
  for (let i = 0; i < arrayA.length; i++) {
    temp = getGCD(arrayA[i], temp);
  }

  let flag = false;
  for (let j = 0; j < arrayB.length; j++) {
    if (arrayB[j] % temp === 0) {
      flag = true;
    }
  }

  if (!flag) {
    gcd = Math.max(gcd, temp);
  }

  temp = 0;
  for (let i = 0; i < arrayB.length; i++) {
    temp = getGCD(arrayB[i], temp);
  }

  flag = false;
  for (let j = 0; j < arrayA.length; j++) {
    if (arrayA[j] % temp === 0) {
      flag = true;
    }
  }

  if (!flag) {
    gcd = Math.max(gcd, temp);
  }

  return gcd === 1 ? 0 : gcd;
}