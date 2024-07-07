// concating number

const arrays = [[1, 2], [3, 4], [5, 6],];

const concatArr = arrays.reduce((acc, cur) => {
    console.log(acc);
    const res = (acc.concat(cur))
    return res
},[])

console.log(concatArr);

