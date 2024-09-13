document.querySelectorAll('#hdbt button').forEach(btn => {

    btn.addEventListener("click", () => {
        document.querySelector(".hdpt img").src = btn.dataset.src;
    })
})

document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.querySelector('.accordion-text').classList.toggle('active')
    })
})

// var products = [
//     {
//         name: "SuperLady",
//         price: 20,
//         amount: 0,
//         img: "./images/shop1.png"
//     }, {
//         name: "I SWAY",
//         price: 30,
//         amount: 0,
//         img: "./images/shop2.png"
//     }, {
//         name: "Queen Card",
//         price: 30,
//         amount: 0,
//         img: "./images/shop3.png"
//     },
// ]
// a.forEach((data,index)=>{
//     const shop =document.querySelector("#shop-cards")
//     shop.innerHTML +=`
//      <div class="shopcd"> 
//                 <img src="${data.img}" alt="">
//                 <h2>${data.name}</h2>
//                 <div class="cardbt">
//                     <button class="ease" onclick="ease(${index})">-</button>
//                     <label class="afew">${data.amount}</label>
//                     <button class="add" onclick="add(${index})">+</button>
//                 </div>
//       </div>      
//     `
// });


products.forEach((date, index) => {
    const shop = document.querySelector("#shop-cards")
    shop.innerHTML += `
    <div class="shopcd">
        <img src="${date.img}" alt="">
        <h2>${date.name}</h2>
        <div class="cardbt">
            <button class="ease" onclick = "ease(${index})">-</button>
            <label class="afew">${date.amount}</label>
            <button class="add" onclick="add(${index})">+</button>
        </div>
    </div>
    `
});


function ease(index) {
    products[index].amount = Math.max(0, products[index].amount - 1)
    const amountAll = document.querySelectorAll('.afew')
    amountAll[index].innerHTML = products[index].amount
    renderShopend()
}

function add(index) {
    products[index].amount += 1
    const amountAll = document.querySelectorAll('.afew')
    amountAll[index].innerHTML = products[index].amount

    renderShopend()
}


const shopend = document.querySelector('#shopend')
function renderShopend() {
    shopend.innerHTML = ''
    products.forEach(product => {
        if (product.amount > 0) {
            shopend.innerHTML += `
            <div class="order-item">
                <h1>${product.name}</h1>
                <h1>${product.amount}</h1>
                <h1>${product.price * product.amount}</h1>
            </div>`
        }
    })

    shopend.innerHTML += `<div class="total">總計NT$${getTotalPrice()}元</div>`
}

function getTotalPrice() {
    return products.reduce((sum, product) => {
        return product.price * product.amount + sum
    }, 0)
}


// const App = Vue.createApp({
//     data() {
//         return {
//             products: [{
//                 name: "SuperLady",
//                 price: 250,
//                 amount: 0,
//                 img: "./images/shop1.png"
//             }, {
//                 name: "I SWAY",
//                 price: 300,
//                 amount: 0,
//                 img: "./images/shop2.png"
//             }, {
//                 name: "QueenCard",
//                 price: 150,
//                 amount: 0,
//                 img: "./images/shop3.png"
//             },]
//         }
//     }

// }).mount('.app')