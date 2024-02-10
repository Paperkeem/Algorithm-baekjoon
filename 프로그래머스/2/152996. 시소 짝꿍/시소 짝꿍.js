function solution(weights) {
  let answer = 0;
  let store = {};
  const cal = [1, 3 / 2, 2, 4 / 3];

  weights
    .sort((a, b) => b - a)
    .forEach((item) => {
      let current;

      cal.forEach((weight) => {
        current = item * weight;
        if (store[current]) {
          answer += store[current];
        }
      });

      if (!store[item]) store[item] = 1;
      else store[item]++;
    });

  return answer;
}