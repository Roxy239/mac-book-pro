function calculatePrice(specificId, price) {


    const TableInput = document.getElementById(specificId + '-cost');
    // const Tablevalue = TableInput.innerText;
    TableInput.innerText = price;

}




document.getElementById('8gb-memory').addEventListener('click', function () {


    calculatePrice('memory', 0);
})

document.getElementById('16gb-memory').addEventListener('click', function () {

    calculatePrice('memory', 180);

})
document.getElementById('256gb-storage').addEventListener('click', function () {

    calculatePrice('storage', 0);

})
document.getElementById('512gb-storage').addEventListener('click', function () {

    calculatePrice('storage', 100);

})
document.getElementById('1tb-storage').addEventListener('click', function () {

    calculatePrice('storage', 180);

})
document.getElementById('regular-delivery').addEventListener('click', function () {

    calculatePrice('delivery', 0);

})
document.getElementById('urgent-delivery').addEventListener('click', function () {

    calculatePrice('delivery', 20);

})
