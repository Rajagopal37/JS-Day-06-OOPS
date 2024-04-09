
class Circle {
    constructor(radius=1.0,color="red"){
        this.radius = radius;
        this.color = color; 
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color=this.color;
    }
    toString(){
        return `Circle[radius=${this.radius},color=${this.color}]`
    }
    getArea(){
        return ( Math.PI * this.radius * this.radius  );
    }
    getCircum(){
        return ( 2 * Math.PI * this.radius )
    }
}

let circle = new Circle (5, "yellow");

console.log("details of Circlr", circle)
document.getElementById("2a").innerHTML = "details of Circle : " + circle

console.log("Color of the circlr is", circle.getColor())
document.getElementById("2b").innerHTML = "Color of the circle : " + circle.getColor()


console.log("Radius of the circle is", circle.getRadius())
document.getElementById("2c").innerHTML = "After Set Radius of the circle : " + circle.getRadius()


console.log("Area of the circle is" ,circle.getArea());
document.getElementById("2d").innerHTML = "Area of the circle is " + circle.getArea()

console.log("Circumference of the circle is", circle.getCircum());
document.getElementById("2e").innerHTML = "Circumference of the circle is " + circle.getCircum()