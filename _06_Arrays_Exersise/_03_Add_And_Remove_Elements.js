function adAndRemove(arr){
      let number = 1;
      let result = [];
      
      arr.forEach((el) => {
          if(el == 'add'){
              result.push(number);
          }else{
              result.pop();
          }
          number++;
      });
      if(result.length == 0){
          console.log("Empty");
      }else{
          console.log(result.join('\n'));
      }
}