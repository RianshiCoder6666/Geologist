class Gold{
	constructor(x,y,height,width) {
	
		var options= {
			'restitution':0.8,
			'friction':6,
            'density':40
		}

		this.x=x;
		this.y=y;
		this.height=height;
        this.width=width;

		this.body=Bodies.rectangle(this.x, this.y, this.height, this.width, options)
		World.add(world, this.body);

	}
	display() {
			var copperpos=this.body.position;		
			push();
			translate(copperpos.x, copperpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("black");
			fill("yellow");
			rect(0,0,this.width,this.height);

			pop();
	}

}