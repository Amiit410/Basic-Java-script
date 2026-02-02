document.getElementById("loginbtn").onmouseover = OnmouselogInbtn;
document.getElementById("loginbtn").onmouseout = offmouselogInbtn;


function OnmouselogInbtn()
{
    document.getElementById("loginbtn").style.background =  'rgba(9, 112, 230, 0.92)';
}

function offmouselogInbtn()
{
    document.getElementById("loginbtn").style.background =  'rgba(9, 112, 230, 0.56)';
}
