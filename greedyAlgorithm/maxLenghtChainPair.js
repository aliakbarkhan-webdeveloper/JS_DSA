//question:
//given n numer of pairs, 1st number is smaller than the 2nd, next pair can come in a way if next pair's 1st is bigger than current naxt
//find longest chain
function maxChainLength() {
  let pairs = [
    [5, 24],
    [39, 60],
    [27, 40],
    [5, 28],
    [50, 90],
  ];

  //sorting pairs
  pairs.sort((a, b) => a[1] - b[1]);

  let maxLength = 1;
  let prevEnd = pairs[0][1];

  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i][0] > prevEnd) {
      maxLength++;
      prevEnd = pairs[i][1];
    }
  }

  return maxLength;
}
console.log(maxChainLength());
