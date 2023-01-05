import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

n,m=list(map(int, input().split()))
cmd = sorted(list(map(int, input().split())))
s=[]

def dfs() :
    if len(s)==m:
        ans = ' '.join(map(str,s))
        print(ans)
        return
    remember=0

    for i in range(n):
        if remember != cmd[i] :
            s.append(cmd[i])
            remember=cmd[i]
            dfs()
            s.pop()

dfs()