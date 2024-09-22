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
          document.getElementById("display-balance").innerText = newBalance;
          const div = document.createElement("div");
          div.classList.add("bg-green-300")
          div.innerHTML=`
             <p>add money:${amountOfMoney}tk. new balance:${newBalance}tk.</p>
          `
          document.getElementById("transaction-history").appendChild(div)
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
            const div = document.createElement("div");
            div.classList.add("bg-red-300")
            div.innerHTML=`
               <p>cash out:${amountOfCashOut}tk. new balance:${newBalance}tk.</p>
            `
            document.getElementById("transaction-history").appendChild(div)
         }
       
     }
      
})

document.getElementById("add-money-button").addEventListener("click",function(e){
 
   showForm ('add-money-form')
})
document.getElementById("cash-out-button").addEventListener("click",function(e){
 
   showForm ('cash-out-form')
})
document.getElementById("transaction-btn").addEventListener("click",function(e){
 
   showForm ('transaction-history')
})