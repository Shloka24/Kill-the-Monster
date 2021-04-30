class Monster {
    constructor(x, y, radius){
       var options = {
           isStatic: true
       }
       this.r = radius;
       this.body = Bodies.circle(x, y, this.r, options);
       this.image = loadImage("monster.png");
       World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0,0,350,300);
        pop();
    }
}