class Items {constructor(
    id, name, price, img, desc
    ){
        this.id = id,
        this.name = name,
        this.price = price,
        this.img = img,
        this.desc = desc
    }
}

let itemOne = new Items("qrtwtr","Fashion Shoe", 300, "./images/img-1.jpg", "Lorem ipsum, dolor sit amet consectetur adipisicing")

let itemTwo = new Items("rtyuytr","Fine Trouser", 238.99, "./images/img-2.jpg", "Lorem ipsum, dolor sit amet consectetur adipisicing")

let itemThree = new Items("iytrt","Jacket", 983.99, "./images/img-3.jpg", "Lorem ipsum, dolor sit amet consectetur adipisicing")

let itemFour = new Items("werww","Belt", 983.99, "https://images.unsplash.com/photo-1677700674613-4ba4a1bb026d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80", "Lorem ipsum, dolor sit amet consectetur adipisicing")

let itemFive = new Items("rewrew","Fine Tie", 700, "./images/img-5.png", "Lorem ipsum, dolor sit amet consectetur adipisicing")

let itemSix = new Items("weeew","Allstar", 760.99, "./images/img-6.png", "Lorem ipsum, dolor sit amet consectetur adipisicing")

let itemSeven = new Items("iwuytw","Nice Suit", 400, "./images/img-7.png", "Lorem ipsum, dolor sit amet consectetur adipisicing")

let itemEight = new Items("uytwy","Nice Shirt", 509.99, "./images/img-8.png", "Lorem ipsum, dolor sit amet consectetur adipisicing")

let itemNine = new Items("iwuytw","Nice Suit", 400, "./images/img-7.png", "Lorem ipsum, dolor sit amet consectetur adipisicing")

let itemTen = new Items("uytwy","Nice Shirt", 509.99, "./images/img-8.png", "Lorem ipsum, dolor sit amet consectetur adipisicing")

let shopItem = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight, itemNine, itemTen]

// let shopItem = [
//     {
//         id: "qrtwtr",
//         name: "Fashion Shoe",
//         price: 300,
//         img: "./images/img-1.jpg",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing"
//     },

//     {
//         id: "eryuytr",
//         name: "Fine trouser",
//         price: 236.99,
//         img: "./images/img-2.jpg",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing"
//     }
// ]

