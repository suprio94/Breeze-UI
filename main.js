
	const scroll = new SmoothScroll('.sidebar a[href*="#"]',{
        speed : 300
    });

    const toast= document.getElementById("toast1");
    const btn= document.getElementById("button1");
    btn.addEventListener("click",function(){
        toast.className="show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    }
    
);


const modal = document.getElementById("myModal");

const sidebar= document.querySelector(".sidebar");
const btn1 = document.getElementById("myBtn");


const span = document.getElementsByClassName("close")[0];


btn1.addEventListener("click",function(){
    modal.style.display = "block";
    
})


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    
// #Slider

const slider= document.getElementById("ty1");
const value= document.querySelector(".value");
value.innerHTML=slier.value;
slider.oninput=function(){
  value.innerHTML=this.value;
}
