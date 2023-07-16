function previousDate(year, month, day){
    
    let date = new Date(`${year}-${month}-${day}`);
    
    date.setDate(date.getDate() - 1);
 // console.log(date);
 
    console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
}




previousDate(2020, 1, 1);