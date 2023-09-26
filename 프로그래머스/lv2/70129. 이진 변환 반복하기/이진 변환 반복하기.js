function solution(s) {
    var answer = [0, 0];
    let temp = s
    let cnt = 0;
    let len = 0;

      while(temp !== '1') {
        var a = temp.replace(/0/g, '')
        var b = temp.length - a.toString().length
        var c = a.length.toString(2)    
        cnt++
        len+=b
        temp = c 

        if(temp === 1) break;
      }
    
    return [cnt, len];
}