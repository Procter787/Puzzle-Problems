// There are 100 switches in a room operating 100 bulbs. Initially all switches are off. You are asked to make 100 passes through them, in such a manner that during i th pass all the switches that are multiples of i are toggled (if a switch is off, you switch it on, if it is on, you switch it off). For example, during 10th pass you will toggle switch number 10,20,30….100. After completing 100 passes through the switches how many bulbs are on?
 
// Answer: 10

var switches = 100;

var switchArr = new Array(switches);

for (var i = 0; i < switches; i++) {
  switchArr[i] = false;
}



function onOff (arr){

  var i = 0
  
  // set the first value to true because it will always be on after the first itteration
  arr[0] = true

//create a while loop to loop through 100 
  while(arr.length > i){

// increment by 1 through the loop
    i++;

// j = whatever value you are supposed to find multiples of and when the j = j + i is hit it will keep adding j to i untill the array is complete
     for(var j = i; j < arr.length; j = j + i){

//if j is on change it to off and the opposite if it is off
         if(arr[j] == true){
           arr[j] = false;
         } else {
           arr[j] = true;
         }
    } 
  }

// return the length of the arr and use the filter method to filter out the undesired values
    return arr.filter(Boolean).length
}



console.log(onOff(switchArr))
// console.log(arr)

// for(var i = 0; i < arr.length; i++ ){
   
  // }