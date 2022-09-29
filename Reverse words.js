/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
'use strict';

function reverseWordsRight(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}

function reverseWords(str) {
    let reversedString = '';
    let copyStr = str;
    while(copyStr[0]) {
        if (copyStr.indexOf(" ") != -1) {
            reversedString += reverseWord(copyStr.slice(0, copyStr.indexOf(" "))) + " ";
            copyStr = copyStr.slice(copyStr.indexOf(" ") + 1);
        } else {
            reversedString += reverseWord(copyStr);
            return reversedString;
        }
    }
}

function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;
}


console.log( reverseWords('The quick brown fox jumps over the lazy dog.') );
console.log( reverseWordsRight('The quick brown fox jumps over the lazy dog.') );

