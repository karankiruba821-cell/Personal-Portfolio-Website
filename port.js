const container = document.getElementById("particles");
for(let i=0;i<18;i++){
  const p=document.createElement("div");
  p.classList.add("particle");
  const size=Math.random()*80+20;
  p.style.cssText="width:"+size+"px;height:"+size+"px;left:"+(Math.random()*100)+"%;animation-duration:"+(Math.random()*20+15)+"s;animation-delay:"+(Math.random()*15)+"s;";
  container.appendChild(p);
}
const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});},{threshold:0.1,rootMargin:"0px 0px -60px 0px"});
reveals.forEach(el=>observer.observe(el));
const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{let current="";sections.forEach(s=>{if(window.scrollY>=s.offsetTop-120)current=s.getAttribute("id");});navLinks.forEach(a=>{a.style.color=a.getAttribute("href")==="#"+current?"var(--accent)":"";});});