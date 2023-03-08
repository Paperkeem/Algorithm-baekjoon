from itertools import permutations

def solution(k, dungeons):

    data = list(permutations(range(len(dungeons)), len(dungeons)))
    temp = [0] * len(data)

    print(data)
    for j in range(len(data)) :
      pirodo = k
      for i in data[j]:
        if dungeons[i][0] <= pirodo:
            pirodo -= dungeons[i][1]
            temp[j] += 1
            print(pirodo)
    
    print(max(temp))

solution(80, [[80,20],[50,40],[30,10]])