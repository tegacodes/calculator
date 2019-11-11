colors = ['pink', 'blue', 'green', 'orange'];
fontSize= 45;
let x = 0;
let a = 0;


function setup() {
	var canvas = createCanvas(300,300);
	//canvas.position(10*(width/4),100);
	canvas.parent('sketch-div');


	
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
	strokeWeight(80);
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
	if(x<190907300){
	x=x+73983;
	}else if (x<190907340){
	x=x+13;
	}else if (x<190907340){
	x=x+1;
	}
	noStroke();
	fill(0);
	rectMode(CENTER);
	textSize(fontSize);
	text("$"+nfc(x, 0), 15, height/2+fontSize/2);
	textSize(fontSize/3);
	text('MONTHLY BREAKDOWN', 60, height/2+fontSize/2+20);

}

function windowResized() {
  centerCanvas();
}