function solution(skill, skill_trees) {
  var answer = 0;

  for(i = 0; i < skill_trees.length; i++){
    let cnt = 0;
    let flag = true;
    for(j = 0; j < skill_trees[i].length; j++){
      if(skill.includes(skill_trees[i][j])){
        if(skill[cnt] === skill_trees[i][j]){
          cnt++;
        }else{
          flag = false;
          break;
        }
      }
    }
    if(flag) answer++;
  }

  return answer;
}