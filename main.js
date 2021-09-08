var mouseevent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("my canvas");
ctx = canvas.getContext("2d");


color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown",my_mouse_down);
function my_mousedown(e)
{
    color = document.getElementById ("color").valiue;
    width_of_line = document.getElementById ("width_of_line").value;


    mouseevent = "mousedown";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)

{
    currunt_position_of_the_mouse_x = e.clientX - canvas.offsetLeft;
    currunt_position_of_the_mouse_y = e.clienty  - canvas.offsettop;

    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokStyle = color;
        ctx.lineWidth = width_of_line;



        console.log("lat position of x and y corrdinates = ");
        console.log("x = "+ last_position_of_x | "y ="+currunt_position_of_mouse_y);
        ctx.lineTo(currunt_position_of_mouse_x, currunt_position+-o_mouse_y);
        ctx.strok();
    }
    

    last_position_of_x = currunt_possitin_of-mouse_x;
    last_position_of_y = currunt_possitin_of-mouse_y;
}




canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{

    mouseEvent = "mouseup";


}


canvas.addEventListner("mouseleave",mouse_mouseleave);
function my_mouseleave(e)
{


    mouseEvent = "mouseleave";



}


function clearArea(
) {
    ctx.clectRect(0,0, ctx.canvas.width, ctx.canvas.hieght);

}
