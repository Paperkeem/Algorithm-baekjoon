def solution(clothes):
    hash = {}
    result = 1
    for clothe, type in clothes:
        hash[type] = hash.get(type, 1) + 1
    for i in hash.values():
        result *= i
    print(result - 1)
    
solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])