const input = document.getElementById('input');
const button = document.getElementById('submit');
/*add new const below*/

/*from previous ex*/
button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

/*New code below*/

const removeBtn = document.getElementById("remove")

removeBtn.addEventListener('click', () => {
    let lastItem = document.getElementsByTagName('ul')[0];
    let list = document.querySelector('li:last-child')       //specifies the first one in the list but called last child

        lastItem.removeChild(list);
})