$(function () {

    $("#value1").attr({
        "placeholder": "First Number",
        "title": "Enter your first number"
    });
    $("#value2").attr({
        "placeholder": "Second Number",
        "title": "Enter your Second number"
    });
    $("#result").attr({
        "placeholder": "Result",
        "title": "Result"
    });
    $(".inputs").click(function(){
        $("#result").val("");
    })

    var id = $(`[type="button"]`).click(function () {
        var value1 = parseFloat($("#value1").val());
        var value2 = parseFloat($("#value2").val());
        var pattern = new RegExp(/^[0-9]{0,10}$/);

        if (!pattern.test(value1)) {
            alert("Please enter the first value!!!");
            $("#value1").css("border", "2px solid red");
            return;
        }
        else {
            $("#value1").css("border", "1px solid black");
        }

        if (!pattern.test(value2)) {
            alert("Please enter the second value!!!");
            $("#value2").css("border", "2px solid red");
            return;
        }
        else {
            $("#value2").css("border", "1px solid black");
        }
        var id = $(this).attr("id");

        if (id === "add") {
            var sum = value1 + value2;
            $("#result").val(`${value1} + ${value2} = ${sum}`);
        }

        if (id === "sub") {
            var sum = value1 - value2;
            $("#result").val(`${value1} - ${value2} = ${sum}`);
        }

        if (id === "mult") {
            var sum = value1 * value2;
            $("#result").val(`${value1} * ${value2} = ${sum}`);
        }

        if (id === "div") {
            if (value2 === 0) {
                $("#value1").val('');
                $("#value2").val('');
                $("#result").val('');
                alert("denominator should not be zero");
                return;
            }
            var sum = value1 / value2;
            $("#result").val(`${value1} / ${value2} = ${sum}`);
        }

        $("#value1").val('');
        $("#value2").val('');
    });
})