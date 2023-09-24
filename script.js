import {menuItems} from '/menu-items.js'

const menu = document.querySelector('.menu')




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
            <button>+</button>
        </div>
        `
    });
    return menuHtml
}


menu.innerHTML = getMenu()