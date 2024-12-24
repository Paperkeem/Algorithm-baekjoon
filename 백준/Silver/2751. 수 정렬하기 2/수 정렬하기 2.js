const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = +input[0];
const arr = [];
const convert = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = +input[i];
}

function merge(st, en) {
  let mid = Math.floor((st + en) / 2);
  let head1 = st;
  let head2 = mid;

  for (let i = st; i < en; i++) {
    if (head2 == en) {
      convert[i] = arr[head1++];
    } else if (head1 == mid) {
      convert[i] = arr[head2++];
    } else if (arr[head1] <= arr[head2]) {
      convert[i] = arr[head1++];
    } else {
      convert[i] = arr[head2++];
    }
  }

  for (let i = st; i < en; i++) {
    arr[i] = convert[i];
  }
}

function merge_sort(st, en) {
  if (en == st + 1) {
    return;
  }

  let mid = Math.floor((st + en) / 2);
  merge_sort(st, mid);
  merge_sort(mid, en);
  merge(st, en);
}

merge_sort(0, n);

console.log(arr.join("\n"));