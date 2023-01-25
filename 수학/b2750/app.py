import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
arr = []
for _ in range(N):
    arr.append(int(input()))

arr.sort()
print(*arr, sep='\n')