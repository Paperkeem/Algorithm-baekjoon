import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
ans = [[0 for _ in range(101)]for _ in range(101)]

for i in range(N):
    x,y = arr[i]
    for k in range(x, x+10):
      for j in range(y, y+10):
          ans[k][j] = 1

temp=0
for i in range(101):
  for j in range(101):
    if ans[i][j] == 1:
      temp += 1
print(temp)
