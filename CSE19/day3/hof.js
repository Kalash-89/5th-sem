const arr=[1,2,3,4,5,6,7,8,9,10];
const multipleofThree = arr.map((num) => num*3);
console.log(multipleofThree);
const divisiblebyfive = arr.filter((num) => num%5===0);
console.log(divisiblebyfive);
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);