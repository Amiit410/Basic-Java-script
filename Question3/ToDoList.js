function TaskComplete(id,labelid){
    var checkbox = document.getElementById(id);
    if(checkbox.checked)
    {
        document.getElementById(labelid).style.textDecoration = "line-through";
    }
    else
    {
        document.getElementById(labelid).style.textDecoration = "none";
    }
}
var inc = 1;
function AddTask(){
    var task = document.getElementById("input").value;
    if(!task){
        document.getElementById("input").style.border = '1px solid red';
        return;
    }
     document.getElementById("input").style.border = '1px solid black';
    document.getElementById("table2").innerHTML += `<tr id = "tr${inc}">
                    <td><label for="" class = "tasks" id = "settask${inc}">${task}</label></td>
                    <td><input type="checkbox" name = "settask${inc}" id = "CheckBox${inc}" onclick="TaskComplete(id,name)"></td>
                    <td><input type="button" name = "settask${inc}" value = "Remove" id = "removetask${inc}" onclick=document.getElementById("tr${inc}").parentElement.remove()></td>
                </tr>`
    inc++;
    document.getElementById("input").value = null;

    
}