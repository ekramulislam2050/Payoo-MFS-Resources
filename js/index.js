const loginButton = document.getElementById("btn-login");
 loginButton.addEventListener("click",function(e){
    e.preventDefault();
    const numberField = document.getElementById("number-field");
    const numberFieldValue = numberField.value ;
    console.log(numberFieldValue)
 })