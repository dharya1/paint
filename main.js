var mouseevent="empty";
var color="Red";
var width=2;
canvas=document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("Width_line").value;
radius=document.getElementById("radius").value;

mouseevent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    var currentx = e.clientX - canvas.offsetLeft;
    var currenty = e.clientY - canvas.offsetTop;
    if(mouseevent=="mousedown"){
        console.log("Current position of x and y=");
        console.log("x="+currentx+"y="+currenty);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=width;
        ctx.arc(currentx,currenty,radius,0,2*Math.PI);
        ctx.stroke();
    }
}
    canvas.addEventListener("mouseup",my_mouseup)
    function my_mouseup(e){
        mouseevent="mouseup";
    }
    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e){
        mouseevent="mouseleave"
    }
    function clear_area(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }

