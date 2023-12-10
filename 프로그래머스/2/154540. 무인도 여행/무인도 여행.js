function solution(maps) {
  let answer = [];
  let island = 0;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  let visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(false)
  );
  mapsCopy = { ...maps };

  function dfs(y, x, sum) {
    let nextValue;
    if (
      x + dx[0] < maps[0].length &&
      visited[y + dy[0]][x + dx[0]] === false &&
      maps[y + dy[0]][x + dx[0]] !== "X"
    ) {
      nextValue = parseInt(mapsCopy[y + dy[0]][x + dx[0]]);
      island += nextValue;
      visited[y + dy[0]][x + dx[0]] = true;
      dfs(y + dy[0], x + dx[0]);
    } 
      
      if (
      0 <= x + dx[1] &&
      visited[y + dy[1]][x + dx[1]] === false &&
      maps[y + dy[1]][x + dx[1]] !== "X"
    ) {
      nextValue = parseInt(mapsCopy[y + dy[1]][x + dx[1]]);
      island += nextValue;
      visited[y + dy[1]][x + dx[1]] = true;
      dfs(y + dy[1], x + dx[1]);
    }  
      
      if (
      y + dy[2] < maps.length &&
      visited[y + dy[2]][x + dx[2]] === false &&
      maps[y + dy[2]][x + dx[2]] !== "X"
    ) {
      nextValue = parseInt(mapsCopy[y + dy[2]][x + dx[2]]);
      island += nextValue;
      visited[y + dy[2]][x + dx[2]] = true;
      dfs(y + dy[2], x + dx[2]);
    } 
      
      if (
      0 <= y + dy[3] &&
      visited[y + dy[3]][x + dx[3]] === false &&
      maps[y + dy[3]][x + dx[3]] !== "X"
    ) {
      nextValue = parseInt(mapsCopy[y + dy[3]][x + dx[3]]);
      island += nextValue;
      visited[y + dy[3]][x + dx[3]] = true;
      dfs(y + dy[3], x + dx[3]);
    }
  }

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== "X" && visited[i][j] === false) {
        visited[i][j] = true;

        island += parseInt(maps[i][j]);
        dfs(i, j);
        answer.push(island);
        island = 0;
      }
    }
  }
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}
