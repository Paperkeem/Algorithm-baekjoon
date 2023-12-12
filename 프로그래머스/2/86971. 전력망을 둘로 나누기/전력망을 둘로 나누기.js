function solution(n, wires) {
  let answer = Number.MAX_VALUE;
  ;
  
  for(let i = 0; i < wires.length; i++){
    let [node1, node2] = wires.shift();
    answer = Math.min(answer, Math.abs(bfs(node1) - bfs(node2)));
    wires.push([node1, node2]);
  }

  function bfs(node){
    let visited = [];  // 방문한 노드
    let willVisited = [node]; // 방문할 노드
      
    while(willVisited.length !== 0){
        let cur = willVisited.shift();
        wires.forEach((wire) => {
          if(wire.includes(cur)){
            let other = cur === wire[0] ? wire[1] : wire[0];
            if(!visited.includes(other)) willVisited.push(other);
          }
        })
        visited.push(cur);
      }

      return visited.length;
  }

  return answer;
}