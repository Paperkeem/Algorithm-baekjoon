import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

def solve(arr):
    ans = 0
    for i in arr:
        ans += i
    return ans