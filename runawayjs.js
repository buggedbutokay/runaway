let btn=document.getElementById("hi");

document.addEventListener("mousemove", function(e){
    let rect=btn.getBoundingClientRect();
   

let x=e.clientX -(rect.left+ rect.width/2);
let y=e.clientY- (rect.top + rect.height/2);

let distance=Math.sqrt(x*x+y*y);

if(distance<100){
    let x=Math.random()*window.innerWidth;
    let y=Math.random()*window.innerHeight
btn.style.left = x + "px";
btn.style.top = y + "px";
}

});

