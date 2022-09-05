/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then 
it should replace the missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
function solution(str) {
    let arrayOfPairs = [];
    let newString = '';
    for (let i = 0; i < str.length; i += 2) {
        if (str[i+1]) {
            newString = str[i] + str[i+1];
            arrayOfPairs.push(newString);
        } else {
            newString = str[i] + '_';
            arrayOfPairs.push(newString);
        }
    }
    return arrayOfPairs
}

console.log( solution("abc") );