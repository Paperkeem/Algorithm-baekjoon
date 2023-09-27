function solution(n, words) {

  let len = words.length
  let ans = n;
  let arr = []
  
  for (i=0; i <= words.length - 1; i++){
      let findWord = arr.findIndex(x => x === words[i])

      if (findWord !== -1){
        ans = i + 1
        break;
      } 
      else if(words[i].length === 1){
          ans = i + 1
          break;
      } 
      else if (i < words.length -1 && words[i].slice(-1) !== words[i+1].slice(0, 1)){
          ans = i + 2
          break;
      } 
      else {
        arr.push(words[i])

        if(i === words.length - 1){
          return [0,0]
        } 
      }
  }

 
  return [ans % n === 0 ? n : ans % n, Math.ceil(ans / n)]
  
}