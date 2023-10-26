function solution(arr) {
  var answer = arr[0];

  const gcd = (num1, num2) => num2 > 0 ? gcd(num2, num1 % num2) : num1;  
  const lcm = (num1, num2) => (num1 * num2) / gcd(num1, num2);

  for(i=0; i < arr.length; i++){
    answer = lcm(answer, arr[i])
  }

    return answer;
}