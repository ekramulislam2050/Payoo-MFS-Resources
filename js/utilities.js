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