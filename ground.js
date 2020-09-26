class Ground {
    constructor() {
      var options = {
        isStatic: true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
      this.body = Bodies.rectangle(600, 890, 1200, 20, options);
      this.width = 1200;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill('yellow');
      strokeWeight(3);
      stroke('yellow');
      rect(0, 0, this.width, this.height);
      pop();
    }
  }