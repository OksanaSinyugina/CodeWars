function sum (numbers) {
    "use strict";
    
    let sumOfNumbers = 0;
    
    numbers.forEach(number => {
        sumOfNumbers += number;
    });
    
    return sumOfNumbers
};

console.log(sum([-2.398]));