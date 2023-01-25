import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

arr = []
ans = 0
for i in range(5):
    arr.append(int(input()))
    ans += arr[i]

arr.sort()
print(int(ans / 5))
print(arr[2])