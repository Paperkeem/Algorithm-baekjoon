function solution(priorities, location) {
  let before = [];
  let after = [];

  for(i=0; i< priorities.length; i++){
    before.push(i);
  }

  while(before.length !== 0){
    let first = priorities.shift();
    let item = before.shift();
    
    if(first < Math.max(...priorities)){
      before.push(item);
      priorities.push(first);
    }else{
      after.push(item)
    }
  }
  return after.findIndex(x => x === location) + 1;
}