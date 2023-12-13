function solution(m, musicinfos) {
  let obj = [];
  
  m = m.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase());

  for(let i=0; i < musicinfos.length; i++){
    let [start, end, song, music] = musicinfos[i].split(',');

    const time1 = new Date(`2023-12-12 ${start}`)
    const time2 = new Date(`2023-12-12 ${end}`)
    const diff = Math.abs((time2.getTime() - time1.getTime()) / (1000 * 60));

    music = music.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase());
    let note = music.split('');
    let fullMusic = '';
    
    for(let j = 0; j < diff; j++){
      fullMusic += note[j % note.length]
    }
    
    if(fullMusic.includes(m)){
      obj.push([song, diff])
    }
    
  }

  obj.sort((a,b) => b[1] - a[1]);

  return obj.length > 0 ? obj[0][0] : '(None)';
}