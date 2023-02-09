import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
arr = list(map(int, input().split()))
M = int(input())
temp = 0

for i in arr :
    if(i == M):
        temp = temp + 1

print(temp)