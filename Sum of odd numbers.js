/*
Given the triangle of consecutive odd numbers:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
1 -->  1
2 --> 3 + 5 = 8
*/
'use strict';

function rowSumOddNumbers(n) {
	let sum = 0;
    let number = 1;

    for (let i = 1; i <= n; i++) {
        sum = 0;
        if (i == 1) {
            sum = number;
            continue;
        }
        for (let j = 1; j <= i; j++) {
            number += 2;
            sum += number;
        }
    }
       
    return sum;
}

console.log( rowSumOddNumbers(42) );