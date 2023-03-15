def solution(n):
    answer = 0
    
    for i in range(1, n+1):
        temp = 0
        while temp < n:
          temp += i
          i += 1
        if temp == n :
            answer += 1
    print(answer)
    return answer

solution(15)