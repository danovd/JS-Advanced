


function diagonalAttack (arr){

    let matrix = [];

    
    // Входящите данни са едномерен масив със стрингове
    // Всеки стринг е поредица числа разделени с интервал
    // Превръщаме масива в матрица с числа. 
    // И имаме готова матрица за работа. 
    while(arr.length > 0){
        matrix.push(arr.shift().split(' ').map(Number));
    }

    // суми на двата диагонала
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - i - 1]; 
    }

    // обикаляме матрицата и поставяме условие, ако двата диагонала 
    // са равни, да ги отпечатва незасегнати, както са си, а
    // останалите елементи да станат еднакви, като сумата на елементите
    // на който и да е от диагоналите (понеже са еднакви като сума)

if(primaryDiagonal === secondaryDiagonal){
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            if((j !== matrix.length - 1 - i) && (j !== i)){
                matrix[i][j] = primaryDiagonal;
            }           
        }
    }
}

// принтиране на матрицата

for(let i = 0; i < matrix.length; i++){
    console.log(matrix[i].join(' '));
}

}











diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);
