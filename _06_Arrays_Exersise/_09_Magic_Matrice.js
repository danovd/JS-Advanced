function magicMatrice(arr){
    let sum = arr[0].reduce((a,b) => a + b);

    for (let i = 0; i < arr[0].length; i++) {

        let colSum = 0;

        for (let j = 0; j < arr.length; j++) {
            colSum += arr[j][i];
        }
        if(colSum != sum){
            return false;
        }
    }
    return true;

}