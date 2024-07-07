// splice

let numbers = [1, 2, 3, 4, 5, 6, 7]

let remove = numbers.splice(1, 2)
console.log(remove);

console.log(numbers);

// adding ellemts 
let num1 = [1, 2, 3, 4, 5]
let add = num1.splice(1, 2, 'a', 'b');

console.log(add);// returns empty array bcos it mofified original array

console.log(num1);

//slice

let num2 = [10, 20, 50, 99, 24]

let sliced = num2.slice(1, 4);
console.log(sliced);

let colors = ["red", "green", "blue", "yellow", "orange"];

let num = colors.splice(-3) // last 3 elements
console.log(num);
console.log(colors);


