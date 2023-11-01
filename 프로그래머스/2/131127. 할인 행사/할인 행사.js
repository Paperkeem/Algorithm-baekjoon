function solution(want, number, discount) {
  var answer = 0;

  const isMatch = (newArr) => {
    const obj = {};

    newArr.forEach((arr) => {
      if (obj[arr] !== undefined) obj[arr]++;
      else obj[arr] = 1;
    });

    for (j = 0; j < want.length; j++) {
      if (obj[want[j]] !== number[j]) return false;
    }
    return true;
  };

  for (i = 0; i <= discount.length - 10; i++) {
    const temp = discount.slice(i, i + 10);
    if (isMatch(temp)) answer++;
  }

  return answer;
}