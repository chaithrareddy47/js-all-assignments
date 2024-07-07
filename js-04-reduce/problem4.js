// maximum numver
const numbers = [6, 2, 8, 3, 10];

const maximum = numbers.reduce((acc, curr) => {
    console.log(`current value is ${curr}`);
    console.log(`value of acc ${acc}`);

    // greates value is stores in accumulatior
    if (curr > acc) {
        console.log(curr);
        return curr;
    } else {
        return acc
    }

}, numbers[0])
console.log(maximum);