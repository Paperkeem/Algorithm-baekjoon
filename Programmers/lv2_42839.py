from itertools import permutations
def solution(numbers):
    prime_set = []
    
    for i in range(len(numbers)):
      data = permutations(numbers, i+1)
      prime_set.extend(map(int, map("".join, data)))
    
    prime_set= list(set(prime_set))
    max_num = max(prime_set)
    print(prime_set)

    answer = 0 
    for j in prime_set:
      cnt = 0

      for i in range(1, int(max_num ** 0.5)):
        if j % (i+1) == 0 and j != (i+1):
          cnt += 1
        if j == 0 or j == 1 :
          cnt += 1
      if cnt == 0 :
        answer += 1
    
    print(answer)

solution("17")