const loginButton = document.getElementById("btn-login");
 loginButton.addEventListener("click",function(e){
    e.preventDefault();
    const numberField = document.getElementById("number-field");
    const numberFieldValue = numberField.value ;
    const passwordField = document.getElementById("password-field");
    const passwordFieldValue = passwordField.value ;
    if(numberFieldValue === '0' && passwordFieldValue === '9'){
      window.location.href='index2.html';
      console.log(numberFieldValue,passwordFieldValue)
    }
    else{
      alert("wrong input")
    }
    
 })