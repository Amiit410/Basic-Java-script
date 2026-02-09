var IsFullName = false;
function fullnameValidation(){
    var fullname = document.getElementById("_FN").value;
    var pattern = new RegExp(/^([A-Za-z]+)\s([A-Za-z]+)\s([A-Za-z]+)$/);

    if(pattern.test(fullname))
    {
        IsFullName = true;
        document.getElementById("_FN").style.color = "black";
    }
    else
    {
        IsFullName = false;
        document.getElementById("_FN").style.color = "red";
    }
}

var IsEmail = false;
function EmailValidation(){
    var Email = document.getElementById("_Email").value;
    var pattern = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    if(pattern.test(Email))
    {
        IsEmail = true;
        document.getElementById("_Email").style.color = "black";
    }
    else
    {
        IsEmail = false;
        document.getElementById("_Email").style.color = "red";
    }
}

var IsMobile = false;
function MobileValidation(){
    var mobilenumber = document.getElementById("_MN").value;
    var pattern = new RegExp(/^[0-9]{10}$/)
    if(pattern.test(mobilenumber))
    {
        IsMobile = true;
        document.getElementById("_MN").style.color = "black";
    }
    else
    {
        IsMobile = false;
        document.getElementById("_MN").style.color = "red";
    }
}

var IsAge = false;
function AgeValidation(){
    var Age = document.getElementById("_Age").value;

    if(parseInt(Age)<18 || parseInt(Age)>60){
        IsAge = false;
        document.getElementById("_Age").style.color = "red";
        return;
    }

    var pattern = new RegExp(/^[0-9]{2}$/);

    if(pattern.test(Age))
    {
        IsAge = true;
        document.getElementById("_Age").style.color = "black";
    }
    else
    {
        IsAge = false;
        document.getElementById("_Age").style.color = "red";
    }
}

var IsGender = false;
function GenderValidation(){
    var radios = document.getElementsByName("gender");
    
    var ValidGender = false;

    var i = 0;

    while(!ValidGender &&i<radios.length)
    {
        if(radios[i].checked)
        {
            ValidGender = true;
        }
        i++;
    }

    if(!ValidGender)
    {
        IsGender = false;
        document.getElementById("_gender").style.background = "rgba(16, 16, 209, 0.74)";
        return false;
    }
    else
    {
        IsGender = true;
        document.getElementById("_gender").style.background = "rgba(219, 124, 52, 0.74)";
        return true;

    }
}

function ButtonOver(){
    document.getElementById("_SubmitBtn").style.background = "rgba(16, 16, 209, 0.74)"
}
function ButtonOut(){
    document.getElementById("_SubmitBtn").style.background = "rgba(16, 16, 209, 0.58)"
}

function ButtonClick(){
    if(!IsFullName){
        alert("ERROR - Invalid Fullname");
        return;
    }
    if(!IsEmail)
    {
        alert("ERROR - Invalid Email");
        return;
    }
    if(!IsMobile)
    {
        alert("ERROR - Invalid Mobile Number");
        return;
    }
    ;
    if(!GenderValidation())
    {
        alert("Error - Invalid Gender");
        return;
    }
}

