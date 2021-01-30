//for getting ticket quantity
function ticketQuantity(inputId) {
  const Quantity = document.getElementById(inputId).value;
  const QuantityNumber = parseInt(Quantity);
  return QuantityNumber;
}

//for First Class{+/-} catching
var firstClassPlus = document.getElementById("firstClass-plus");
var firstClassMinus = document.getElementById("firstClass-minus");

//for Economy Plus{+/-} catching
var economyPlus = document.getElementById("economy-plus");
var economyMinus = document.getElementById("economy-minus");

//{+/-} handler
function ticketCount(increase, inputId) {
  //geting the input number
  let QuantityNumber = ticketQuantity(inputId);
  //for first parameter
  if (increase == true) {
    QuantityNumber = QuantityNumber + 1;
  } else if (increase == false && QuantityNumber > 0) {
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
  document.getElementById("total").innerText = total;
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

//=========================XX==Bonus-Task!!==XX=======================//

//button catching
var bookNow = document.getElementById("booking");
var goBack = document.getElementById("go-back");
var goBackError = document.getElementById("go-back-error");

//stepping to next page through Book-Now button
bookNow.addEventListener("click", function () {
  if (total() == 0) {
    document.getElementById("main-form").style.display = "none";
    document.getElementById("selectNone").style.display = "block";
  } 
  else {
    document.getElementById("main-form").style.display = "none";
    document.getElementById("confirmation-area").style.display = "block";
    document.getElementById("ticketNumb").innerText =
      ticketQuantity("firstClass-quantity") +
      ticketQuantity("economy-quantity");
    document.getElementById("ticketPrice").innerText = "$ " + total();
  }
});

//for backing to the Main Area
function backingMainPage(buttonId) {
  buttonId.addEventListener("click", function () {
    document.getElementById("main-form").style.display = "block";
    document.getElementById("confirmation-area").style.display = "none";
    document.getElementById("selectNone").style.display = "none";
  });
}
backingMainPage(goBack);
backingMainPage(goBackError);

//==================Thank You Sir!==================//