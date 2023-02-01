import sys
sys.stdin = open('./input.txt', 'r')
input=sys.stdin.readline;

arr = list(map(int, str(input())))

arr.sort(reverse=True)

arr = list(map(str,arr))
arr="".join(arr)
print(arr)