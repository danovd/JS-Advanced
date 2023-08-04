function ex4(arr){

    const result = [];


    arr.forEach((el) => {
       let [name, level, items] = el.split(" / ");
       result.push({
         name,
         level: Number(level),
         items: items ? items.split(", ") : []  
       })     


    });
return JSON.stringify(result);

}


ex4(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

