let Section = document.querySelector(".box-skills");
let Progres = document.querySelectorAll(".progres span");
let Nums = document.querySelectorAll(".about-cart h3");
let About = document.querySelector(".about");
let Scrolldown = document.querySelector(".scroll-down");
let IconUp = document.querySelector(".icon-up");
let started = false;


window.onscroll = function(){
  if(window.scrollY >= About.offsetTop -200){
    if(!started){
        Nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  if(window.scrollY <= Section.offsetTop -500){
    Scrolldown.style.display ="block";
    IconUp.style.display ="none";
  }else{
    Scrolldown.style.display ="none";
    IconUp.style.display ="block";
  }

  if(window.scrollY >= Section.offsetTop - 350){
        Progres.forEach((span)=>{
            span.style.width = span.dataset.width;
      })
  }
   
};

function startCount(el){
      let gold = el.dataset.gold;
      let count =setInterval(() => {
          el.textContent++;
          if(el.textContent == gold){
              clearInterval(count);
          }
  }, 50);
}

IconUp.onclick = function(){
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  })
};


var i = 0;
var txt = 'zoalkefl ahmed'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

window.onload(typeWriter());
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};



