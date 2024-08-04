//find number minimumnotes/coin to change a value

function coin(amount) {
  let coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000, 5000];
  //sorting in descending order
  coins.sort((a, b) => b - a);
  let count = 0;
  let ans = [];
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      while (coins[i] <= amount) {
        count++;
        ans.push(coins[i]);
        amount -= coins[i];
      }
    }
  }
  return ans;
}
console.log(coin(1340));
