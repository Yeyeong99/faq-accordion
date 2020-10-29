
const askBox = document.querySelectorAll(".ask");
const title = askBox.querySelectorAll(".title");
const explain = askBox.querySelectorAll(".explain");
const button = askBox.querySelectorAll(".button")

title.forEach(function(eachBtn) {
    eachBtn.addEventListener("click",handleTitle)
    
});

function handleTitle(eachBtn) {
    const 
}
// const handleTitle = {
//     hover: function() {
//         title.classList.add("hover");
//     },
//     leave: function() {
//         title.classList.remove("hover");
//     },
//     enter: function() {
//         title.classList.remove("hover");
//         explain.classList.remove("explain")
//         explain.classList.add("show");
//     },
//     back : function() {
//         explain.classList.remove("show")
//         explain.classList.add("explain")
//     }
// }

// title.addEventListener("mouseenter",handleTitle.hover);
// title.addEventListener("mouseleave",handleTitle.leave);
// title.addEventListener("click", handleTitle.enter);
// button.addEventListener("click",handleTitle.back);