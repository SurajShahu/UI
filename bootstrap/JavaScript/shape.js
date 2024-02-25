class Shape {
    //Initializing an object 
    constructor(color, borderWidth) {
        this.Color = color;
        this.borderWidth = borderWidth;

    }
    //Declaring method 
    detail() {
        document.writeln("Color=" + this.Color + "<br> BorderWidth = "+this.borderWidth+"")
 }

}
//passing object to a variable 
var s1 = new Shape("Red", 4);
s1.detail(); //calling method


