// concatinating string

const words = ['Hello', ' ', 'World',' ', '...', '!', ' ','from',' ', 'Javascript']

const concatinating = words.reduce((acc, curr) => {
    
    const res = acc.concat(curr)
    return res;
},'')
console.log(concatinating);