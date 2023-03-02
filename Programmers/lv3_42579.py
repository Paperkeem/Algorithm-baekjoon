def solution(genres, plays):
    hash = {}
    answer = []

    for i in range(len(genres)):
      if genres[i] in hash :
        hash[genres[i]]['plays'][i] = plays[i]
        hash[genres[i]]['total'] += plays[i] 
      else :
        hash[genres[i]] = { 'plays' : { i : plays[i]}, 'total' : plays[i]}
    
    temp = sorted(hash.items(), key=lambda x: -x[1]['total'])
    
    for item in temp:
      item[1]['plays'] = sorted(item[1]['plays'].items(), key=lambda x: (-x[1], x[0]))
    
    for item in temp:
      try: 
        answer += [item[1]['plays'][0][0], item[1]['plays'][1][0]]
      except: 
        answer += [item[1]['plays'][0][0]]

    print(answer)
    return answer

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])