from collections import deque

def solution(maps):

    n=len(maps[0])
    m=len(maps)

    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1 ,1]

    graph = [[-1 for _ in range(n)] for _ in range(m)]

    queue = deque()
    queue.append([0,0])

    graph[0][0] = 1 

    while queue:
      x, y = queue.popleft();
      for i in range(4):
          nx, ny = x + dx[i], y + dy[i]
          if nx in range(n) and ny in range(m) and maps[nx][ny] == 1:
            # 안 가본 길 조건 추가
            if graph[nx][ny] == -1 :
              graph[nx][ny] = graph[x][y]+1
              queue.append([nx,ny])
    
    print(graph[n-1][m-1])


solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]])