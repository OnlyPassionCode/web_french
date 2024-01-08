const cards = document.querySelectorAll(".card-container");
cards.forEach(c=>{
    c.addEventListener("mouseenter", ()=>{
        c.children[0].classList.add("show");
    });
    c.addEventListener("mouseleave", ()=>{
        c.children[0].classList.remove("show");
    });
});