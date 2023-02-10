import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
arr = []

for i in range(N):
    arr.append(input().rstrip())

def recursion(s, l, r):
    if l >= r: print(1, l+1)
    elif s[l] != s[r]: print(0, l+1)
    else: return recursion(s, l+1, r-1)

def isPalindrome(s):
    return recursion(s, 0, len(s)-1)

for s in arr:
    isPalindrome(s)