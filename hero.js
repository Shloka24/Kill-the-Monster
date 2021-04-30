class Hero {
    constructor(x, y, radius){
       var options = {
           isStatic: false,
           density: 1.2
       }
       this.r = radius;
       this.body = Bodies.circle(x, y, this.r, options);
       this.image = loadImage("superhero.png");
       World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0,0,250, 170);
        pop();
    }
}