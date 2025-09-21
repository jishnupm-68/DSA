// Count the occurrences of each character in a string

function charCounter(str){
    let charCounter = {};
    for(let char of str){
        if(charCounter[char]) charCounter[char]++;
        else charCounter[char] = 1;
    }
    return charCounter;
}


console.log(charCounter("hello world"));