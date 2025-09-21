//Replace each alphabet with one at n-th position.
//input contains only uppercase and lowercase alphabets

function replaceWithNthAlpha(str, n) {
    result =""
    for(let letter of str){
        if(/[a-z]/.test(letter)){
            let charCode = (letter.charCodeAt(0)+n-97)%26 +97
            result += String.fromCharCode(charCode)
        }else if(/[A-Z]/.test(letter)){
            let charCode = (letter.charCodeAt(0)+n-65)%26 +65   
            result += String.fromCharCode(charCode)
        }else result += letter
        
    }
    return result;
}

console.log(replaceWithNthAlpha("abc324ABC", 55)) // cde