def solution(s):
    arr = s.split(' ')
    ans=[]
    
    for i in range(len(arr)) :
        temp = ''

        for j in range(len(arr[i])):
            if j == 0 :
                temp += arr[i][j].upper()
            else : 
                temp += arr[i][j].lower()
        
        ans.append(temp)

    return ' '.join(map(str,ans))

solution("3people unFollowed me")