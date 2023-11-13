function solution(fees, records) {
  let arr = [];
  let obj = {}

  let convertRecords = records.reduce((acc, cur)=>{
    arr.push(cur.split(' '));
  }, [])
  arr.sort((a, b) => a[1] - b[1])
  console.log(arr)

  const convertTime = (inTime, outTime) => {
    let time = (+outTime[0] - +inTime[0]) * 60 + (+outTime[1] - +inTime[1])
    return +time
  }

  for(i=0; i<arr.length; i++){
    if(arr[i][2] === 'IN'){
      let inTime = arr[i][0].split(':');
      let outTime = [23, 59];
      let time = 0;
      
      if (arr[i+1] !== undefined){
        if(arr[i][2] === 'IN' && arr[i+1][2] === 'OUT'){
          outTime = arr[i+1][0].split(':');
        }
      }
      
      time = convertTime(inTime, outTime)
     
      if(obj[arr[i][1]] === undefined){
        obj[arr[i][1]] = time;
      } else { 
        obj[arr[i][1]] += time;
      }
    }
  }

  const result = Object.entries(obj).sort((a, b) => a[0] - b[0]);
  
  const ans = result.map((item)=>{
    let value = item[1]
    if(value <= fees[0]){
      return fees[1]
    } else {
      return fees[1] + (Math.ceil((value - fees[0]) / fees[2]) * fees[3])
    }
  })

  return ans;
}