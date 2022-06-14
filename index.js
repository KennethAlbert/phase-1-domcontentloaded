// Your code goes here
document.addEventListener("DOMContentLoaded",()=>{
  let p=document.querySelector("#text");
  let p1=p.innerHTML.replace("JavaScript is so cool. It lets me add text to my page programmatically.", "This is really cool!")
   p.innerHTML=p1;   
});

