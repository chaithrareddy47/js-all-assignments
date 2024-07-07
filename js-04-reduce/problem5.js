// square of numvers

const numbers = [1, 2, 3, 4, 5, 6]

const square = numbers.reduce((acc, curr) => {
    console.log(`acc value is ${acc}`);
    console.log(`current valus is ${curr }`);
    const res = acc + curr * curr;
    return res
}, 0)

console.log(square);