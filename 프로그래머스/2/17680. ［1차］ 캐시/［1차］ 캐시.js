function solution(cacheSize, cities) {
  var answer = 0;
  let que = [];

  for (let i = 0; i < cities.length; i++) {
    if (que.includes(cities[i].toUpperCase())) {
      que = que.filter((x) => x !== cities[i].toUpperCase());
      answer += 1;
    } else {
      answer += 5;
    }

    que.push(cities[i].toUpperCase());
    if (que.length > cacheSize) {
      que.shift();
    }
  }

  return answer;
}