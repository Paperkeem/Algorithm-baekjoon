def solution(citations):
    citations.sort()
    print(citations)
    for i in range(len(citations)):
        if citations[i] >= len(citations)-i:
            print(len(citations)-i)
            return len(citations)-i
solution([6,6,6,6,4,4])