document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    const amountOfMoney = addMoney("money-field");
    if(isNaN(amountOfMoney)){
        alert("you have not enough money or wrong input")
        return
    }
    const password = addMoney("password-field");
    if( password === 123){
        const availableMoney = displayAmount("display-balance");
         const newBalance = availableMoney + amountOfMoney;
          document.getElementById("display-balance").innerText = newBalance
    }
    
     
})

document.getElementById("cash-out-btn").addEventListener("click",function(e){
     e.preventDefault();
     const amountOfCashOut = addMoney("cash-out-field");
     if(isNaN(amountOfCashOut)){
        alert("you have not enough money or wrong input")
        return
     }
     const passwordOfCashOut = addMoney("cash-out-password");
     if(passwordOfCashOut === 123){
        const availableMoney = displayAmount("display-balance");
        if( amountOfCashOut > availableMoney  ){
            alert("you have not enough money or wrong input")
         }
         else{
            const newBalance = availableMoney - amountOfCashOut;
            document.getElementById("display-balance").innerText = newBalance;
         }
       
     }
      
})