//minimum absolute difference => a-b=b-a
//Question:
//Given two arrays of equal length, pair each element of array 1 to each element of array 2, sum of all paris difference should be minimum
//e.g. [a,b,c],[d,e,f]
//Case1:|a-d|+|b-e|+|c-f|
//Case2:|a-f|+|b-e|+|c-d|
//Case3:|a-e|+|b-d|+|c-f|

function absPair() {
let arrA=[1,2,3];
let arrB=[2,1,3]
arrA.sort();
arrB.sort();
let minDifference=0;
for (let i = 0; i < arrA.length; i++) {
    minDifference+=Math.abs(arrA[i]-arrB[i])
}
    return minDifference
}
console.log(absPair());