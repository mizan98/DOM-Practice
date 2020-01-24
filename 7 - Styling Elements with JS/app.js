const image = document.getElementById("cat");
const button = document.getElementById("submit")

button.addEventListener("click", ()=>{     //the function runs after the click
    if(image.style.display == "none"){     //this is a condtion so if the "none" is happening it would cause the image to show
    image.style.display = "block";         //but becase the image is currently showing when you start thr page itll block the condtion and move onto the else
    button.textContent = "hide";
    } else {
    image.style.display = "none";
    button.textContent = "show";
    }
})