$(document).ready(function () {
    var nameValidation = false;
    var emailValidation = false;
    var mobileValidation = false;
    var ageValidation = false;
    var genderValidation = false;
    var courseValidation = false;

    $("#_FN").blur(function () {
        var fullname = $(this).val();
        var pattern = new RegExp(/^([A-Za-z]+)\s([A-Za-z]+)$/);
        if (pattern.test(fullname)) {
            nameValidation = true;
            $(this).css("border", "1px solid black");
        }
        else {
            nameValidation = false;
            $(this).css("border", "2px solid red");
        }
    })
    $("#_Email").blur(function () {
        var email = $(this).val();
        var pattern = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
        if (pattern.test(email)) {
            emailValidation = true;
            $(this).css("border", "1px solid black");
        }
        else {
            emailValidation = false;
            $(this).css("border", "2px solid red");
        }
    })


    $("#_MN").blur(function () {
        var mobile = $(this).val();
        var pattern = new RegExp(/^[0-9]{10}$/);
        if (pattern.test(mobile)) {
            mobileValidation = true;
            $(this).css("border", "1px solid black");
        }
        else {
            mobileValidation = false;
            $(this).css("border", "2px solid red");
        }
    })

    $("#_Age").blur(function () {
        var age = parseFloat($(this).val());
        var pattern = new RegExp(/^[0-9]{2}$/);
        if (pattern.test(age) && age >= 18 && age <= 60) {
            ageValidation = true;
            $(this).css("border", "1px solid black");
        }
        else {
            ageValidation = false;
            $(this).css("border", "2px solid red");
        }
    })

    $("#_Courses").blur(function () {
        if ($("#_Courses").val()) {
            courseValidation = true;
            $(this).css("border", "1px solid black");
        } else {
            courseValidation = false;
            $(this).css("border", "2px solid red");
        }
    })

    $("#_SubmitBtn").click(function () {
        if ($(`[name = "gender"]:checked`).length !== 0) {
            genderValidation = true;
        }
        else {
            genderValidation = false;
        }

        if (!nameValidation) {
            $("#_FN").css("border", "2px solid red");
            alert("invalid Full Name");
            $("#FinalLabel").hide();
            return;
        }
        if (!emailValidation) {
            $("#_Email").css("border", "2px solid red");
            alert("invalid Email");
            $("#FinalLabel").hide();
            return;
        }
        if (!mobileValidation) {
            $("#_MN").css("border", "2px solid red");
            alert("invalid Mobile number");
            $("#FinalLabel").hide();
            return;
        }
        if (!ageValidation) {
            $("#_Age").css("border", "2px solid red");
            alert("Invalid Age");
            $("#FinalLabel").hide();
            return;
        }
        if (!genderValidation) {
            alert("Please select gender");
            $("#FinalLabel").hide();
            return;
        }
        if (!courseValidation) {
            $("#_Courses").css("border", "2px solid red");
            alert("please select Course");
            $("#FinalLabel").hide();
            return;
        }
        if (nameValidation && courseValidation && genderValidation && mobileValidation && courseValidation && emailValidation) {
            $("#FinalLabel").show();
            $("#FinalLabel").text("Student registration completed!!!");
        }
        else {
            $("#FinalLabel").hide();
        }
    })

});