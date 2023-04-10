// modal
let viewItem = (id) => {
    let selectedItem = id
    modalItem = shopItem.find((x) => x.id == selectedItem.id)
    let {img, price, name, desc} = modalItem

    modal.innerHTML = `
    <div class="modal-content" id="${id}">
        <i class="bi bi-arrow-left" onclick="displayLeft()"></i>
        <div class="modal-item">
            <img width = "250" src="${img}" alt="">
            <div class="modal-item-details">
                <h2>${name}</h2>
                <p>${desc}</p>
                <div class="price-av-quantity">
                    <div class="price">$${price}
                    </div>
                    <div class="available-quantity">Available quantity: 10
                    </div>
                </div>
            </div>
        </div>            
        <i class="bi bi-arrow-right" onclick="displayRight()"></i>

        <i class="bi bi-x-lg" onclick="closeModal()"></i>
            
    </div>
    `
    modal.style.display = "block"
}

let displayRight = (id) => {
    // let selectedItem = id
    // search = shopItem.find((x) => x.id == selectedItem.id)
    console.log("right")
}

let displayLeft = () => {
    console.log("left")
}


let closeModal = () => {
    modal.style.display = "none"
}

window.onclick = function(x) {
    if (x.target == modal) {
        modal.style.display = "none"
    } else return
}
