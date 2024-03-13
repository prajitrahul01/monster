// Rest and Spread
let a=10, b=11, c=12;
let [...rest] = [a,b,c]; // Rest
console.log(...rest);

let arr1 = [1,2,3,4,5]
let arr2 = [7,8,9,0]
let spread =[...arr2, ...arr1]
 console.log(spread)
