const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const sections = document.querySelectorAll('.section-box');
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

sections.forEach(sec=>{
    observer.observe(sec);
});
window.addEventListener("scroll",()=>{
const nav = document.querySelector(".navbar");

if(window.scrollY>50){
    nav.classList.add("scrolled");
}else{
    nav.classList.remove("scrolled");
}
});

const terminal = document.querySelector(".terminal-box");
const cursor = document.querySelector(".cursor");
const items = document.querySelectorAll(".terminal-item");
const activeFile = document.getElementById("active-file");

/* cursor mengikuti mouse */

terminal.addEventListener("mousemove", (e) => {

const rect = terminal.getBoundingClientRect();

cursor.style.position = "absolute";

cursor.style.left = (e.clientX - rect.left) + "px";

cursor.style.top = (e.clientY - rect.top) + "px";

});

/* selecting berdasarkan hover */

items.forEach(item => {

item.addEventListener("mouseenter", () => {

items.forEach(i => i.classList.remove("active"));

item.classList.add("active");

activeFile.textContent = item.dataset.name;

});

});