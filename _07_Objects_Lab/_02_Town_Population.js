function population (townsAsStrings){

    const towns = {};
    for(let data of townsAsStrings){
        const tokens = data.split(' <-> ');
        const name = tokens[0];
        const pop = Number(tokens[1]);

        if(towns[name] == undefined){
            towns[name] = pop;
        }else{
            towns[name] += pop;
        }
    }
    for(const name in towns){
        console.log(`${name} : ${towns[name]}`);
    }
//Second way, with entries:
//    for(const [name, pop] of Object.entries(towns)){
//        console.log(`${name} : ${pop}`);
//    }


}