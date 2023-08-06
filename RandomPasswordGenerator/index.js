



function generateRandomNumber(){

    
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
       }

       console.log("password is ->"+ password);

       document.getElementById("createPasswordField").value = password;

       var successful = document.execCommand('copy');

    console.log(successful);
}


function copyPassword(){
    let value = document.getElementById("createPasswordField");
    value.select();
    value.setSelectionRange(0,9999);
    navigator.clipboard.writeText(value.value);
    let password = value.value;
    //window.alert(value)
    window.alert(password)
}

// /generateRandomNumber();