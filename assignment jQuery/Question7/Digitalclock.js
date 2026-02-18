function SetTime(){
    var today = moment();
    var localtime = today.format("hh:mm:ss a");
    $("#currenttime").text(localtime);

    var localdate = today.format("ddd,MMM DD,YYYY");
    $("#date").text(localdate);


    
}

setInterval(SetTime,1000);