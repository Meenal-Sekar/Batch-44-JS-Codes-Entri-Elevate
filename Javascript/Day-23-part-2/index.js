let balance = 5000;
let userPin = 1234;

function banking()
{

let option = document.getElementById("option").value;
let amount = Number(document.getElementById("amount").value);
let pin = Number(document.getElementById("pin").value);  //8907
let result = document.getElementById("result");

if(pin != userPin)
{
    result.innerHTML="InCorrect Pin ❌"
    return;
}

switch(option)
{
    case "deposit":
    balance+=amount;
    result.innerHTML="Amount Deposited Successfully 💰 <br> New Balance: " + balance;
    break;

    case "withdraw":
        if(amount > balance){
            result.innerHTML = "Insufficient Balance ❌";
        }
        else{
            balance -= amount;
            result.innerHTML = "Withdrawal Successful 💵 <br> Remaining Balance: " + balance;
        }
        break;

    case "balance":
        result.innerHTML = "Your Current Balance is: ₹" + balance;
        break;

    case "pin":
         let newPin = prompt("Enter New PIN");
        userPin = Number(newPin);
        result.innerHTML = "PIN Changed Successfully 🔐";
        break;

     default:
        result.innerHTML = "Invalid Option";


}

}



function Clear()
{
    option.value=""
    amount.value=""
    pin.value=""
    result.value=""
}