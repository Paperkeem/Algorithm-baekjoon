from collections import deque
def solution(maps):

    r=len(maps[0])
    c=len(maps)

    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1 ,1]

    graph = [[-1 for _ in range(r)] for _ in range(c)]

    queue = deque()
    queue.append([0,0,1])

    graph[0][0] = 1 

    while queue:
        x,y,sum = queue.popleft();
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if nx in range(r) and ny in range(c) and maps[ny][nx] == 1:
                # 안 가본 길 조건 추가
                if graph[ny][nx] == -1 :
                    graph[ny][nx] = sum + 1
                    queue.append([nx,ny, graph[ny][nx]])
    print(graph)
    print(graph[-1][-1])


solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1],[0,0,0,0,1]])