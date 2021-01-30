//for getting ticket quantity
function ticketQuantity(inputId) {
    const Quantity = document.getElementById(inputId).value;
    const QuantityNumber = parseInt(Quantity);
    return QuantityNumber;
}

//for First Class{+/-} Switch
var firstClassPlus = document.getElementById("firstClass-plus");
var firstClassMinus = document.getElementById("firstClass-minus");

//for Economy Plus{+/-} Switch
var economyPlus = document.getElementById("economy-plus");
var economyMinus = document.getElementById("economy-minus");


//{+/-} handler
function ticketCount(increase, inputId) {

    //geting the input number
    let QuantityNumber = ticketQuantity(inputId);
    //for first parameter
    if (increase == true) {
        QuantityNumber = QuantityNumber + 1;
    }
    else if (increase == false && QuantityNumber > 0) {
        QuantityNumber = QuantityNumber - 1;
    }
    document.getElementById(inputId).value = QuantityNumber;
}

//machine for calculating Sub Total vat free
function subTotal() {
    let firstClassTicket = ticketQuantity("firstClass-quantity");
    let economyTicket = ticketQuantity("economy-quantity");
    let fisrtClassCost = firstClassTicket * 150;
    let economyCost = economyTicket * 100;
    const totalCost = fisrtClassCost + economyCost;
    document.getElementById("subtotal").innerText = totalCost;
    return totalCost;
}

//machine for calculating vat
function vat() {
    const vat = subTotal() * 0.1;
    const vatRound = Math.round(vat);
    document.getElementById("vat").innerText = vatRound;
    return vatRound;
}

//machine for calculating total
function total() {
    const total = subTotal() + vat();
    (document.getElementById("total").innerText = total);
    return total;
}

//All-Event
firstClassPlus.addEventListener("click", function () {
    ticketCount(true, "firstClass-quantity");
    subTotal();
    vat();
    total();
});
firstClassMinus.addEventListener("click", function () {
    ticketCount(false, "firstClass-quantity");
    subTotal();
    vat();
    total();
});
economyPlus.addEventListener("click", function () {
    ticketCount(true, "economy-quantity");
    subTotal();
    vat();
    total();
});
economyMinus.addEventListener("click", function () {
    ticketCount(false, "economy-quantity");
    subTotal();
    vat();
    total();
});