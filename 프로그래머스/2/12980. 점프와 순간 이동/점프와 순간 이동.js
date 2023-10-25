function solution(n)
{
    var ans = 0;
    let temp = n

    while(temp !== 0){
      if(temp % 2 === 0){
        temp = temp / 2;
      }else if(temp % 2 !== 0){
        ans += 1;
        temp = (temp - 1) / 2
      }

    }

    return ans;
}