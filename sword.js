/** 
 * 100 people stand in a circle in order 1 to 100. No. 1 has a sword. He kills the next person (i.e. No. 2) and gives the sword to the next living person (i.e. No. 3). All people do the same until only 1 survives. Which number survives to the end?
 
Answer: 73
*/


//set swordCircleArray to 1-100
const swordCircleArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

//create the swordCircle functin that takes the array as a parameter
function swordCircle(arr) {

//set var i to equal 0 so that it knows where to start
  var i = 0;

//set up the while loop that will loop through the array as long as the integer is greater than 1
  while(arr.length > 1){

// increment by 1 while going through the while loop
    i++;

// use the modulus operator as the circle gets smaller and smaller
    i = i % arr.length

// use arr.splice to cut out the people that are killed in the array each time
    arr.splice(i, 1)
  }
  return arr

}
console.log(swordCircle(swordCircleArray))
// console.log(swordCircleArray.filter(swordCircle));
