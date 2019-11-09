colors = ['red', 'blue', 'green', 'orange'];
fontSize= 35;


function setup() {
	createCanvas(300,300);
	noStroke();
	rectMode(CENTER);
	textSize(fontSize);
	text('$190,907,349', width/6, height/2+fontSize/2);
	textSize(fontSize/3);
	text('MONTHLY BREAKDOWN', width/3.5, height/2+fontSize/2+20);

	noFill();
	strokeWeight(60);

	stroke(colors[0]);
	arc(width/2, height/2, width-80, height-80, 0, HALF_PI);
	stroke(colors[1]);
	arc(width/2, height/2, width-80, height-80, HALF_PI, PI);
	stroke(colors[2]);
	arc(width/2, height/2, width-80, height-80, PI, TWO_PI);



}



function draw(){


}