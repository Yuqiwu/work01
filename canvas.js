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
}

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
}

stop.addEventListener("click", stop);
box.addEventListener("click", draw);

