function solution(str1, str2) {
  
  function makeArr(text){
    const arr = [];
    const regex = /^[a-zA-Z]*$/;

    for(let i=0; i<text.length - 1; i++){
        if(regex.test(text[i]) && regex.test(text[i+1])){
        arr.push(text.slice(i, i+2).toUpperCase());
      }
    }

    return arr;
  }

  const arr1 = makeArr(str1)
  const arr2 = makeArr(str2)
  
  const union = [];
  const intersection = [];

  for(let i=0; i < arr2.length; i++){
    let isExist = arr1.indexOf(arr2[i]);
    
    if(isExist >= 0){
      intersection.push(arr1.splice(isExist, 1));
    }
    union.push(arr2[i]);
  }

  for(let i=0; i < arr1.length; i++){
    union.push(arr1[i]);
  }

  if(union.length === 0 && intersection.length === 0){
    return 65536;
  }
  return Math.floor((intersection.length / union.length) * 65536);
}