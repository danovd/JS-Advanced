function ticTac(arr){


function hasWin(field, coordinates){
const [x, y] = coordinates;
if((field[0][y] == field[1][y] == field[2][y]) && field[0][y] && field[1][y] && field[2][y]){
    return true;
}else if((field[x][0] == field[x][1] == field[x][2]) && field[x][0] && field[x][1] && field[x][2]){
    return true;
}else if(((field[0][0] == field[1][1] == field[2][2]) && field[0][0] && field [1][1] && field[2][2]) 
|| ((field[0][2] == field[1][1] == field[2][0]) && field[0][2] && field[1][1] && field[2][0])){
return true;
}else{return false};
}

function printResult(field){
    field.forEach((el) => {
        console.log(el.join('\t'));
    })
}

let gameWon = false;
const playfield = [
    [false, false, false],  
    [false, false, false],
    [false, false, false]
            ];
        let currentPlayerSign = 'X';

  for(let i = 0; i < arr.length; i++){
      let [x, y] = arr[i].split(" ");

      if(playfield[x][y]){
          console.log("This place is already taken. Please choose another!");
      }else{
          playfield[x][y] = currentPlayerSign;
          
         if(hasWin(playfield, [x, y])){
            gameWon = true;  
            console.log(`Player ${currentPlayerSign} wins!`);
              printResult(playfield);
              break;  
         };
         currentPlayerSign = currentPlayerSign == "X" ? "O" : "X";
      }
  }      
if(!gameWon){
    console.log("The game ended! Nobody wins :(");
    printResult(playfield);
}

}