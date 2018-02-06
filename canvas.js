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
box.addEventListener("click", draw);
