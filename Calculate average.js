/*
    Write a function which calculates the average of the numbers in a given list.

    Note: Empty arrays should return 0.
*/

function find_average(array) {
    if (array.length > 0) {
         averageNumber = 0;
         array.forEach(elem => averageNumber += elem);
         averageNumber = averageNumber/array.length;
         return averageNumber;
     }
    return 0;
 }

console.log(find_average([]));