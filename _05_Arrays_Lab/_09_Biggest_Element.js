function findBiggest(matrix){

    let bigest = Number.MIN_SAFE_INTEGER;
    for(let num of matrix){
        let localBigest = Math.max(...num);
        bigest = Math.max(bigest, localBigest);
       
        // for(let num2 of num){
       //     bigest = Math.max(bigest, num2);
      //  }
    
    }
    
  //  console.log(bigest);
return bigest;
}
//findBiggest([[3,5], [5,7,2], [44, 22, 67, 11], [33, 23]]);