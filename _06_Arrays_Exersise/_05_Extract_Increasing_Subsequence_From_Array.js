function increasingSequence(arr){
    let biggest = Number.MIN_SAFE_INTEGER;
    const result = arr.filter((el) => {
        if(el >= biggest){
            biggest = el;
            return true;
        }
        return false;
    })
    return result;
}









// FOREACH WAY
function forEachWay(arr){
    let big = Number.MIN_SAFE_INTEGER;
    const res = [];
    arr.forEach((element) => {
    if(element >= big){
        res.push(element);
        big = element;
    }
});
return res;
}





console.log(forEachWay([3,5,2,4,6,7,3,7,99,88,9]));







//Reduce way
function reduceWay(arr){
arr.reduce((accumulated, current) =>{
    if(current >= biggest){
        biggest = current;
        accumulated.push(current);
    }
    return accumulated;
}, result)
return result;
}