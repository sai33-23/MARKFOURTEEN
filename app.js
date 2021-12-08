var initialprice = document.querySelector("#initial-Price")
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");
submitBtn.addEventListener("click",submitHandler)
function submitHandler(){
    var ip = Number(initialprice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip,qty,curr);
 }

function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;
        showOutput(`hey the loss 😕 is ${loss} and the percentage is ${lossPercentage}%`);
    }else if (current>initial){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        showOutput(`hey the profit 😇 is ${profit} and the percentage is ${profitPercentage}%`);
    }else{
        showOutput(`😌 no pain no gain and no gain no pain 😌`);
    }
}

function showOutput(message){
    // switch(status){
    //     case "PROFIT":
    //         outputBox.innerHTML = message;
    //         break;
    //     case "LOSS":
    //         outputBox.innerHTML = message;
    //     case ""
    //     default:
    //         break;
    // }
   outputBox.innerHTML = message;

}
