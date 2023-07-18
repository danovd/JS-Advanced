function func(arr, n){
   const result = [];
    for(let i = 0; i < arr.length; i += n){
        result.push(arr[i]); 
    }
    return result;
}


/// second way

function func2(arr, n){
    return arr.filter((element, index) => index % step == 0);

}