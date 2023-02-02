import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
arr.sort()

for i in arr:
    print(*i)