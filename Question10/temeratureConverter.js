var operation = false;

function Change(){
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var heading = document.getElementById("heading");

    if(!operation)
    {
        from.innerText = "Fahrenheit";
        to.innerText = "Celcius";
        heading.innerText = "Fahrenheit to Celcius";
        operation = true;
    }
    else
    {
        from.innerText = "Celcius";
        to.innerText = "Fahrenheit";
        heading.innerText = "Celcius to Fahrenheit";
        operation = false;
    }
}


function Convert(){
    var elem = document.getElementById("input");
    var val = parseFloat(elem.value);

    var result = document.getElementById("result");
    if(!val)
    {
        elem.style.border = "2px solid red";
        elem.style.boxShadow = "0 2px 4px red"
    }
    else
    {
        elem.style.boxShadow = "0 1px 2px rgb(43, 42, 42),0 1px 2px rgb(58, 57, 57)"
        elem.style.border = "2px solid rgb(34, 33, 33)";
    }

    if(!operation)
    {
        var conversion = (val * 9/5) + 32;
        result.value = conversion;
    }
    else
    {
        var conversion = (val - 32) * 5/9;
        result.value = conversion;
    }

}