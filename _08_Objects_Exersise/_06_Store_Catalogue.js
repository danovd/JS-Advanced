function ex6 (arr){
   let productCatalogue = {};
    arr.forEach((el) => {
        let[productName, price] = el.split(" : ");
        price = Number(price);

        const index = productName[0];   // First letter of the word
        
        if(!productCatalogue[index]){
         //   console.log(index);
            productCatalogue[index] = {}
        }
        productCatalogue[index][productName] = price;
    });
//console.log(productCatalogue);
    const sorted = Object.keys(productCatalogue).sort((a,b) => a.localeCompare(b));
   // console.log(sorted);

    for(const key of sorted){
        console.log(key);    
        
        
        let products = Object.entries(productCatalogue[key])
            .sort((a, b) => a[0].localeCompare(b[0]));
        
        products.forEach(e => {
            console.log("  " + e[0] + ": " + e[1]);
        });
          //  console.log(products);    
    }

}


ex6(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);