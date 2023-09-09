function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = Number(num1) + Number(num2);
    

    // Може и без тази проверка, но е препоръчителна
    // Ако резултата не е число, да изкара на екрана
    // съответното съобщение
    /*
    if(Number.isNaN(result)){
        alert('Please enter numbers!');
    }else{
        document.getElementById('sum').value = result;
    }
    */

    document.getElementById('sum').value = result;
}
