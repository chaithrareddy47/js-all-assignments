// sum of numbers

const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((acc, curr, index) => {
    console.log(`stores initial value ${acc}, ${index}`);

    console.log(`current values ${curr}`);

    const res = acc + curr;

    return res
}, 0)

console.log(sum);