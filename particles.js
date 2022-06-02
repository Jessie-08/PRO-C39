class Particles{
    constructor(x,y,r) {
      var options = {
        restitution: 0.4,
        //friction: 0,
        //isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      
this.width = width
this.height = height
this.image = loadImage("tre1.png")
    //   this.color = color (random(0,255), random(0,255), random(0,255))
      World.add(world, this.body);

      
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
       // this.color = color (random(0,255), random(0,255), random(0,255))

       // imageMode(CENTER);
        // noStroke();
        // fill(this.color);
        // ellipseMode(RADIUS);
        image(this.image,0,0,this.width,this.height);
        pop();
       }
    }
  ;