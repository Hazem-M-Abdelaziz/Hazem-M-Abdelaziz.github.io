const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelectorAll(".project,.skills-grid article,.timeline-item").forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i*50,250)}ms`;el.classList.add("reveal");observer.observe(el)});
