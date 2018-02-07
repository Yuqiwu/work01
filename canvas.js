<<<<<<< HEAD
var box = document.getElementById("box");
var ctx = box.getContext("2d");
var stop = document.getElementById("stop");
var requestID;


ctx.fillStyle = "red";

var clear = function(){
    ctx.clearRect(0, 0, 500, 500);
}

var stop = function(){
    window.cancelAnimationFrame( requestID );
};

var draw = function(){
    r = 0;
    if (r == 250){
	shrink();
    }
    if (r == 0){
	grow();
    }
    window.cancelAnimationFrame( requestID );
    var grow = function(){
	clear();
	ctx.beginPath();
	ctx.arc(250, 250, x, 0, 2 * Math.PI);
	ctx.fill();
	x++;
    }
    var shrink = function(){
	clear();
	ctx.beginPath();
	ctx.arc(250, 250, x, 0, 2 * Math.PI);
	ctx.fill();
	x--;
    }
};



stop.addEventListener("click", stop);
=======
var box = document.getElementById("box")
var ctx = box.getContext("2d")
var c = document.getElementById("clear")
var t = document.getElementById("toggle")
var cond = 0;

var clear = function(e){
    ctx.clearRect(0, 0, 500, 500);
    console.log("clear");
}

var toggle = function(e){
    if (cond == 0){
	cond = 1;
    }
    else{
	cond = 0;
    }
    console.log(cond);
}

var draw = function(e){
    ctx.fillStyle = "red";
    if (cond == 0){
	ctx.beginPath();
	ctx.arc(e.clientX - 8, e.clientY - 51, 15, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	console.log("draw a circle");
    }
    else{
	ctx.fillRect(e.clientX - 23, e.clientY - 66, 30, 30);
	console.log("draw a rectangle");
    }
    console.log("x = " + e.clientX);
    console.log("y = " + e.clientY);
}



c.addEventListener("click", clear);
t.addEventListener("click", toggle);
>>>>>>> 545f081cd3ad6e063aa9926e1edffe3797cf7a5e
box.addEventListener("click", draw);
