class Copper{
	constructor(x,y,r) {
	
		var options= {
			'restitution':0.8,
			'friction':1,
            'density':20
		}

		this.x=x;
		this.y=y;
		this.r=r;

		this.body=Bodies.circle(x,y,(this.r)/2,options);
		World.add(world, this.body);

	}
	display() {
			var copperpos=this.body.position;		
			push();
			translate(copperpos.x, copperpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("black");
			fill("#DC7F64");
			ellipse(0,0,this.r,this.r);

			pop();
	}

}