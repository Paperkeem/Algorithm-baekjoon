def solution(s):
    answer = True
    left = 0
    right = 0
    
    for word in s:
      if word == "(":
        left += 1
      if word == ")":
        right += 1
      if right > left:
        return False

    return True

solution("()()")