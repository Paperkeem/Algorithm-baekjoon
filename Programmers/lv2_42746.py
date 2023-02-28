# from itertools import permutations

# def solution(numbers):
#     answer = []
#     for i in permutations(numbers, len(numbers)):
#         ans = "".join(list(map(str,list(i))))
#         answer.append(int(ans))
#     answer.sort()
#     return str(answer[-1])

def solution(num):

    num = list(map(str, num))
    num.sort(key = lambda x : x*3, reverse = True)

    return str(int(''.join(num)))
solution([3, 30, 34, 5, 9])