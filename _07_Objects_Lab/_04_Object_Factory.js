
function factory(library, orders){
    return orders.map(compose);
function compose(order){
    //create empty object
    // copy properties from template
    // compose methods from library for every item in parts
    // return result

    const result = Object.assign({}, order.template);

 //   console.log(result);
 //   console.log(result.name);
 //  console.log(order.parts);
 //console.log(result['print']);

    for(let part of order.parts){
    //    console.log(library[part]);
        result[part] = library[part];
    }
 //   console.log(result);
    return result;
}
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };

  console.log('-------');
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
  console.log(products);
  