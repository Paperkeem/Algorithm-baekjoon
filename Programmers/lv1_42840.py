def solution(answers):
    answer = [0, 0, 0]
    num1 = [1,2,3,4,5]
    num2 = [2,1,2,3,2,4,2,5]
    num3 = [3,3,1,1,2,2,4,4,5,5]

    for i in range(len(answers)):
      num1.extend([1,2,3,4,5])
      num2.extend([2,1,2,3,2,4,2,5])
      num3.extend([3,3,1,1,2,2,4,4,5,5])

    for i in range(len(answers)):
      if answers[i] == num1[i]:
        answer[0] += 1
      if answers[i] == num2[i]:
        answer[1] += 1
      if answers[i] == num3[i]:
        answer[2] += 1
    temp = []
    for i in range(len(answer)):
      if max(answer) == answer[i] :
        temp.append(i+1)

    print(temp)

solution([1,3,2,4,2])