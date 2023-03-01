def solution(begin, target, words):
    answer = 0
    result = []
    visited = [False] * len(words)

    if target not in words:
      return answer

    def dfs(nowWord, target, index):
      # 재귀함수 탈출 조건
      if nowWord == target :
        nonlocal result
        result.append(index)
        return
      # 수행 동작
      for i in range(len(nowWord)):
        for j in range(len(words)):
          if nowWord[0:i] in words[j] and nowWord[i+1:] in words[j] and not visited[j]:
            visited[j] = True
            dfs(words[j], target, index + 1)
            visited[j] = False

    dfs(begin, target, 0)
    print(result)
    return min(result)

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])