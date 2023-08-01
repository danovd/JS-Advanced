function factory(library, orders){
    const result = [];

    for(let order of orders){
        // Create empty object and copy properties from template
        const device = Object.assign({}, order.template);
     //   console.log(device);
     //    device['ee'] = 'rr';
     //    console.log(device);   
        // Compose methods from library for every item in parts

    for(let part of order.parts){
     //   device['uuu'] = '55';
     //   console.log(device.uuu);
        device[part] = library[part];
    //    console.log(device[part]);
    }    

    console.log(device);
    // Save result
    result.push(device);
    }
   
    return result;
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






  ///////  По-разумен начин за решаване

  function factory1(library, list){
    return list.map(order => {
      const object = Object.assign({}, order.template);

      for(let part of order.parts){
        object[part] = library[part];
      }
      return object;
    })


  }
