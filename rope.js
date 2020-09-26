/*
  Rope Class is the constraint that connects each Bob to the Roof
*/

class Rope{
  constructor(bodyA, pointB){
    var options={
      bodyA: bodyA,
      pointB: pointB,
      //pointB:{x:this.offsetX, y:this.offsetY}
    }
    
    this.pointB = pointB;
    this.pointX = bodyA.x;
    this.pointY = bodyA.y - 250;

    this.rope = Constraint.create(options);

    //Add to world
    World.add(world, this.rope);
  }

  display(){
    if(this.rope.bodyA){
    //Define Bodies that are to be connected
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
    
    strokeWeight(2);
    
    stroke("white");
      
    line(pointB.x, pointB.y, pointA.x, pointA.y);
    }
  } 
}