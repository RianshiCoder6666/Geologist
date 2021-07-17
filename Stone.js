class Stone{
	constructor(x,y,height,width) {
	
		var options= {
			'restitution':0.8,
			'friction':0.9,
            'density':12
		}

		this.x=x;
		this.y=y;
		this.height=height;
        this.width=width;

		this.body=Bodies.rectangle(x,y,height,width,options)
		World.add(world, this.body);

	}
	display() {
			var stonepos=this.body.position;		
			push();
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("black");
			fill("black");
			rect(0,0,this.width,this.height);

			pop();
	}

}