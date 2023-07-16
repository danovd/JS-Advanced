function lastK(n, k){
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        arr[i] = 0;
        for(let y = start; y < i; y++){
            
            arr[i] += arr[y]
        }
    }  
    console.log(arr);
    return arr;   

}
lastK(10, 3);

