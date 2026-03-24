
  // Header
 fetch("header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});

fetch("footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});
  // Header
  const car = document.getElementById('car');
  const text = document.getElementById('text');
  const triggerPoint = 150; // pixels from top to trigger animation

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > triggerPoint) {
      car.classList.add('show');
      text.classList.add('show');
    } else {
      car.classList.remove('show');
      text.classList.remove('show');
    }
  });




  const tire = document.getElementById('tire');
const tireSection = document.querySelector('.tire-section');

window.addEventListener('scroll', () => {

  const tireTop = tireSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if(tireTop < windowHeight * 0.8){
      tire.classList.add('show');
  } else {
      tire.classList.remove('show');
  }

});



const boxes = document.querySelectorAll(".car-box");

boxes.forEach(box=>{
  const video = box.querySelector("video");

  box.addEventListener("mouseenter",()=>{
      video.play();
  });

  box.addEventListener("mouseleave",()=>{
      video.pause();
      video.currentTime = 0;
  });
});

// history car Animation 
window.addEventListener("scroll", reveal);

function reveal(){
  let reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){

    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 120;

    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }else{
      reveals[i].classList.remove("active");
    }
  }
}