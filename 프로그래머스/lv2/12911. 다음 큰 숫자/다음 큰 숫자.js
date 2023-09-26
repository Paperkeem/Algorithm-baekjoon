function solution(n) {
    var temp = n
    var firstLen = n.toString(2).replace(/0/g, '');
    var secondLen = 0;
    
    while(firstLen !== secondLen){
        temp++;
        secondLen = temp.toString(2).replace(/0/g, '');
    }
    
    return temp;
}