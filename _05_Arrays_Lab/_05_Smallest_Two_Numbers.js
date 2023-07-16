function smallestTwo(matrix){
    matrix.sort((a, b) => a-b);
    matrix = matrix.splice(0,2);
    console.log(matrix.join(' '));
}
//smallestTwo([3, 6,3,2,6,4,5,6,3,8,33,65,23,45])