function sorting(arr){
arr = arr.sort((a, b) => {
    if(a.length > b.length){
        return 1;
    }else if(a.length < b.length){
        return -1;
    }
    return a.localeCompare(b);
});
    return arr.join("\n");
}
//
//console.log(sorting(['Isacc', 
//'Theodor', 
//'Jack', 
//'Harrison', 
//'George']
//));