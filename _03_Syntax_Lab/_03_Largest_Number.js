function largest(a, b, c){
    let largest = a; 
    if(a >= b && a >= c){
        largest = a;
    }else if(b >= a && b >= c){
        largest = b;
    }else if(c >= a && c >= b){
        largest = c;
    }   
    console.log("The largest number is " + largest + ".")
}



// 2nd way
 function largest (a, b, c){
    console.log(`The largest number is ${Math.max(a, b, c)}.`)
};

// 3th

function largest (...param){
    console.log(`The largest number is ${Math.max(param)}.`)
};