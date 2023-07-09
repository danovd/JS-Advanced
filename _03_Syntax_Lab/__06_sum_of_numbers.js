function sum(num1, num2){
let n1 = Number(num1);
let n2 = Number(num2);
let result = 0;
for (let index = n1; index <= n2; index++) {
    
    result += index;
}
return result;
}
console.log(sum(3, 5));