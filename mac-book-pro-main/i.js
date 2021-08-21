
Tasnin
Tasnin Jahan Tithi
function updateCost(price, id) {
    const TableInput = document.getElementById(id + '-table');
    const TableValue = TableInput.innerText;
    TableInput.innerText = price;
}
//total price updating

function getInput(id) {
    const TableInput = document.getElementById(id + '-table');
    const TableValue = parseInt(TableInput.innerText);
    return TableValue;
}
function calculateTotal() {
    const memoryTotal = getInput('memory');
    const storageTotal = getInput('storage');
    const deliveryTotal = getInput('delivery');
    const subTotal = memoryTotal + storageTotal + deliveryTotal + 1299;
    const TotalValue = memoryTotal + storageTotal + deliveryTotal + 1299;
    document.getElementById('total-table').innerText = subTotal;
    document.getElementById('footer-total').innerText = TotalValue;
    return TotalValue;

}
//calculating promo code

document.getElementById('promo-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const PromoValue = promoInput.value;
    const footerTotalInput = document.getElementById('footer-total');
    const footerTotal = footerTotalInput.innerText;
    const TotalValue = calculateTotal();
    if (PromoValue == 'stevekaku') {
        const promoValue = 0.2;
        const Total = TotalValue * promoValue;
        const afterPromoTotal = TotalValue - Total;
        footerTotalInput.innerText = afterPromoTotal;
    }
    else {
        return TotalValue;
    }
    promoInput.value = '';
});

document.getElementById('btn1-memory').addEventListener('click', function () {
    updateCost(0, 'memory');
    calculateTotal()
})

document.getElementById('btn2-memory').addEventListener('click', function () {
    updateCost(180, 'memory');
    calculateTotal()
})
document.getElementById('btn1-storage').addEventListener('click', function () {
    updateCost(0, 'storage');
    calculateTotal()
})
document.getElementById('btn2-storage').addEventListener('click', function () {
    updateCost(100, 'storage');
    calculateTotal()
})
document.getElementById('btn3-storage').addEventListener('click', function () {
    updateCost(180, 'storage');
    calculateTotal()
})
document.getElementById('btn1-delivery').addEventListener('click', function () {
    updateCost(0, 'delivery');
    calculateTotal()
})
document.getElementById('btn2-delivery').addEventListener('click', function () {
    updateCost(20, 'delivery');
    calculateTotal()
})