var shape = class Shape {
    //Initializing an object 
    constructor(color, borderWidth) {
        this.Color = color;
        this.borderWidth = borderWidth;
    }
    //Declaring method 
    detail() {
        document.writeln("Color=" + this.Color + "BorderWidth=" + this.borderWidth)
    }
}