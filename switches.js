// There are 100 switches in a room operating 100 bulbs. Initially all switches are off. You are asked to make 100 passes through them, in such a manner that during i th pass all the switches that are multiples of i are toggled (if a switch is off, you switch it on, if it is on, you switch it off). For example, during 10th pass you will toggle switch number 10,20,30….100. After completing 100 passes through the switches how many bulbs are on?
 
// Answer: 10

var switches = 100;

var switchArr = new Array(switches);

for (var i = 0; i < switches; i++) {
  switchArr[i] = false;
}



function onOff (arr){

  var i = 0
  
  // set the first value to true because it will always be true after the first itteration
  arr[0] = true


  while(arr.length > i){
    i++;
     for(var j = i; j < arr.length; j = j + i){
         if(arr[j] == true){
           arr[j] = false;
         } else {
           arr[j] = true;
         }
    } 
  }
    
    return arr.filter(Boolean).length
}



console.log(onOff(switchArr))
// console.log(arr)

// for(var i = 0; i < arr.length; i++ ){
   
  // }