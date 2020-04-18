const itemInput = document.querySelector('.item-input');
const itemSubmit = document.querySelector('.item-submit');
const itemList = document.querySelector('.item-list');
const msgBox = document.querySelector('.msg-box');
let items;
let numItems;
let itemText;
let newItem;

function createItem() {
    items = document.querySelectorAll('.item-list>li')
    numItems = items.length;
    // console.log(numItems)
    itemText = itemInput.value;
    if (itemText === "") {
        msgBox.textContent = "Please enter some text before submitting.";
    } else {
        msgBox.textContent = "";
        newItem = document.createElement('li');
        newItem.setAttribute('id', 'item' + numItems);
        newItem.textContent = itemText;
        delBtn = document.createElement('span');
        delBtn.textContent = "\u00D7";
        delBtn.onclick = function(e) {
            var id = e.target.parentNode.getAttribute('id');
            // console.log(id)
            deleteElem(id);
        }
        newItem.appendChild(delBtn)
        itemList.appendChild(newItem);
        itemInput.value = "";
    }
}

function deleteElem(id) {
    var element = document.querySelector('#' + id)
    element.parentNode.removeChild(element)
}

itemSubmit.onclick = createItem;