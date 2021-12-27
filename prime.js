// A man has to buy 7 floors in a building. Numbered floor 1 to 68.
// Conditions:
// 1. He cannot buy floors with prime number.
// 2. He cannot buy floor number containing prime digit.
// 3. Floor number 1 is reserved for services.


// How many floors are legal?
 
// Answer: 17


// create a array of floors with 68 different values
var floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47 , 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68]

// filter all the numbers out of floors array that are prime numbers
floors = floors.filter((number) => {

  

  if(isNotPrime(number) && number > 1){

// if the number is greater than 9 ie a double digit number the number will be split into two different values which will be checked with the isNotPrime function to see if any of the two values is a prime number
    if(number > 9){
        var numSplit = number.toString().split('') 
      if(isNotPrime(numSplit[0]) && isNotPrime(numSplit[1])) {
        return true
    }
// run if statements if the number is greater than 1 and also if the number is greater than 9 the .split method will split the two values to look for any prime numbers that are in the double digit numbers
  } else {
    return true
  }
  
}});


//create the isNotPrime function that will take in the numbers as a parameter and check to see if the numbers are prime
function isNotPrime(number){

// if the number is less than two and allso greater than or equal to one the if statement will return it
  if(number >= 0 && number < 2){
    return true
  }

// use a for loop with the .floor and .sqrt method to find the square roots of the numbers and then the if statemnt will check to see if there is no remainder after the math is done
  for (var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return true;
  }
}
return false
}

// log the length of the floors array after all the other numbers have been 
console.log(floors.length);