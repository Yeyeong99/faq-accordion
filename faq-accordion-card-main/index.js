const title = document.querySelectorAll(".title");
const explain = document.querySelectorAll(".explain");
const button = document.querySelectorAll(".button");

for (i=0; i<=title.length; i++) {
    title[i].addEventListener("mouseenter",function(){
        this.classList.add("hover");
    }),
    title[i].addEventListener("mouseleave",function(){
        this.classList.remove("hover");
    }),
    title[i].addEventListener("click", function(event){ //event 가 클릭했을 때 target을 알 수 있게 해줌
        for (j=0; j<=explain.length; j++){
            this.classList.add("show");
            this.nextElementSibling.classList.add("show");
            explain[j].previousElementSibling.classList.remove("show");
            explain[j].classList.remove("show");
        }
    })
};


