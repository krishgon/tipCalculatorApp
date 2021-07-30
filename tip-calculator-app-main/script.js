var totalBillBox, totalPeopleBox, tipPerPersonBox, billPerPersonBox, billSymbol, peopleSymbol, billInputValid, peopleInputValid;

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    totalBillBox = document.getElementById("BillAmount");
    totalPeopleBox = document.getElementById("NumberOfPeople");
    tipPerPersonBox = document.getElementById("tipPerPerson");
    billPerPersonBox = document.getElementById("billPerPerson");
    billSymbol = document.getElementById("billSymbol");
    peopleSymbol = document.getElementById("peopleSymbol");
    billInputValid = false;
    peopleInputValid = false;
});

function outputResult(){
    if(billInputValid && peopleInputValid) {
        var totalBill = parseFloat(totalBillBox.value);
        var totalPeople = parseFloat(totalPeopleBox.value);
        var billPercent = parseInt(document.getElementsByClassName("selected")[0].innerHTML);

        var totalTip = (billPercent/100) * totalBill;
        var tipPerPerson = totalTip / totalPeople;
        var billPerPerson = (totalBill / totalPeople) + tipPerPerson;

        tipPerPersonBox.innerHTML = "$" + tipPerPerson.toFixed(2);
        billPerPersonBox.innerHTML = "$" + billPerPerson.toFixed(2);
    }else{
        tipPerPersonBox.innerHTML = "$0.00";
        billPerPersonBox.innerHTML = "$0.00";
    }
}

function checkInput() {
    if(!totalBillBox.value == ""){
        billSymbol.innerHTML = "";
        billInputValid = true;
    }else{
        billSymbol.innerHTML = "*";
        billInputValid = false;
    }

    if(!totalPeopleBox.value == ""){
        peopleSymbol.innerHTML = "";
        peopleInputValid = true;
    }else{
        peopleSymbol.innerHTML = "*";
        peopleInputValid = false;
    }
}

function selectPercentOption(percent){
    var element = document.getElementById(percent);
    var selectedElement = document.getElementsByClassName("selected")[0];
    
    selectedElement.classList.remove("selected");
    element.classList.add("selected");
}

function resetData(){
    totalBillBox.value = "";
    totalPeopleBox.value = "";
    selectPercentOption(15);
    checkInput();
    outputResult();
}