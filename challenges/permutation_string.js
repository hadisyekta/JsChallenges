
function numPermutation(strWord){

    if (strWord.length ===1){
        return 1
    }
    // console.log(strWord.slice(1)); ello
    // console.log(strWord.slice(2)); llo
    return strWord.length *= numPermutation(strWord.slice(1))
}

console.log(numPermutation("hello"))