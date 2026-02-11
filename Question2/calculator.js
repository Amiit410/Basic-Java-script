function ValidateInput(){
    var IsValidated = false;
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    var pattern1 = new RegExp(/^[0-9]{0,10}$/);
    var pattern2 = new RegExp(/^[0-9]{0,10}$/);

    if(!value1)
    {
        document.getElementById("value1").style.border = "2px solid red"
        IsValidated = false;
    }
    else if(!pattern1.test(value1))
    {
        document.getElementById("value1").style.border = "2px solid red"
        IsValidated = false;
    }
    else
    {
        document.getElementById("value1").style.border = "1px solid black"
        IsValidated = true;
    }
    if(!value2)
    {
        document.getElementById("value2").style.border = "2px solid red"
        IsValidated = false;
    }
    else if(!pattern2.test(value2))
    {
        document.getElementById("value2").style.border = "2px solid red"
        IsValidated = false;
    }
    else
    {
        document.getElementById("value2").style.border = "1px solid black"
        IsValidated = true;
    }
    return IsValidated;
}


function Addition()
{
    var val1 = parseFloat(document.getElementById("value1").value);
    var val2 = parseFloat(document.getElementById("value2").value);
    if(!ValidateInput()){
        return;
    }
    else
    {
        var sum = val1+val2;
        document.getElementById("result").value = sum;
    }
}
function Substraction()
{
    var val1 = parseFloat(document.getElementById("value1").value);
    var val2 = parseFloat(document.getElementById("value2").value);

    if(!ValidateInput()){
        return;
    }
    else
    {
        var sum = val1-val2;
        document.getElementById("result").value = sum;
    }
}
function Multiplication()
{
    var val1 = parseFloat(document.getElementById("value1").value);
    var val2 = parseFloat(document.getElementById("value2").value);

    if(!ValidateInput()){
        return;
    }
    else
    {
        var sum = val1*val2;
        document.getElementById("result").value = sum;
    }
}
function Division()
{
    var val1 = parseFloat(document.getElementById("value1").value);
    var val2 = parseFloat(document.getElementById("value2").value);
    if(val2 == 0)
    {
        document.getElementById("value2").style.border = "2px solid red";
        return;
    }
    if(!ValidateInput()){
        return;
    }
    else
    {
        var sum = val1/val2;
        document.getElementById("result").value = sum;
    }
}