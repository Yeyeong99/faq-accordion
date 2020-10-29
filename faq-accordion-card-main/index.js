const askBox = document.querySelectorAll(".ask");
const title = document.querySelectorAll(".title");
const explain = document.querySelectorAll(".explain");


for (i=0; i<title.length; i++) {
    title[i].addEventListener("mouseenter",function(){
        this.classList.add("hover");
    }),
    title[i].addEventListener("mouseleave",function(){
        this.classList.remove("hover");
    }),
    title[i].addEventListener("click", function(){
        this.nextElementSibling.classList.toggle("explain");
    })
};
