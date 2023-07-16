function biggerHalf(arr){
 let result = arr.sort((a, b) => a - b);
 result = result.splice(result.length/2);   
 return result;
 //console.log(result);
}
// biggerHalf([3,1,5,7,5]);