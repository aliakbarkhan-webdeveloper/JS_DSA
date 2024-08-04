//knapsack is a bag
//Questions: given the weigths and values of N items, put these items in knapsack of capacity W to get total maximum value

function knapsack(arg) {
  let items = [
    { weigth: 10, value: 60 },
    { weigth: 20, value: 100 },
    { weigth: 30, value: 120 },
  ];
  let capacity = 40; //knapsack can hold 50 kg
  //find vales/weight ratio and store it in desending sorted array
//   let fraction = items.sort((a, b) => a.value / a.weigth - b.value / b.weigth);
//   console.log(fraction);
  const knapsack = [];
  let remainingCapacity = capacity;
  for (let item of items) {
    if (item.weigth <= remainingCapacity) {
      knapsack.push(item.value);
      remainingCapacity -= item.weigth;
    } else {
      knapsack.push((item.value / item.weigth) * remainingCapacity);
      remainingCapacity = 0;
    }
  }
  return knapsack.reduce((a, b) => a + b, 0);
}
console.log(knapsack());
 