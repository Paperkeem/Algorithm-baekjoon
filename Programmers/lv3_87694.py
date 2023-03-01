from collections import deque
def solution(rectangle, characterX, characterY, itemX, itemY):
    answer = 0

    cX = characterX * 2
    cY = characterY * 2
    iX = itemX * 2
    iY = itemY * 2

    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1 ,1]

    graph = [[0] * 101 for _ in range(101)]

    visited = [[False] * 101 for _ in range(101)]
    visited[cX][cY] = True

    for x1, y1, x2, y2 in rectangle:
        for i in range(2*x1, 2*x2+1):
            for j in range(2*y1, 2*y2+1):
                graph[i][j] = 1
    
    for x1, y1, x2, y2 in rectangle:
        for i in range(2*x1 + 1, 2*x2):
            for j in range(2*y1 + 1, 2*y2):
                graph[i][j] = 0

    q = deque()
    q.append([cX, cY, 0])

    while q:
      x, y, meter = q.popleft()
      if x == iX and y == iY:
          answer = meter // 2
          break
      for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        # nx와 ny의 범위를 설정해주지 않으면 테스트 케이스 중 런타임 에러 발생
        if nx in range(101) and ny in range(101) and graph[nx][ny] != 0 and visited[nx][ny] == False :
          visited[nx][ny] = True
          q.append([nx, ny, meter+1])
    
    print(answer)
    return answer

solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]], 1, 3, 7, 8)