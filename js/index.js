const extraMemoryPrice = document.getElementById('memory-price');
const productPrice = document.getElementById('basic-price');
const totalPrice = document.getElementById('total-price');
const storagePrice = document.getElementById('storage-price');
const deliveryPrice = document.getElementById('delivery-price');
const grandPrice = document.getElementById('grand-total');
const promoInput = document.getElementById('promo-input');

function updateTotal() {
    const extraMemoryCharge = Number(extraMemoryPrice.innerText);
    const totalProductPrice = Number(productPrice.innerText);
    const extraStoragePrice = Number(storagePrice.innerText);
    const deliveryCharge = Number(deliveryPrice.innerText);
    const allTotalPrice = extraMemoryCharge + totalProductPrice + extraStoragePrice + deliveryCharge;

    totalPrice.innerText = allTotalPrice;
    grandPrice.innerText = allTotalPrice;
}

document.getElementById('8GB-memory').addEventListener('click', function () {
    extraMemoryPrice.innerText = 0;
    updateTotal();
})

document.getElementById('16GB-memory').addEventListener('click', function () {
    extraMemoryPrice.innerText = 180;
    updateTotal();
})

document.getElementById('256GB-storage').addEventListener('click', function () {
    storagePrice.innerText = 0;
    updateTotal();
})

document.getElementById('512GB-storage').addEventListener('click', function () {
    storagePrice.innerText = 100;
    updateTotal();
})

document.getElementById('1TB-storage').addEventListener('click', function () {
    storagePrice.innerText = 180;
    updateTotal();
})

document.getElementById('prime-delivery').addEventListener('click', function () {
    deliveryPrice.innerText = 0;
    updateTotal();
})

document.getElementById('regular-delivery').addEventListener('click', function () {
    deliveryPrice.innerText = 20;
    updateTotal();
})
document.getElementById('promo-apply').addEventListener('click', function () {
    const promoCode = promoInput.value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        let total = Number(grandPrice.innerText);
        total = total - (total * 0.20);
        grandPrice.innerText = total;
    }
    promoInput.value = '';
})