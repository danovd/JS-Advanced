function ex5(arr){

    let catalogue = {};

    arr.forEach((el) => {
        let [town, product, price] = el.split(' | ');
        price = Number(price);
        //  Simple town; Simple product; 1000
        // if(!catalogue[product])... == if(catalogue[product] == undefined)
        
        if(!catalogue[product]){
                catalogue[product] = {};
        }
       // console.log(catalogue[product]);
        catalogue[product][town] = price;
        
      //  console.log(catalogue);
     //   console.log(catalogue[product]);
     //   console.log(catalogue[product][town]);
    });

// Access the value, which is object
//  console.log(catalogue['Orange']);

// Access the value of the object inside 
 //console.log(catalogue['Orange']);   
 

for(const prod in catalogue){
   // prod == 'Sample product', 'Orange', 'Peach', 'Burger' - 4 total
   // example of full consist: 'Sample product' : {'Sample town' : 1000, 'New York' : 1000.1} 
    
  
    const sorted = Object.entries(catalogue[prod]).sort((a,b) => a[1] - b[1]);
    // Sorting by 1-st criteria in the object. They are two. 0 is key, 1 is value.
    // So, sorting by 1 means Sort 1000 in Sample town vs 1000.1 in New York.
    // a[1] - b[1] means taking the smallest - 1000; b[1] - a[1] - the opposite, so - 1000.1
       
   // console.log(sorted[0][0]);
    
    //console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
    
}
// out of context, test with specific name:
console.log('type of \'catalog[Orange]\' is  ' + typeof catalogue['Orange']);
console.log(catalogue['Orange']);

const ttt = Object.entries(catalogue['Orange']);
console.log('\catalogue[\'Orange\'] to object is  ' + ttt);
console.log('-----')

const sorted = Object.entries(catalogue['Orange']).sort((a,b) => a[1] - b[1]);
console.log(sorted);
console.log('---------')

console.log('type of \'sorted\' is  '  + typeof sorted);
console.log(sorted[0]);
console.log(sorted[0][0] + '   ' + sorted[0][1]);
console.log(sorted[1]);
console.log(sorted[1][0] + '   ' + sorted[1][1]);



//const obj = Object.assign({}, sorted);
//console.log(obj);

//console.log(sorted[0][0]);
//const test = Object.entries(catalogue['Sample product']);
//console.log(test);
    
}


ex5(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);