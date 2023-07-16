function negativeOfPossiive(numbers){
const result = [];
for(let num of numbers){
    if(num < 0){
        result.unshift(num); // Put item in front of our new array
    }else{
        result.push(num);
    }
}
console.log(result.join('\n'));
}