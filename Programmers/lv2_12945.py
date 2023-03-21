def solution(n):
    answer = 0
    result = [0] * (n+1)
    result[1] = 1

    for i in range(2, n+1):
      result[i] = result[i-1] + result[i-2]

    print(result)
    return answer

solution(5)