// full way
function createRecord(name, population, treasury){
    const city = {};
    city.name = name;
    city.population = population;
    city.treasury = treasury;

    return city;
}

//short way

//function createRecord(name, population, treasury){
//    return {
//        name, population, treasury
//    };
//  }