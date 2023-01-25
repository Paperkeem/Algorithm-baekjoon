import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

def dfs(depth, idx):
    if depth==6:
        print(*out)
        return
    for i in range(idx, N):
        out.append(arr[i])
        dfs(depth+1, i+1)
        out.pop()


while True:
    array = list(map(int, input().split()))
    N = array[0]
    arr = array[1:]
    out = []
    dfs(0,0)
    if N == 0:
        exit()
    print()