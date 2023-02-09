import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

arr = []
ans = []

for i in range(30):
    ans.append(i+1)

for i in range(28) :
    arr.append(int(input()));

for i in range(30):
    if ans[i] in arr:
        ans[i] = 0


for i in range(30):
    if ans[i] != 0:
        print(ans[i])

