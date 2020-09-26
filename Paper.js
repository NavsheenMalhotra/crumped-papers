class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.body = Bodies.circle(x,y,30,options);
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill('red');
      strokeWeight(3);
      stroke('yellow');
      ellipseMode(RADIUS)
      ellipse(0,0,this.width,this.height);
      pop();
    }
  }

