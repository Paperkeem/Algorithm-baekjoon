import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
maps = []
for _ in range(N):
    maps.append(list(map(int, input().split())))
visited = [0] * N
ans = 123456789

def dfs(start, now, value, cnt) :
    global ans
    if cnt == N:
        if maps[now][start]:
            value += maps[now][start]
            ans = min(ans, value)
            return
    if value > ans:
        return
    
    for i in range(N):
        if not visited[i] and maps[now][i]:
            visited[i] = 1
            dfs(start, i, value + maps[now][i], cnt+1)
            visited[i] = 0

for i in range(N):
    visited[i] = 1
    dfs(i, i, 0, 1)
    visited[i] = 0
        
print(ans)