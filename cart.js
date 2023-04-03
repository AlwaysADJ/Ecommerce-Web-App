const shoppingCart = document.getElementById("cart-items")
const label = document.getElementById("label")

let basket = JSON.parse(localStorage.getItem("data")) || []

console.log(basket)

// let cartCalculation = () => {
//     let totalItems = basket.map((x) =>
//         x.item).reduce((x,y) => x+y,0)

//     cart.innerHTML = totalItems

//     console.log(totalItems)
// }

// cartCalculation()

let generateCartItems = () => {
    if (basket !== 0){ item = basket.map((x)=>{
        let {id, item} = x
        let search = shopItem.find((y) => y.id == id)
        let {img, name, price} = search
        return `
        <div id =${id} class="cart-item">
                <img width = "100" src=${img} alt="">
                <div class="item-details">
                    <h2>${name}</h2>
                    <p></p>
                    <div class="price-quantity">
                        <div class="price">$${price}</div>
                        <div class="button">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div class="quantity">$${item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `
                
        }
        ).join(" ")

        shoppingCart.innerHTML = item
        } else{
            shoppingCart.innerHTML  = ``
            label.textContent = `
                <h2>Cart is empty</h2>
                <a href="index.html">
                    <button>Back to home</button>
                </a>
                `
        }

        console.log(label.innerHTML)
    }


generateCartItems()