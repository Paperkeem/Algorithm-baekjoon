import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
ans = [0, 1]

for i in range(2, N+1):
    num = ans[i-1] + ans[i-2]
    ans.append(num);

print(ans[N])