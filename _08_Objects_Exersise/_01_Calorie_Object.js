function convertArrToObject(arr){
    const obj = {};

    for(let i = 0; i < arr.length; i+=2){
        obj[arr[i]] = Number(arr[i + 1]);
    }

    console.log(obj);
}


//convertArrToObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);