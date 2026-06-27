// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},1500);

});


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// ===============================
// Parallax Effect
// ===============================

const stars=document.querySelector(".stars");

const planet=document.querySelector(".planet");

const rocket=document.querySelector(".rocket");

window.addEventListener("scroll",()=>{

let value=window.scrollY;

stars.style.transform=`translateY(${value*0.3}px)`;

planet.style.transform=`translateY(${value*0.15}px)`;

rocket.style.transform=`translateY(-${value*0.5}px)`;

});


// ===============================
// Scroll Reveal
// ===============================

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

cards.forEach(card=>{

observer.observe(card);

});


// ===============================
// Contact Form
// ===============================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🚀 Message Sent Successfully!");

form.reset();

});


// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});