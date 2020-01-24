const img = document.getElementById("image")
const input = document.getElementById("input");
const button = document.getElementById("submit");

button.addEventListener("click", ()=>{
    img.src = input.value
})