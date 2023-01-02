import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

n,m=list(map(int, input().split()))
cmd = sorted(list(map(int, input().split())))
s=[]

def dfs(start) :
    if len(s)==m:
        ans = ' '.join(map(str,s))
        print(ans)
        return
    remember=0

    for i in range(n):
        if remember != cmd[i] and cmd[i] >= start :
            s.append(cmd[i])
            remember=cmd[i]
            dfs(cmd[i])
            s.pop()

dfs(0)