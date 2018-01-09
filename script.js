canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c = canvas.getContext("2d");

d_x = 0;
d_y = 0;

document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 37:
		d_x -= 20;
		break;
		case 38:
		d_y -=20;
		break;
		case 39:
		d_x += 20;
		break;
		case 40:
		d_y += 20;
		break;
	};
};


function Circle(x, y, dx, dy, r){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.r = r;

	this.update = function(){

	this.x += this.dx;
	this.y += this.dy;

	if(this.x + this.r >= innerWidth || this.x - this.r <= 0) {
		this.dx = -this.dx;
	} 

	if(this.y + this.r >= innerHeight || this.y - this.r <= 0) {
		this.dy = -this.dy;
	}

		this.draw();
	}

	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.r,0,2*Math.PI);
		c.stroke();
	}
}


function box(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.update = function(dx, dy){
	this.x += dx;
	this.y += dy;
	this.draw();
	
	};

	this.draw = function(){
		c.beginPath();
		c.rect(this.x, this.y, this.w, this.h);
		c.fillStyle = "black";
		c.fill();
	};
};

var circleArray = [];
for (var i = 0; i < 20; i++) {
	var x = Math.floor(Math.random() * (window.innerWidth -25)+25);
	var y = Math.floor(Math.random() * (window.innerHeight -25)+25);
	var dx = (Math.random() - 0.5) * 10;
	var dy = (Math.random() - 0.5) * 10;

	circleArray.push(new Circle(x,y,dx,dy,20));
}

var box = new box(200,100,50,50);

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth, innerHeight);

	for (var i = circleArray.length - 1; i>=0; i--){
		circleArray[i].update();
	};

	box.update(d_x, d_y);
	d_x = 0;
	d_y = 0;
};

animate();






