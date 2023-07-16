function extractNumbers(num){
    
    let strNum = num.toString(); // strNum = String(num);
    let result = parseInt(strNum[0]);   //sum

    let isTheSame = true;
    

    for (let i = 1; i < strNum.length; i++) {
       result += parseInt(strNum[i]);
        if(strNum[i] != strNum[i - 1]){
            isTheSame = false;
        }
    }
    
    console.log(isTheSame);
    console.log(result);
    
   

}

extractNumbers(100);
