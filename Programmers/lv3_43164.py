from collections import defaultdict
from collections import deque

def solution(tickets):
    answer = []
    graph = defaultdict(list)
    
    for start, end in tickets:
      graph[start].append(end)

    for airport in graph.keys():
      graph[airport].sort(reverse=True)
    
    stack = ["ICN"]
    
    while stack:
      top = stack.pop()
      if top not in graph or not graph[top]:
        answer.append(top)
      else :
        stack.append(top)
        stack.append(graph[top].pop())
    return answer[::-1]
solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]])

a = "paper"
print "hi",a