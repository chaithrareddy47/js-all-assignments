const numbers = [1, 3, 5, 6, 7, 8, 7]

function findNumber(num) {
    for (let i = 0; i < num.length; i++){

        if (num[i] === 2) {
           return `Number ${num[i]} found`
        }
    }
    return `Number  is not found`
}

console.log(findNumber(numbers));