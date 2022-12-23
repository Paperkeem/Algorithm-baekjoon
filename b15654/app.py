import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

n,m=list(map(int, input().split()))
cmd = list(map(int, input().split()))
cmd.sort()
s=[]

def dfs() :
    if len(s)==m:
        print(' '.join(map(str,s)))
        return

    for i in cmd:
        if i not in s:
            s.append(i)
            dfs()
            s.pop()

dfs()