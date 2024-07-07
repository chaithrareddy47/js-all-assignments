// checking array conatin specific element

const numbers = [1, 2, 3, 4, 5];

const includesNum = numbers.includes(5)
console.log(includesNum);

// checking stinh
const fruits = ["apple", "orange", "banana", "grape"];


const str = fruits.includes('oranges');
console.log(str);

// checking non exist number
const num = [10, 3, 4, 7, 8, 6]

const checkNum = num.includes(9);
console.log(checkNum);

//checking empty array

const emptyarr = []
const isEmpty = emptyarr.includes('something')
console.log(isEmpty);