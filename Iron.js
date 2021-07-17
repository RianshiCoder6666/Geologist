class Iron{
	constructor(x,y,height,width) {
	
		var options= {
			'restitution':0.8,
			'friction':3,
            'density':30
		}

		this.x=x;
		this.y=y;
		this.height=height;
        this.width=width;

		this.body=Bodies.rectangle(this.x, this.y, 40, 40, options)
		World.add(world, this.body);

	}
	display() {
			var ironpos=this.body.position;		
			push();
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("black");
			fill("brown");
			rect(0,0,this.width,this.height);

			pop();
	}

}