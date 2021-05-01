class Paper{
	constructor(x,y,w,h){
		var options={
			isStatic:false,
            restitution:0.3,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.w=30;
        this.h=30;
		this.body=Bodies.rectangle(x, y,30,30, options);
        World.add(world, this.body);
        this.image=loadImage("paper.png");
        
	}
	display()
	{
			
			var pos=this.body.position;		
			image(this.image,pos.x,pos.y,this.w,this.h)
	}

}