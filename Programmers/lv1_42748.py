def solution(array, commands):
    answer = []

    # arr = array[1:5] # 2번째부터 5번째 자르기
    # arr.sort()
    # print(arr[2]) # 3번째 숫자

    for i in range(len(commands)):
        arr = array[commands[i][0]-1:commands[i][1]]
        arr.sort()
        answer.append(arr[commands[i][2]-1])
    print(answer)
    return answer

solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])