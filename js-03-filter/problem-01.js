// finding number is grater than 2

const number = [1, 3, 2 , 5, 7,  0, 10]

const greaterNumber = number.filter((num) => {
    const res = num > 2;
    return res
})

console.log(number);
console.log(greaterNumber);

// filtering words larger than five

const str = ['kiwi', 'apple', 'mango', 'grapes', 'orange']

const filteringWords = str.filter((str) => {
    const res = str.length >= 5;
    return res
})

console.log(filteringWords);

// filterind word with specific letter

const animals = ['cat', 'dog', 'zebra', 'horse', 'cow']

const filterAnimals = animals.filter((str) => {
    const res = str.startsWith('c');
    return res;
})

console.log(filterAnimals);

// filter even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => {
    const res = num % 2 === 0;
    return res;
})
console.log(evenNumbers);

// sum of numers
 const scores = [65, 72, 85, 93, 60, 77];
const highScore = scores.filter((score) => {
    return score > 70
}) 

console.log(highScore);