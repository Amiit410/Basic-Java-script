$(function () {
    $("#addtask").click(function () {
        var tablelength = $("#table2 tr").length;

        var task = $("#input").val();


        if (!task) { return; }

        var tr = document.createElement("tr");
        tr.id = tablelength + 1;

        var td1 = document.createElement("td");
        td1.textContent = tablelength + 1;

        var td2 = document.createElement("td");
        td2.id = `task${tablelength+1}`;
        td2.textContent = task;

        var td3 = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox${tablelength+1}`;

        checkbox.addEventListener("click", function () {
            var ischecked = $(`#${checkbox.id}`).is(":checked");
            if(ischecked)
            {
                $(`#${td2.id}`).css("text-decoration","line-through");
            }
            else
            {
                $(`#${td2.id}`).css("text-decoration","none");
            }
        })

        td3.appendChild(checkbox);

        var td4 = document.createElement("td");
        var btn = document.createElement("input");
        btn.type = "button";
        btn.value = "del";
        btn.id = "removetask"
        btn.addEventListener("click", function () {
            $(`#${tr.id}`).remove();
        })

        td4.appendChild(btn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        var table2 = document.getElementById("table2");
        table2.appendChild(tr);

        $("#input").val("");
    })
})