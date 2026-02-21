Authorization();

function Login(){
    var UserName = document.getElementById("_username").value;
    var Password = document.getElementById("_password").value;

    var localUserName = localStorage.getItem("UserName");
    var localPassword = localStorage.getItem("Password");

    if(!UserName)
    {
        document.getElementById("_username").style.borderColor = "red"; 
        return;
    }
    else{
        document.getElementById("_username").style.borderColor = "grey"; 

    }
    if(!Password)
    {
        document.getElementById("_password").style.borderColor = "red"; 
        return;
    }
    else{
        document.getElementById("_password").style.borderColor = "grey"; 

    }
    if(UserName === localUserName && Password === localPassword)
    {
        document.getElementById("chklabel").innerText = "Login Successfull !"
        document.getElementById("chklabel").style.color = "blue";
    }
    else
    {
        document.getElementById("chklabel").innerText = "Wrong id or Password!!!";
        document.getElementById("chklabel").style.color = "red";
    }
}


function Authorization()
{
    var UserName = "Admin";
    var Password = "Admin@123";

    localStorage.setItem("UserName",UserName);
    localStorage.setItem("Password",Password);        
}