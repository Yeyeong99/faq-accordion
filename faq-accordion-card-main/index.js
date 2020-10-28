
const askBox = document.querySelector(".ask");
const title = askBox.querySelector(".title");
const explain = askBox.querySelector(".explain");

const handleTitle = {
    hover: function() {
        title.classList.add("hover");
    },
    leave: function() {
        title.classList.remove("hover");
    },
    enter: function() {
        title.classList.remove("hover");
        explain.classList.remove("explain")
        explain.classList.add("show");
    }
}

title.addEventListener("mouseenter",handleTitle.hover);
title.addEventListener("mouseleave",handleTitle.leave);
title.addEventListener("click", handleTitle.enter);