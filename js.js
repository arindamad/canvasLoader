function totalCanvas(canvasName, strokeColor, strokeWidht){
var canvas = document.getElementById(canvasName);
var width = canvas.parentElement.clientWidth;
var height = width;
canvas.height = height;
canvas.width = width;




var percentTol = canvas.getAttribute('data-parcent');
var startPercent = 0;

var ctx = canvas.getContext('2d');
var degree = Math.PI / 180;


ctx.beginPath();
ctx.strokeStyle = "#f2f2f2";
ctx.stroke(); 
ctx.arc(width/2, height/2, (height/2 - 30), 0, Math.PI*2 , false);
ctx.lineWidth = strokeWidht;
ctx.lineCap = "round";
ctx.stroke();



function percentLoder(){
    ctx.beginPath();
    ctx.strokeStyle = "#f2f2f2";
    ctx.stroke(); 
    ctx.arc(width/2, height/2, (height/2 - 30), 0, Math.PI*2 , false);
    ctx.lineWidth = strokeWidht;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    ctx.stroke(); 
    ctx.arc(width/2, height/2, (height/2 - 30), - degree * 90, - degree * 90 + (degree * 360)*startPercent/100 , false);
    ctx.lineWidth = strokeWidht;
    ctx.lineCap = "round";
    ctx.stroke();


    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillText(startPercent + "%",width/2 - 30,height/2 + 10);
}






 var intravel = setInterval(function(){     
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    percentLoder();
    if(startPercent >= percentTol){
        clearTimeout(intravel);
    } else{
        startPercent ++;
    }
    
    // console.log(startPercent);
}, 60);  

}

$(window).scroll(function () {
    var scrtop = $(this).scrollTop();
    var windowOfset = $('.grandParent').offset().top;
    var visible = windowOfset - $(window).height() + $('.grandParent').height();
    console.log($(window).width());
//    console.log(windowOfset);
    if (scrtop >= visible) {
        totalCanvas('canvas1', '#2c98f0', 20);
        totalCanvas('canvas2', '#ec5453', 20);
        totalCanvas('canvas3', '#f9bf3f', 20);
        totalCanvas('canvas4', '#a84cb8', 20);
        $(window).off('scroll');
        alert('visible');
    } else {
       
    }

    
});



