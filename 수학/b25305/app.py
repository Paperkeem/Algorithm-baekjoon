import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N, M = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort(reverse=True)

print(arr[M-1])