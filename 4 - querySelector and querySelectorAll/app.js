const listItems = document.querySelectorAll("li:nth-child(even)");
console.log(listItems);
console.log(listItems.length);

for (i = 0; i < listItems.length; i++){
    listItems[i].style.color = "lightgreen"
}