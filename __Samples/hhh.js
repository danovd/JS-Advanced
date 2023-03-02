function validate() {
    let regex = /a/g;
    let match = regex.exec('a');
    console.log(match);

    

/*
function onChange (event){
    console.log(regex.exec(event.target.value));
    if(regex.exec(value)){
        event.target.removeAttribute('class');
        return;
    }

    event.target.className = 'error';
}

*/
}


validate();