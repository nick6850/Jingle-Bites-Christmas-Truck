import {menuItems} from '/menu-items.js'

const menu = document.querySelector('.menu')
const orderedItems = {}
const orderDetails = document.querySelector('.order-details')

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


const addItemBtn = document.querySelectorAll('.add-item')

addItemBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        addItem(e.target.id)
    })
})



const addItem = function(itemName){
    if (itemName in orderedItems) {
        orderedItems[itemName] += 1
    } else {
        orderedItems[itemName] = 1 
    }
    renderTotalItems()
}
let totalPriceNum = 0

const renderTotalItems = function(){
    orderDetails.innerHTML = ''
    let orderHTML = ''
    totalPriceNum = 0
    console.log(orderedItems)
    Object.keys(orderedItems).forEach(itemName => {
        if (orderedItems[itemName] > 0) {
            let price = menuItems.filter(item => item.name == itemName)[0].price
            totalPriceNum += price * orderedItems[itemName]
            orderHTML += `
            <div class="order-item">
                <div class="order-item-name">${itemName} (${orderedItems[itemName]})</div>
                <button class="remove-btn" id='${itemName}'>(remove)</button>
                <div class="order-item-price">$${(price * orderedItems[itemName]).toFixed(2)}</div>
            </div>
            `
            orderDetails.innerHTML = orderHTML
            renderTotalPrice()
        }
    });
}

const renderTotalPrice = function(){
    orderDetails.innerHTML += 
    `<div class="order-details">
        <div class="order">Your order</div>
            <div class="total-price-section">
                <div>Total price:</div>
                <div class="total-price">$${totalPriceNum.toFixed(2)}</div>
            </div>
        <button class="complete-btn">Complete order</button>
    </div>`
}


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-btn')) {
        removeItem(event.target.id);
    }
});


const removeItem = function(itemName){
    orderedItems[itemName] -= 1
    if (orderedItems[itemName] == 0){
        delete orderedItems[itemName]
    }
    renderTotalItems()
}

const form = document.getElementById('form')


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-btn')) {
        form.classList.remove('hidden')
    }
});