// You have 100 doors to be painted and 2 painters. 1 starts at one end and paints every other door. The other painter starts at the other end and paints every 3rd door. What door number will they meet at?
 
// Answer: Between 40 and 41 (it doesn’t land perfectly on the same door)


const doorsArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];


function intersect(arr){
  
  for(var i = 0, j = arr.length - 1; i < arr.length, j >= 0; i = i + 2, j = j - 3){
    if(i > j){ 
      // console.log(arr[i] , arr[j])
      var x = (arr[j] / arr[i])

      return arr[i] - x
    }
  }
}
console.log(intersect(doorsArr))