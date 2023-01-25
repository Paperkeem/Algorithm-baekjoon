import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

n,m=list(map(int, input().split()))
cmd = list(map(int, input().split()))
cmd.sort()
visited = [False] * n
s=[]

def dfs() :
    if len(s)==m:
        print(' '.join(map(str,s)))
        return
    remember=0

    for i in range(n):
        if not visited[i] and remember != cmd[i] :
            visited[i] = True
            s.append(cmd[i])
            remember = cmd[i]
            dfs()
            visited[i] = False
            s.pop()

dfs()