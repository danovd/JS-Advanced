function square(n){

let string = ""

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) { 
    if(j < n-1){
        string += "* "
    }else{
        string += '*'
    }
  }
  
  string += "\n"
}

console.log(string)
}
