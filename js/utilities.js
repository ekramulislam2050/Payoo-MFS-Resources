function addMoney(id){
     const valueOfInput = document.getElementById(id).value ;
     const convertToNumber = parseFloat(valueOfInput);
     return convertToNumber;
}

function displayAmount(id){
    const textOfDisplayBtn = document.getElementById(id).innerText ;
    const convertToNumber = parseFloat(textOfDisplayBtn);
    return convertToNumber
}

function showForm (id){
    document.getElementById("add-money-form").classList.add("hidden")
    document.getElementById("cash-out-form").classList.add("hidden")
    document.getElementById("transaction-history").classList.add("hidden")
    document.getElementById(id).classList.remove("hidden")
}
 