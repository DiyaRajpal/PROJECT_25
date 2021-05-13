class Paper{
	constructor(x,y,r){
		var options={
			isStatic:false,
            restitution:0.3,
			friction:0,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(x, y,(this.r-20)/2,options);
        World.add(world, this.body);
        
		//this.image.scale=0.5;
        
	}
	display()
	{
			
			var pos=this.body.position;	
			push()
			translate(pos.x,pos.y)	
			imageMode(CENTER)
			image(this.image,0,0,this.r,this.r);
			pop()
	}

}