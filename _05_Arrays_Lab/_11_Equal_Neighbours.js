function countEquals(matrix){
     let count = 0;   
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i < matrix.length - 1 && matrix[i][j] === matrix[i+1][j]){
                    count++;
            } 
            if(j < matrix[i].length - 1 && matrix[i][j] === matrix[i][j + 1]){
                count++;
            } 
            
        }
    }
    return count;

}
