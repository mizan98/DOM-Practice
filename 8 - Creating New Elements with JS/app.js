// let list = document.getElementsByTagName("ul")[0];
// const input = document.getElementById("input");
// const button = document.getElementById("submit");

// button.addEventListener("click", ()=> {
//     let listItem = document.createElement("li");
//     listItem.textContent = input.value;
//     list.appendChild(listItem);
// })


//challange//

// let list = document.getElementsByTagName("ul")[0];
// const input = document.getElementById("input");
// const button = document.getElementById("submit");

// button.addEventListener("click", ()=> {
//     let listItem = document.createElement("li");
//     listItem.textContent = input.value;
//     list.appendChild(listItem);
//     input.value = ""
// })



const input = document.getElementById("input");
const button = document.getElementById("submit");
const showhidebtn = document.getElementById("showhide-btn");
let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", ()=>{
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem)  ;        //appendchild used to move item into list
    console.log(listItem);
    input.value = "";                    //this causes the input field to become empty
})

showhidebtn.addEventListener("click", ()=> {
    if(list.style.display === "none") {
        list.style.display = "block";
        showhidebtn.textContent = "hide";
    } else {
        list.style.display = "none";
        showhidebtn.textContent = "show";
    }
})