// const isPrime = require("./prime.js");

var isPrime = (num) => {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num > 1;
}


var  addEvens = 0; // number of even numbers
var addOdds  = 0; // ""     "" odd  numbers
var addFizz  = 0; // ""     ""  fizz numbers
var addBuzz  = 0; // ""     ""  buzz numbers
var addFizzBuzz = 0; // ""  "" fizz numbers
var addprime=0;
// call for helper function
let helpers = (min,max) => {

    var array = [];  // initialise array called array

    for (var i = min; i <= max; i++) {
        addArr = []

        addArr.push(i);
        if (i%3 == 0 && i%5 == 0) {
           addArr.push('FizzBuzz'); // loop to test for fizzbuzz
        }
        if (i%3 == 0 && i%5 != 0) { // continue to test if its fizz
          addArr.push('Fizz')
        }
        if (i%3 != 0 && i%5 == 0) { //  test for again for buzz and add in [addArr]
          addArr.push('Buzz')
        }
        if (isPrime(i)) {       //
          addArr.push('Prime')
          // addArr.push('Fizz')
        }
        if (i%3 != 0 && i%5 == 0) { // test again for buzz and add in [addArr]
          addArr.push('Buzz')
        }
        if (i%2 == 0) {         // test for even and add in [addArr]
          addArr.push('Even')
        }
        else {
          addArr.push('Odd')   // else is odd and add in [addArr]
        }

        array.push(addArr); // After looping all, add in [array]


// check if the following below include and continue counting for how many times they appear
        if (addArr.includes('FizzBuzz')) {
          addFizzBuzz++;
        }
        if (addArr.includes('Buzz')) {
          addBuzz++;
        }
        if (  addArr.includes('Fizz')) {
          addFizz++;
        }
        if (addArr.includes('Odd')) {
          addOdds++;
        }
        if (addArr.includes('Even')) {
          addEvens++;
        }
        if (addArr.includes('Prime')) {
          addprime++;
        }



    }

    console.log('evens are------' + addEvens);  // returns count for number of even
    console.log('odds are------' + addOdds);   // returns count for number of odd
    console.log('Fizz are-----' + addFizz);    // returns count for number of fizz
    console.log('Buzz are----' + addBuzz);     // returns count for number of buzz
    console.log('FizzBuzz are----' + addFizzBuzz);  // returns count for number of fizzbuzz
    console.log('prime are----' + addprime);
    return array;   // print [array]
}


console.log(helpers(0,100));
