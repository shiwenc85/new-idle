document.querySelectorAll('#hdbt button').forEach(btn => {

    btn.addEventListener("click", () => {
        document.querySelector(".hdpt img").src = btn.dataset.src;
    })
})


// 新增商品
const shoping = [
    { name: "i love", price: 380, amount: 0, img: "./images/i love專p.jpg" },
    { name: "正規2專輯", price: 350, amount: 0, img: "./images/super ladypg.jpg" },
    { name: "i feel", price: 350, amount: 0, img: "./images/i feel專p.png" },
];

// 新增商品的樣式
const shop= document.querySelector(".shop-obj");
shop.innerHTML = shoping.map((item, a) => `

    <div class="shop-img">  
        <div class="shops"><img src="${item.img}" alt=""></div>
        <div class="shop-text">
            <p class="shop-name">${item.name}</p>
            <p class="shop-math">${item.price}元</p>
        </div>
        
        <div class="shop-button">
            <button onclick="updateAmount(${a}, 1)">+</button>
            <input type="text" class="afew" value="0" readonly>
            <button onclick="updateAmount(${a}, -1)">-</button>
        </div>
    </div>
`).join('');

// 更新數量並顯示總額
const amountAll = document.querySelectorAll('.afew');
const shopend = document.querySelector('#shopend');

// 修改數量
function updateAmount(index, change) {
    shoping[index].amount = Math.max(0, shoping[index].amount + change);
    amountAll[index].value = shoping[index].amount;
    renderShopend();
}

// 計算總額
function getTotalPrice() {
    return shoping.reduce((total, item) => total + item.price * item.amount, 0);
}

// 顯示總額
function renderShopend() {
    shopend.innerHTML = `<div class="total"> 總計NT$${getTotalPrice()}元`;
}

renderShopend();









// 新增商品
// var products = [
   
//     {
//         name: "i love",
//         price: 380,
//         amount: 0,
//         img: "./images/i love專p.jpg"
//     },
   
//     {
//         name: "正規2專輯",
//         price: 350,
//         amount: 0,
//         img: "./images/super ladypg.jpg"
//     },
//     {
//         name: "i feel",
//         price: 350,
//         amount: 0,
//         img: "./images/i feel專p.png"
//     },
// ] 
// // 新增商品的樣式給他功能
// products.forEach((product, index) => {
//     const shop = document.querySelector(".shop-obj")
//     shop.innerHTML += `
//     <div class="shop-img">
//         <div class="shops">
//             <img src="${product.img}" alt="">
//         </div>
//         <div class="shop-text">
//             <p class="shop-name">${product.name}</p>
//             <p class="shop-math">${product.price}元</p>
//         </div>
//         <div class="shop-button">
//             <button onclick="add(${index})">+</button>
//             <input type="text" class="afew" value="0">
//             <button onclick="ease(${index})">-</button>
//         </div>
//     </div>  
//     `
// });

// // 按鈕加減
// const amountAll = document.querySelectorAll('.afew')
// function ease(index) {
//     products[index].amount = Math.max(0, products[index].amount - 1)
//     amountAll[index].value = products[index].amount
//     renderShopend()
// }

// function add(index) {
//     products[index].amount += 1
//     amountAll[index].value = products[index].amount
//     renderShopend()
// }

// // 顯示總額
// const shopend = document.querySelector('#shopend')
// function renderShopend() {


//     shopend.innerHTML = `<div class="total">總計NT$${getTotalPrice()}元</div>`
// }
// renderShopend()

// function getTotalPrice() {
//     return products.reduce((sum, product) => {
//         return product.price * product.amount + sum
//     }, 0)
// }

