// change navbar styles on scrolling 

window.addEventListener('scroll',() =>{
  document.querySelector('nav').classList.toggle
  ('window-scroll',window.scrollY > 0)
} )

 const faqs = document.querySelectorAll('.faq');

 faqs.forEach(faq =>{
   faq.addEventListener('click',() =>{
    faq.classList.toggle('open')

  })  
})
 
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector(".nav_menu");
const closeBtn = document.querySelector(".nav_menu");

menuBtn.addEventListener('click', () =>{
  menu.style.display= "flex";
})