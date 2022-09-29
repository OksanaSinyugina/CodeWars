/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    const vowels = 'aeoiu';
    let value = 0;
    for (let symbol of str) {
        if (vowels.includes(symbol)) {
            value += 1;
        }
    }
    return value;
}

console.log( getCount("abracadabra") );