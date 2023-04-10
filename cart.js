const shoppingCart = document.getElementById("cart-items")
const label = document.getElementById("label")
const cart = document.getElementById("cartAmount")

let basket = JSON.parse(localStorage.getItem("data")) || []


// console.log(basket)

let cartCalculation = () => {
    let totalItems = basket.map((x) =>
        x.item).reduce((x,y) => x+y,0)

    cart.innerHTML = totalItems
}

cartCalculation()

let generateCartItems = () => {
    let totalItems = basket.map((x) =>
        x.item).reduce((x,y) => x+y,0)
    let totalPrice = basket.map((x) => x.qtyPrice).reduce((x,y) => x+y,0)

    if (basket.length !== 0){cartItem = basket.map((x)=>{
        let {id, item, qtyPrice} = x
        let search = shopItem.find((y) => y.id == id)
        let {img, name, price} = search
        
        return `
        <div id =${id} class="cart-item">
                <img width = "80" src=${img} alt="">
                <div class="cart-item-details">
                    <h2>${name}</h2>
                    <p></p>
                    <div class="price-quantity">
                        <div class="cart-price">$${price}</div>
                        <div class="button">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div class="quantity">${item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                    <div class="quantity-price" id="quantity-price">
                        $${qtyPrice == undefined ? 0 : qtyPrice}
                        <i onclick="remove(${id})" class="bi bi-x-lg"></i>
                    </div>
                    
                </div>
            </div>
            `       
        }).join(" ")

        shoppingCart.innerHTML = cartItem

        label.innerHTML = 
        `<div class="label-items">
            <h3>Total Price: $${totalPrice}</h3>
            <h3>Total Items: ${totalItems}</h3>
            <button class="check-out">Check Out</button>
            <a href="index.HTML"><button class="home">Continue Shopping</button></a>
            <button onclick="clearCart()" class="clear-cart">Clear Cart</button>
        </div>`
        } else {
            shoppingCart.innerHTML  = ``
            label.innerHTML = `
            <div class="emptyCart">
            <h2>Cart is empty</h2>
            <a href="index.html">
                <button class="home">Back to home</button>
            </a>
            </div>
            `
        }

        // console.log(totalPrice)
    }

generateCartItems()

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id == selectedItem.id)
    let product = shopItem.find((y) => y.id == selectedItem.id)

    if (search == undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
            qtyPrice: product.price
        })
        } else{
        search.item++
        search.qtyPrice = +(search.item * product.price).toFixed(2)
    }

    localStorage.setItem("data", JSON.stringify(basket))

    renderQuantity(selectedItem.id)

    generateCartItems()

    // console.log(search.qtyPrice)
}

let decrement = (id) => {
    let selectedItem = id
    let search = basket.find(x => x.id == selectedItem.id)
    let product = shopItem.find((y) => y.id == selectedItem.id)
    
    if (search == undefined){
        return
    } else {
        search.item--
        search.qtyPrice = +(search.item * product.price).toFixed(2)
    }

    renderQuantity(selectedItem.id)

    basket = basket.filter(x => x.item !== 0)

    localStorage. setItem("data", JSON.stringify(basket))

    // console.log(search.qtyPrice)

    generateCartItems()
}

let renderQuantity = (id) => {
    let search = basket.find(x => x.id == id)

    document.getElementById.innerHTML = search.item    

    cartCalculation()
}

let remove = (id) => {
    let selectedId = id

    search = basket.find((x) => x.id == selectedId.id)
    basket = basket.filter(x => x.id !== selectedId.id)

    localStorage.setItem("data", JSON.stringify(basket))

    generateCartItems()
}

let clearCart = () => {
    basket = []
    localStorage.setItem("data", JSON.stringify(basket))

    generateCartItems()

    cartCalculation()
}


// let itemQuantityPrice = (id) => {
//     let search = basket.find((x) => x.id == id)
//     let product = shopItem.find((y) => y.id == id)
//     let index = basket.findIndex((x) => x.id == id) 

//     itemPrice = search.item * product.price

//     let prc = {qtyPrice: itemPrice}

//     basket[index] = Object.assign(search,prc)

//     localStorage.setItem("data", JSON.stringify(basket))
// }