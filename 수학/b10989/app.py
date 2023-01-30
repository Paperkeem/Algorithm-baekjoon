import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
numList = [0] * 10001

for _ in range(N):
    numList[int(input())] += 1

for i in range(10001):
    if numList[i] != 0:
        for j in range(numList[i]):
            print(i)