function calculatePrice(specificId, price) {


    const TableInput = document.getElementById(specificId + '-cost');
    const Tablevalue = TableInput.innerText;
    TableInput.innerText = price;

}
//total price updating
function getInput(specificId) {
    const TableInput = document.getElementById(specificId + '-cost');
    const TableValue = parseInt(TableInput.innerText);
    return TableValue;
}
function calculateTotalPrice() {
    const memoryTotal = getInput('memory');
    const storageTotal = getInput('storage');
    const deliveryTotal = getInput('delivery');
    const subTotal = memoryTotal + storageTotal + deliveryTotal + 1299;
    const TotalValue = memoryTotal + storageTotal + deliveryTotal + 1299;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('footer-total').innerText = TotalValue;
    return TotalValue;

}



document.getElementById('8gb-memory').addEventListener('click', function () {


    calculatePrice('memory', 0);
    calculateTotalPrice();
})

document.getElementById('16gb-memory').addEventListener('click', function () {

    calculatePrice('memory', 180);
    calculateTotalPrice();

})
document.getElementById('256gb-storage').addEventListener('click', function () {

    calculatePrice('storage', 0);
    calculateTotalPrice();

})
document.getElementById('512gb-storage').addEventListener('click', function () {

    calculatePrice('storage', 100);
    calculateTotalPrice();

})
document.getElementById('1tb-storage').addEventListener('click', function () {

    calculatePrice('storage', 180);
    calculateTotalPrice();

})
document.getElementById('regular-delivery').addEventListener('click', function () {

    calculatePrice('delivery', 0);
    calculateTotalPrice();

})
document.getElementById('urgent-delivery').addEventListener('click', function () {

    calculatePrice('delivery', 20);
    calculateTotalPrice();

})

//calculating promo code

document.getElementById('promo-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const PromoValue = promoInput.value;
    const footerTotalInput = document.getElementById('footer-total');
    const footerTotal = footerTotalInput.innerText;
    const TotalValue = calculateTotalPrice();
    if (PromoValue == 'stevekaku') {
        const discount = TotalValue * 0.2;
        const afterPromoTotal = TotalValue - discount;
        footerTotalInput.innerText = afterPromoTotal;
    }
    else {
        return TotalValue;
    }
    promoInput.value = '';
});