import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

ans = 0
X = 0
Y = 0

arr = []
for _ in range(9):
    arr.append(list(map(int, input().split())))

for i in range(9):
    for j in range(9):
        if arr[i][j] > ans: 
            ans = arr[i][j]
            X = i + 1
            Y = j + 1
print(ans)
print(X, Y)