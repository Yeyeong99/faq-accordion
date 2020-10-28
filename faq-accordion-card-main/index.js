import "./styles.css";

const askBox = document.querySelector(".ask")
const title = askBox.querySelector(".title")
function changeColor() {
    title.classList.remove("title")
    title.classList.add("hover")
}

title.addEventListener("mouseenter",changeColor)