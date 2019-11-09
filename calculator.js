colors = ['red', 'blue', 'green', 'orange'];
fontSize= 35;
let a = 0.;


function setup() {
	createCanvas(300,300);

	


	
	// #let s2a = map(app.interestPrinciple,0, app.monthly,-HALF_PI,TWO_PI-HALF_PI)
	// let s2a = 0;
	// arc(width/2, height/2, width-80, height-80, -HALF_PI+a, s2a+a);
	// stroke(colors[1]);
	// arc(width/2, height/2, width-80, height-80, s1b, s2b);
	// stroke(colors[2]);
	// arc(width/2, height/2, width-80, height-80, s3a, s3b);



}



function draw(){
	background(255);
	diagram();
	addText();

}

function diagram(){


	noFill();
	strokeWeight(60);
	stroke(colors[0]);
	stroke(colors[0]);
	arc(width/2, height/2, width-80, height-80, -HALF_PI+a, 0+a);
	stroke(colors[1]);
	arc(width/2, height/2, width-80, height-80, 0+a, PI+a);
	stroke(colors[2]);
	arc(width/2, height/2, width-80, height-80, PI+a, TWO_PI-HALF_PI+a);

	a=a+0.005;

}

function addText(){
	noStroke();
	fill(0);
	rectMode(CENTER);
	textSize(fontSize);
	text("$190,907,349", width/6, height/2+fontSize/2);
	textSize(fontSize/3);
	text('MONTHLY BREAKDOWN', width/3.5, height/2+fontSize/2+20);

}