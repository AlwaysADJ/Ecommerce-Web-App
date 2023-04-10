let shop = document.getElementById("shop")
let cart = document.getElementById("cartAmount")
let modal = document.getElementById("modal")

let getStoreItems = () => {
        let item = shopItem.map((x)=>{
            let {id, name, price, img, desc} = x
            let search = basket.find((x) => x.id == id) || []
            return `
            <div id =${id} class="item" onclick="viewItem()">
                <img width = "220" src=${img} alt="">
                <div class="item-details">
                    <h2>${name}</h2>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <div class="price">$${price}</div>
                        <div class="button">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div class="quantity">${search.item === undefined ? 0 : search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `       
        }).join(" ")

        shop.innerHTML = item
    }
    
let basket = JSON.parse(localStorage.getItem("data")) || []

getStoreItems()

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
        // search.qtyPrice = +(search.item * product.price).toFixed(2)
        search.qtyPrice = +(search.item * product.price).toFixed(2)
    }

    localStorage.setItem("data", JSON.stringify(basket))

    renderQuantity(selectedItem.id)

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

    console.log(search.qtyPrice)
}

let renderQuantity = (id) => {
    let search = basket.find(x => x.id == id)
    // let quantity = document.querySelectorAll(".quantity")
    // quantity.textContent = search.item
    document.getElementById.innerHTML = search.item

    getStoreItems()

    cartCalculation()

    // console.log(search)
}

let cartCalculation = () => {
    let totalItems = basket.map((x) =>
        x.item).reduce((x,y) => x+y,0)

    cart.innerHTML = totalItems

    // console.log(totalItems)
}

cartCalculation()


