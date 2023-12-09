const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

function solution(orders, course) {
  var answer = [];

  for (let n = 0; n < course.length; n++) {
    let map = {};
    for (let i = 0; i < orders.length; i++) {
      let convert = orders[i].split("");
      let ans = getCombinations(convert, course[n]);

      for (let j = 0; j < ans.length; j++) {
          ans[j].sort();
        if (map[ans[j]] !== undefined) {
          map[ans[j]]++;
        } else {
          map[ans[j]] = 1;
        }
      }
    }

    map = Object.entries(map).sort((a, b) => b[1] - a[1]);
    let max;
    map.forEach((item, index, origin) => {
      if (index === 0 && item[1] >= 2) {
        answer.push(item[0].split(",").join(""));
        max = item[1];
      }

      if (index !== 0 && item[1] === max) {
        answer.push(item[0].split(",").join(""));
      }
    });
  }

  answer.sort();
  return answer;
}