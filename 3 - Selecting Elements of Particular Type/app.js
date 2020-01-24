const list = document.getElementsByTagName("li")
const secondList = document.getElementsByClassName("not-orange");
console.log(list)
console.log(list.length)

for (i = 0; i < list.length; i ++) {
    list[i].style.color = "orange"
}

for (i = 0; i < secondList.length; i ++) {
    secondList[i].style.color = "red"
}
