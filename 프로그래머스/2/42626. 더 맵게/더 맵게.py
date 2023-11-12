import heapq

def solution(scoville, K):
    heapq.heapify(scoville)
    
    answer = 0
    while scoville[0] < K:
        if len(scoville) == 2 and (scoville[0] + (scoville[1] * 2) < K):
            return -1
        
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        fusion = first + (second * 2)
        heapq.heappush(scoville, fusion)
        answer += 1
    
    return answer