function solution(book_time) {
  let obj = {};

  book_time.sort();
  book_time.forEach((thisTime, idx) => {
    let [start, end] = thisTime;
    let flag = false;

    if (idx === 0) {
      obj[1] = thisTime.join("@");
    } else {
      Object.entries(obj).forEach(([key, value], objIdx) => {
        let endTime = value.split("@").at(-1);

        let convertEndTime = new Date("2023-12-28T" + endTime + ":00");
        convertEndTime = convertEndTime.setMinutes(
          convertEndTime.getMinutes() + 10
        );

        let convertThisStart = new Date("2023-12-28T" + start + ":00");
        if (convertEndTime <= convertThisStart && !flag) {
          flag = true;
          obj[objIdx + 1] = value + "@" + thisTime.join("@");
        }
      });

      if (!flag) {
        let len = Object.entries(obj).length + 1;
        obj[len] = thisTime.join("@");
      }
    }
  });

  return +Object.keys(obj).at(-1);
}