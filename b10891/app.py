import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

n = int(input())
arr = list(map(int, input().split()))
visited = [False]*n
ans = 0

def dfs(li) :
    global ans
    if len(li) == n:
        total = 0
        for i in range(n-1):
            total += abs(li[i]-li[i+1])
        ans = max(ans, total);
        return    
    for i in range(n):
        if not visited[i] :
            visited[i]=True
            li.append(arr[i])
            dfs(li)
            visited[i]=False
            li.pop()

dfs([])
print(ans)