def solution(s, skip, index):
    answer = ''
    abc = [chr(i) for i in range(97, 123) if not chr(i) in skip] * 3

    for i in s:
        answer += abc[abc.index(i)+index]
    print(answer) 

solution("aukks","wbqd",5)