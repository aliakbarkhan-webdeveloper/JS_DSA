function even(arr) {
  for (let i = 0; i <= arr.length - 3; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
      return true;
    }
    // console.log(arr[i],arr[i+1],arr[i+2]);
  }
  return false;
}

let Even = even([2, 3, 4, 5, 7, 12, 1, 3, 12]);
console.log(Even);
