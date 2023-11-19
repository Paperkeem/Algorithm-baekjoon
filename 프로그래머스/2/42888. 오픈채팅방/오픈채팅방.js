function solution(record) {
  var answer = [];
  let obj = {};

  for (let i = 0; i < record.length; i++) {
    let info = record[i].split(" ");
    if (info[2]) {
      obj[info[1]] = info[2];
    }
  }

  for (let i = 0; i < record.length; i++) {
    let info = record[i].split(" ");
    let msg;
    if (info[0] === "Enter") {
      msg = obj[info[1]] + "님이 들어왔습니다.";
      answer.push(msg);
    } else if (info[0] === "Leave") {
      msg = obj[info[1]] + "님이 나갔습니다.";
      answer.push(msg);
    } 
  }
  return answer;
}