function solution(bridge_length, weight, truck_weights) {
  let bridge = [];
  let time = 0;
  
  while(true){
    time++;
    if (truck_weights.length === 0 && bridge.length === 0){
      break;
    }

    // 무게를 계산해서 다리에 올릴 수 있을 만큼 트럭을 올린다.
      
    let sum = bridge.reduce((acc, cur) => acc + cur[0], 0);
      if(sum + truck_weights.at(0) <= weight) {
        bridge.push([truck_weights.shift(), 0])
        
      } 
    
    // 1초씩을 더해준다.
    bridge.forEach((v) => v[1]++)
    
    // 브릿지에서 빠지는 트럭을 계산한다.
    while(true){
      if(bridge.length > 0 && bridge[0][1] === bridge_length){
        bridge.shift();
      } else {
        break;
      }
    }
  }
  
  return time;
}