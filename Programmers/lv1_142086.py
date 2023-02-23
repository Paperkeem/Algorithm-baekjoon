def solution(s):
    answer = []

    for i in range(len(s)):
      if s[i] in s[0:i]:
        after = i
        for j in range(i):
            if s[j] == s[i]:
              before = j
        meter = after-before
        answer.append(meter)
      if s[i] not in s[0:i]:
        answer.append(-1)
    
    print(answer)


solution("banana");
