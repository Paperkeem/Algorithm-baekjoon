function solution(word) {
  let arr = ["A", "E", "I", "O", "U"];
  let temp = [];

  function addString(text, length) {
    temp.push(text);
    if (length === 5) {
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        addString(text + arr[i], length + 1);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    addString(arr[i], 1);
  }

  temp = temp.sort();
  return temp.indexOf(word) + 1;
}