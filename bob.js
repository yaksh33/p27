class Bob{
    constructor(x,y,radius){

        var options ={
            isStatic:false,

            'restitution':1,
            'friction':0.5,
            'density':1
           

        }
        
       
        
        this.body = Bodies.circle(x,y,radius/2,options);
       this.radius = radius
        World.add(world,this.body)

    }


    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}