def solution(brown, yellow):
    answer = []
    total = brown + yellow;

    for b in range(1,total+1):
      if total % b == 0:
        a = total // b
        if a >= b :
          if (a-2) * (b-2) == yellow:
            print(a, b)


solution(10, 2)