import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;
from math import sqrt

while True:
    N = int(input())
    if N==0:
        break
    cnt = 0
    
    for num in range(N+1, 2*N+1):
        if num==1:
            continue
        elif num==2:
            cnt+=1
            continue
        else: 
            for j in range(2, int(sqrt(num)+1)):
                if num % j == 0:
                    break
            else:
                cnt+=1
    print(cnt)

