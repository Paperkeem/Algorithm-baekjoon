def solution(nums):
    new_nums = set(nums)
    pick = len(nums) // 2
    if len(new_nums) >= pick:
      return pick
    else : return len(new_nums)

solution([3,3,3,2,2,2])