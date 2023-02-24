def solution(s):
    answer = ''
    arr = list(map(int, s.split()))
    answer += str(min(arr))
    answer += ' '
    answer += str(max(arr))
    print(answer)

solution("-1 -2 -3 -4")