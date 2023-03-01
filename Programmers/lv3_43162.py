def solution(n, computers):
    #[[1, 1, 0], 
    # [1, 1, 0], 
    # [0, 0, 1]]
    visited = [False] * n
    cnt = 0
    
    def dfs(x, computers, visited):
      visited[x] = True
      for i in range(n):
        if computers[x][i] and (not visited[i]):
          dfs(i, computers, visited)

    for i in range(n):
      if visited[i] == False:
        dfs(i, computers, visited)
        cnt += 1

    print(cnt)
    return cnt

solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])