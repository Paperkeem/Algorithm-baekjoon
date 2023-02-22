def solution(t, p):
    
    answer = 0

    for i in range(len(t)-len(p)+1):
        temp = int(t[i:len(p)+i])
        if temp <= int(p):
            answer += 1

    print(answer)

solution("10203", "15")