function solution(files) {
  const arr = [];

  for(let i = 0; i < files.length; i++){

    const reg = /(\D*)([0-9]*)/i;
    const convert = files[i].match(reg);

    arr.push({
      file: files[i],
      head : convert[1].toUpperCase(),
      number : parseInt(convert[2]),
      index: i
    })
  }

  arr.sort((a, b) => {
    if(a.head > b.head){
      return 1;
    } 
    if(a.head < b.head){
      return -1;
    }
    if(a.number !== b.number){
      return a.number - b.number;
    }
    return a.index - b.index;
  });
  
  let result = []
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i].file)
  }
  
  return result;
}