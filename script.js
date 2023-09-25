import {menuItems} from '/menu-items.js'

const menu = document.querySelector('.menu')
const orderedItems = {}


function getMenu(){
    let menuHtml = ''
    menuItems.forEach(item => {
        menuHtml += `
        <div class="food-item">
            <img class='food-image' src="food-images/${item.img}" alt="">
            <div class="food-details">
                <div class="food-name">${item.name}</div>
                <div class="food-ingredients">(${item.ingredients})</div>
                <div class="food-price">$${item.price}</div>
            </div>
            <button class='add-item' id='${item.name}'>+</button>
        </div>
        `
    });
    return menuHtml
}

menu.innerHTML = getMenu()


const renderTotal = function(){

}

const addItem = function(itemName){
    if (itemName in orderedItems) {
        orderedItems.itemName += 1
    } else {
        orderedItems.itemName += 0 
    }
    console.log(orderedItems)
}


const addItemBtn = document.querySelectorAll('.add-item')

addItemBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(typeof e.target.id)
    })
})


