function ex8 (width, height, color){

    class Rectangle {
        constructor(width, height, color){
           this.width = width;
           this.height = height;
           // Първа буква главна и следващите каквито са подадени 
           this.color = color[0].toUpperCase() + color.slice(1);     
        }
        calcArea(){
            return this.height * this.width;
        };
    }
    return new Rectangle(width, height, color);
   
}