window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.body.style.animationPlayState = "running"; 
    }, 500); 
  });
  
window.addEventListener("beforeunload", () => {
    document.body.classList.add("fade-out");
  });
  