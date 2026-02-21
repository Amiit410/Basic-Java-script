function SetTime(){
    var today = new Date();
    
    document.getElementById("currenttime").innerText = today.toLocaleTimeString();
    document.getElementById("date").innerText = today.toDateString();
    
}

setInterval(SetTime,1000);