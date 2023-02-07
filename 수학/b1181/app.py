import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
arr = []

for i in range(N):
    arr.append(input())

arr_list=list(set(arr))
arr_list.sort()
arr_list.sort(key=len)

for i in arr_list:
    print(i)