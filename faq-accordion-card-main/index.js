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
        this.classList.toggle("show");
        this.nextElementSibling.classList.toggle("explain");
        this.nextElementSibling.classList.toggle("show");
        title.not(this).nextElementSibling.classList.remove("show");
        title.not(this).classList.remove("show");
    })
};
