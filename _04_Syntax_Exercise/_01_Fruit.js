function calculate(fruit, weight, money){
// weight in grams
let weightInKilograms = (weight / 1000);
let moneyNeeded = weightInKilograms * money;
console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}