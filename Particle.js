class Particle {

   constructor(x, y, radius) {
      var options = {
         isStatic: false,
         restitution: 0.3,
         friction: 0.5,
         density: 1.2,
      }
      this.radius = radius;
      this.color = color(random(0,255), 128, 125);
      this.body = Bodies.circle(x, y, this.radius, options);
      World.add(world, this.body);

   }

   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      
      
      push();
     // translate();
     // rotate(angle);
      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius);
      pop();
      
   }





}