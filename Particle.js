class Particle {

   constructor(x, y, radius, options, maxsides) {
      var options = {
         isStatic: false,
         restitution: 0.3,
         friction: 0.5,
         density: 1.2,
      }
      this.radius = 7.5;
      this.color = "yellow";
      this.body = Bodies.circle(x, y, this.radius, options, 0);
      
      World.add(world, this.body);

   }

   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);

      ellipse(0, 0, this.radius, this.radius);

      pop();
      
   }





}