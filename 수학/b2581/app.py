import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
M = int(input())
arr = []

for num in range(N, M+1):
    count = 0
    if num==1 :
        pass
    elif num==2:
        arr.append(num)
    else: 
        for j in range(2, num):
            if num % j == 0:
                count += 1
                break
        if count==0 :
            arr.append(num)

if len(arr)==0:
    print(-1)
else :
    print(sum(arr))
    print(min(arr))

