
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
console.log(circle)
console.log(circle.getColor())
console.log(circle.getRadius())
console.log(circle.getArea());
console.log(circle.getCircum());