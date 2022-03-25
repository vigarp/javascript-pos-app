// SELECT ELEMENTS
const menuElements = document.querySelector(".center-menu");
const cartItemsElements = document.querySelector(".cart-item");
const subtotalElements = document.querySelector(".upper-right");
const totalItemsInCartElements = document.querySelector(".total-items-in-cart");
const modalCheckoutElements = document.getElementById("checkout-content");
const ppnElements = document.getElementById("ppn");
const totalElements = document.getElementById("total");

const checkoutElements = (param) => {
    if (param == "on") {
        document.querySelector(".checkout-wrapper").style.display = "block";
        renderCheckoutModal();
        renderPPN();
        renderTotal();
    } else if (param == "off") {
        document.querySelector(".checkout-wrapper").style.display = "none";
    }
}


// RENDER COFEE MENU 
const renderItemsMenu = () => {
    menuItems.forEach( (menu) => {
        menuElements.innerHTML += `
            <div class="card">
                <img src=${menu.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 id="card_title" class="card-title">${menu.name}</h5>
                    <p id="price" class="card-text">Rp. ${menu.price}</p>
                    <button class="button" id="addToCart" onclick="addToCart(${menu.id})">+ Add</button>
                </div>
            </div>
        `;
    });
}
renderItemsMenu();

// cart array
let cart = [];

// ADD TO CART
const addToCart = (id) => {
    if(cart.some((item) => item.id === id)) {
        alert("Product already in cart")
    } else {
        const item = menuItems.find( (menu) => menu.id === id)
        
        cart.push({
            ...item,
            numberOfUnits : 1,
        });
    }

    updateCart();
}

// UPDATE CART 
const updateCart = () => {
    renderCartItems();
    renderSubtotal();
}

// calculate and render subtotal
const renderSubtotal = () => {
    let totalPrice = 0, totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    subtotalElements.innerHTML = `Rp. ${totalPrice}`;
    totalItemsInCartElements.innerHTML = totalItems;
    return totalPrice;
}

// RENDER CART ITEMS
const renderCartItems = () => {
    cartItemsElements.innerHTML = "";
    cart.forEach((item) => {
        cartItemsElements.innerHTML += `
        <div class="cart-item-list">
        <img class="cart-images" onclick="removeItemFromCart(${item.id})"src="${item.image}" width="100px" height="100px">
        <div class="cart-text">${item.name}</div>
        <div class="button-unit">
            <div class="btn-min" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
            <div class="value">${item.numberOfUnits}</div>
            <div class="btn-plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
        </div>
        <span class="price">Rp. ${item.price}</span>
    </div>
        `
    })
}

// remove item from cart 
const removeItemFromCart = (id) => {
   cart = cart.filter((item) => item.id !== id);

   updateCart();
}
// CHANGING NUMBER OF ITEMS
const changeNumberOfUnits = (action, id) => {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            }else if (action === "plus") {
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}

// RENDER CHECKOUT MODAL
const renderCheckoutModal = () => {
    modalCheckoutElements.innerHTML = "";
    cart.forEach((item) => {
        const totalItemCheckout = item.numberOfUnits * item.price
        modalCheckoutElements.innerHTML += `
        <div class="checkout-content">
                    <div class="checkout-items">${item.name} x${item.numberOfUnits}</div>
                    <div class="checkout-price">Rp ${totalItemCheckout}</div>
                </div>
        `
    })
}

const renderPPN = () => {   
    ppnElements.innerHTML = `Rp. ${renderSubtotal() * 10/100}`;
}

const renderTotal = () => {
    const total = renderSubtotal();
    const ppn = renderSubtotal() * 10/100;
    totalElements.innerHTML = `Total: ${total + ppn}`
}
