def solution(numbers, target):
  ans=0
  def dfs(index, sum):
    # 재귀함수 탈출 조건
    if index ==len(numbers):
      if sum==target: 
        nonlocal ans
        ans += 1
      return;
    # 수행 동작
    dfs(index+1, sum+numbers[index])
    dfs(index+1, sum-numbers[index])

  dfs(0, 0)
  print(ans)

solution([1, 1, 1, 1, 1], 3)