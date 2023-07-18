function sortt(arr){
    let result = [];
   arr = arr.sort((a, b) => a - b);
   let num = 0; 
   for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            result.push(arr[num]);
            num++;
        }else{  
           result.push(arr[arr.length - num]);
        }

    }

    return result;
}
//console.log(sortt([1,2,3,4,5,8, 88]));

// 2 way - with while loop
//    ... 
//    while(arr.length != 0){
//        result.push(arr.shift(), arr.pop());
//    }