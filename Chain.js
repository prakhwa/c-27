class Chain{
    constructor(bodyA,bodyB){
 var options={
      bodyA:bodyA,
       bodyB:bodyB,
        lenght:10, 
        stiffness:1 
    } 
    this.chain=Constraint.create(options);
     World.add(world,this.chain)

    }
    display(){strokeWeight(3);
         line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)}

}