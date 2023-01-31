import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

N = int(input())
arr = [int(input()) for _ in range(N)]
ans = []
numList = [0] * 8001

arr.sort()

ans.append(round(sum(arr) / len(arr)))
ans.append(arr[int(N/2)])

for i in range(0, N):
    numList[arr[i]] += 1

max = max(numList)
tempArr = []

for i in range(8001):
    if i <= 4000 and numList[i] == max:    
        tempArr.append(i)
    elif i > 4000 and numList[i] == max:
        i = i - 8001
        tempArr.append(i)

tempArr.sort()

if len(tempArr)==1 : 
    ans.append(tempArr[0])
elif len(tempArr) > 1 :
    ans.append(tempArr[1])

ans.append(arr[N-1]-arr[0])

for i in range(len(ans)):
    print(ans[i])