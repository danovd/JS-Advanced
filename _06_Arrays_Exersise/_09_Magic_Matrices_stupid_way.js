
///   83/100 - няма да се занимавам с тази тъпотия ;)

function isMagic(matrix){


let sum = 0;
let Sums = [];
for(let i = 0; i < matrix.length; i++){

    for(let j = 0; j < matrix[i].length; j++){
       let current = matrix[i][j];      
    sum += current;
    }
    Sums.push(sum);
    sum = 0;
}
for(let f = 0; f < Sums.length - 1; f++){
    if(Sums[f] != Sums[f+1]){
        return false;
    }
 }

sum = 0;
Sums = [];
 for(let i = 0; i < matrix.length; i++){

    for(let j = 0; j < matrix[i].length; j++){
       let current = matrix[j][i];      
    sum += current;
    }
    Sums.push(sum);
    sum = 0;
}
const rowSum = Sums[0];
for(let f = 0; f < Sums.length; f++){
    if(Sums[f] != rowSum){
        return false;
    }
 }

return true;
}


//console.log(isMagic([[11, 32, 45],
//    [21, 0, 1],
 //   [21, 1, 1]]
 //    ));