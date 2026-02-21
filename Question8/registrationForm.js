var IsUsernameValid = false;
function ValidateUsername(){
    var username = document.getElementById("username").value;

    var pattern = new RegExp(/^[A-Za-z]{5,}$/);

    if(pattern.test(username))
    {
        IsUsernameValid = true;
        document.getElementById("username").style.border = "2px solid rgb(34, 189, 245)";
        document.getElementById("username").style.boxShadow = "0 1px 2px rgb(14, 195, 215),0 1px 2px rgb(20, 154, 203)";
        
    }   
    else
    {
        IsUsernameValid = false;
        document.getElementById("username").style.border = "1.5px solid red";
        document.getElementById("username").style.boxShadow = "0 4px 8px rgba(241, 10, 10, 0.72),0 4px 12px rgba(252, 37, 30, 0.58)";
    }
}

var IsEmailValid = false;

function ValidateEmail(){
    var email = document.getElementById("email").value;

    var pattern = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);

    if(pattern.test(email))
    {
        IsEmailValid = true;
        document.getElementById("email").style.border = "2px solid rgb(34, 189, 245)";
        document.getElementById("email").style.boxShadow = "0 1px 2px rgb(14, 195, 215),0 1px 2px rgb(20, 154, 203)";
        
    }
    else
    {
        IsEmailValid = false;
        document.getElementById("email").style.border = "1.5px solid red";
        document.getElementById("email").style.boxShadow = "0 4px 8px rgba(241, 10, 10, 0.72),0 4px 12px rgba(252, 37, 30, 0.58)";
    }
    console.log("validateemail() = "+IsEmailValid);
}

var IsPasswordValid = false;

function ValidatePassword(){
    var password = document.getElementById("password").value;

    var pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

    if(pattern.test(password))
    {
        IsPasswordValid = true;
        document.getElementById("password").style.border = "2px solid rgb(34, 189, 245)";
        document.getElementById("password").style.boxShadow = "0 1px 2px rgb(14, 195, 215),0 1px 2px rgb(20, 154, 203)";
        
    }
    else
    {
        IsPasswordValid = false;
        document.getElementById("password").style.border = "1.5px solid red";
        document.getElementById("password").style.boxShadow = "0 4px 8px rgba(241, 10, 10, 0.72),0 4px 12px rgba(252, 37, 30, 0.58)";
    }
}

function chkPassword(){
    var pass = document.getElementById("password").value;
    var confirmpass = document.getElementById("confirmpass").value;
    var Confirmpassword = false;
    if(!IsPasswordValid)
    {
        Confirmpassword = false;
        document.getElementById("confirmpass").style.border = "1.5px solid red";
        document.getElementById("confirmpass").style.boxShadow = "0 4px 8px rgba(241, 10, 10, 0.72),0 4px 12px rgba(252, 37, 30, 0.58)";
        return;
    }

    if(pass === confirmpass)
    {
        Confirmpassword = true;
        document.getElementById("confirmpass").style.border = "2px solid rgb(34, 189, 245)";
        document.getElementById("confirmpass").style.boxShadow = "0 1px 2px rgb(14, 195, 215),0 1px 2px rgb(20, 154, 203)";
    }
    else
    {
        Confirmpassword = false;
        document.getElementById("confirmpass").style.border = "1.5px solid red";
        document.getElementById("confirmpass").style.boxShadow = "0 4px 8px rgba(241, 10, 10, 0.72),0 4px 12px rgba(252, 37, 30, 0.58)";
    }
    return Confirmpassword;
}

function Submit(){
    if(!IsUsernameValid)
    {
        document.getElementById("username").style.border = "1.5px solid red";
        document.getElementById("username").style.boxShadow = "0 4px 8px rgba(241, 10, 10, 0.72),0 4px 12px rgba(252, 37, 30, 0.58)";
        return;
    }
    if(!IsEmailValid)
    {
        document.getElementById("email").style.border = "1.5px solid red";
        document.getElementById("email").style.boxShadow = "0 4px 8px rgba(241, 10, 10, 0.72),0 4px 12px rgba(252, 37, 30, 0.58)";
        return;
    }
    if(!IsPasswordValid)
    {
        document.getElementById("password").style.border = "1.5px solid red";
        document.getElementById("password").style.boxShadow = "0 4px 8px rgba(241, 10, 10, 0.72),0 4px 12px rgba(252, 37, 30, 0.58)";
        return;
    }
    if(!chkPassword())
    {
        document.getElementById("confirmationLabel").innerText = "password doesn't match!!!"
        document.getElementById("confirmpass").style.border = "1.5px solid red";
        document.getElementById("confirmpass").style.boxShadow = "0 4px 8px rgba(241, 10, 10, 0.72),0 4px 12px rgba(252, 37, 30, 0.58)";
        return;
    }
    document.getElementById("confirmationLabel").innerText = "Account created successfully !!!"
}