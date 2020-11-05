const title = document.querySelectorAll(".title");
const explain = document.querySelectorAll(".explain");
const button = document.querySelectorAll(".button");


function handleClick() {
    const hasClass = title.classList.contains(show);
  
    if (!hasClass) {
      title.classList.add(show);
    } else {
      title.classList.remove(show);
    }
  }

for (i=0; i<=title.length; i++) {
    title[i].addEventListener("mouseenter",function(){
        this.classList.add("hover");
    }),
    title[i].addEventListener("mouseleave",function(){
        this.classList.remove("hover");
    }),
    title[i].addEventListener("click", function(event){ //event 가 클릭했을 때 target을 알 수 있게 해줌
        if (this.classList.contains("show")) {
            this.classList.remove("show");
            this.nextElementSibling.classList.remove("show");
        }else{
            for (j=0; j<=explain.length; j++){
                console.log(this)
                this.classList.add("show");
                this.nextElementSibling.classList.add("show");
                explain[j].previousElementSibling.classList.remove("show");
                explain[j].classList.remove("show");
        }
    }
    })
};
