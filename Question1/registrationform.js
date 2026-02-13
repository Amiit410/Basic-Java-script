var IsFullName = false;
function fullnameValidation(){
    var fullname = document.getElementById("_FN").value;
    var pattern = new RegExp(/^([A-Za-z]+)\s([A-Za-z]+)$/);
    
    if(pattern.test(fullname))
    {
        IsFullName = true;
        document.getElementById("_FN").style.color = "black";
        document.getElementById("_FN").style.border = "1px solid black";
    }
    else if(fullname == null)
    {
        IsFullName = false;
        // document.getElementById("_FN").style.color = "red";
        document.getElementById("_FN").style.border = "1px solid red";
    }
    else
    {
        IsFullName = false;
        document.getElementById("_FN").style.color = "red";
        document.getElementById("_FN").style.border = "1px solid red";
    }
}

var IsEmail = false;
function EmailValidation(){
    var Email = document.getElementById("_Email").value;
    var pattern = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);

    if(pattern.test(Email))
    {
        IsEmail = true;
        document.getElementById("_Email").style.color = "black";
        document.getElementById("_Email").style.border = "1px solid black";

    }
    else if(Email == null)
    {
        IsEmail = false;
        // document.getElementById("_Email").style.color = "red";
        document.getElementById("_Email").style.border = "1px solid red";
    }
    else
    {
        IsEmail = false;
        document.getElementById("_Email").style.color = "red";
        document.getElementById("_Email").style.border = "1px solid red";
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
        document.getElementById("_MN").style.border = "1px solid black";
    }
    else if(mobilenumber == null)
    {
        IsMobile = false;
        document.getElementById("_MN").style.border = "1px solid red";
    }
    else
    {
        IsMobile = false;
        document.getElementById("_MN").style.color = "red";
        document.getElementById("_MN").style.border = "1px solid red";
    }
}

var IsAge = false;
function AgeValidation(){
    var Age = document.getElementById("_Age").value;

    if(parseInt(Age)<18 || parseInt(Age)>60){
        IsAge = false;
        document.getElementById("_Age").style.color = "red";
        document.getElementById("_Age").style.border = "1px solid red";
        return;
    }

    var pattern = new RegExp(/^[0-9]{2}$/);

    if(pattern.test(Age))
    {
        IsAge = true;
        document.getElementById("_Age").style.color = "black";
        document.getElementById("_Age").style.border = "1px solid black";
    }
    else
    {
        IsAge = false;
        document.getElementById("_Age").style.color = "red";
        document.getElementById("_Age").style.border = "1px solid red";
    }
}

function GenderValidation()
{
    // var radios = document.getElementsByName("gender");
    
    // var isGenderChecked = false;
    // for(let i = 0;i<radios.length;i++)
    // {
    //     if(radios[i].checked)
    //     {
    //         isGenderChecked = true;
    //         break;
    //     }
    // }
    // return isGenderChecked; 

    var radios = document.querySelector("input[name = 'gender']:checked")

    if(radios)
    {
        return true;
    }
    else
    {
        return false;
    }
}


function CourseValidation(){
    // var Courses = document.getElementById("_Courses").value;

    var Courses = document.querySelector("#_Courses");
    var IsCourseSelected = false;
    
    if(Courses.value)
    {
        IsCourseSelected = true;
        Courses.style.color = "black";
    }
    else
    {
        Courses.style.color = "red";
        Courses.focus();
        IsCourseSelected = false;
    }


    return IsCourseSelected;
}

function ButtonOver(){
    document.getElementById("_SubmitBtn").style.background = "rgba(16, 16, 209, 0.74)"
}
function ButtonOut(){
    document.getElementById("_SubmitBtn").style.background = "rgba(16, 16, 209, 0.58)"
}

function ButtonClick(){

    document.getElementById("FinalLabel").style.display = "none";
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
    if(!IsAge)
    {
        alert("Error - Invalid Age");
        return;
    }
    if(!GenderValidation())
    {
        alert("Error - Gender not Selected");
        return;
    }
    if(!CourseValidation())
    {
        alert("Error - Course not selected");

        return;
    }
    document.getElementById("FinalLabel").style.display = "block";
    document.getElementById("FinalLabel").innerText = "Registration complete";
}

