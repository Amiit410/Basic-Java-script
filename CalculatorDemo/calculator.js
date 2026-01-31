var operator;
var initialvalue = 0;
var finalvalue = 0;
function _clear()
{
    operator;
    initialvalue = 0
    finalvalue = 0;
    document.getElementById("_input").value = null;
    document.getElementById("_result").value = null;
}
function _digit(id)
{
    document.getElementById("_result").value = null;
    
    var v1 = document.getElementById("_input").value;
    var val = v1 + document.getElementById(id).value;
    document.getElementById("_input").value = val;
}
function result()
{
    var v1 = document.getElementById("_input").value;
    document.getElementById("_input").value = null;
    if(v1 == "" || v1 == 'undefined'){
        alert("Enter valid number");
        return false;
    }
    finalvalue = parseFloat(v1);
    
    var ans;
    if(operator == "+")
    {
        ans= initialvalue + finalvalue;
        document.getElementById("_result").value = `${initialvalue} + ${finalvalue} = ${ans}`;
    }
    if(operator == "-")
    {
        ans = initialvalue - finalvalue;
        document.getElementById("_result").value = `${initialvalue} - ${finalvalue} = ${ans}`;
    }
    if(operator == "x")
    {
        ans = initialvalue * finalvalue;
        document.getElementById("_result").value = `${initialvalue} * ${finalvalue} = ${ans}`;
    }
    if(operator == "/")
    {
        if(finalvalue == 0)
        {
            document.getElementById("_result").value = "not divisible by 0";
            return false;
        }
        ans = initialvalue / finalvalue;
        document.getElementById("_result").value = `${initialvalue} / ${finalvalue} = ${ans}`;
    }
}
function _operation(optr)
{
    var v1 = document.getElementById("_input").value;
    if(v1 == "" || v1 == 'undefined'){
        alert("Enter valid number");
        return false;
    }
    operator = optr;
    initialvalue = parseFloat(v1);
    document.getElementById("_input").value = null;
    
}