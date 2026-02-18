$(function(){

    $("#_username").attr("placeholder","Enter Username")
    $("#_password").attr("placeholder","Enter Password")

    localStorage.setItem("username","Admin");
    localStorage.setItem("password","Admin@123");

    $("#loginbtn").click(function(){
        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");
        var userinput = $("#_username").val();
        var passinput = $("#_password").val();

        if(userinput === username && passinput === password)
        {

            $("#chklabel").show().text("Registration complete");
        }
        else
        {
            $("#chklabel").show().text("Wrong id or password");
        }
    });
});


