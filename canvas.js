var box = document.getElementById("box")
var c = document.getElementById("clear")
var t = document.getElementById("toggle")
var cond = 0;

var ctx = box.getContext("2d")

var clear = function(e){
    ctx.clearRect(0, 0, 500, 500);
    console.log("clear")
};

var toggle = function(e){
    if (cond = 0){
	cond = 1;
    };
    else{
	cond = 0;
    };
    console.log(cond)
};

var draw = function(e){
    ctx.fillStyle = "red";
    ctx.beginPath();
    if (cond = 0){
	ctx.arc(e.clientX, e.clientY, 50, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	console.log("draw a circle")
    };
    else{
	ctx.rect(e.clientX, e.clientY, 50, 50);
	ctx.stroke();
	ctx.fill();
	console.log("draw a circle")
    };
};



c.addEventListerner("clear", click);
t.addEventListerner("toggle", click);
box.addEventListerner("draw", click);
