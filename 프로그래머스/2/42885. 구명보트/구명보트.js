function solution(people, limit) {
    var answer = 0;
    let temp = people.sort((a, b) => a - b);
    
    let right = 0;
    let left = temp.length - 1
    
    while(right <= left){
      let sum = temp[right] + temp[left]
      if(sum <= limit){
        right++;
        answer++;
        left--;
      } else {
        answer++;
        left--;   
      }
    }

    return answer
}