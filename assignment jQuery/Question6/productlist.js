

$(function () {
    var products = [
        {
            "id": "#1",
            "productname": "HP elitebook 840g",
            "productprice": 45999,
        },
        {
            "id": "#2",
            "productname": "Iphone 17 pro max",
            "productprice": 143999,
        },
        {
            "id": "#3",
            "productname": "Samsungs 24 ultra",
            "productprice": 132999,
        },
        {
            "id": "#4",
            "productname": "Ipad pro",
            "productprice": 142999,
        },
        {
            "id": "#5",
            "productname": "Play station 5",
            "productprice": 42999,
        },
        {
            "id": "#6",
            "productname": "Sony Headphone ",
            "productprice": 22999,
        },
        {
            "id": "#7",
            "productname": "Thumps up",
            "productprice": 9,
        },
        {
            "id": "#8",
            "productname": "Burger",
            "productprice": 229,
        },
        {
            "id": "#9",
            "productname": "Cycle",
            "productprice": 3199,
        },
        {
            "id": "#10",
            "productname": "Coca Cola",
            "productprice": 11,
        },
    ]

    $(".productadd").on("click", function () {
        var id = $(this).attr("id");
        var item;
        for (var i of products) {
            if (i.id === id) {
                item = i;
                break;
            }
        }

        var tabellength = $("#checkouttable tbody tr").length + 1;
        var tr = document.createElement("tr");
        tr.id = tabellength;

        var td1 = document.createElement("td");
        td1.textContent = tabellength;

        var td2 = document.createElement("td");
        td2.textContent = item.productname;

        var td3 = document.createElement("td");
        td3.textContent = item.productprice;

        var td4 = document.createElement("td");

        var quantity = document.createElement("input");
        var td5 = document.createElement("td");

        var increment = document.createElement("input");
        increment.type = "button";
        increment.value = "+";

        $(increment).on("click", function () {
            var v1 = parseFloat($(`#${quantity.id}`).val());
            $(`#${quantity.id}`).val(v1 + 1);
            td5.textContent = parseFloat($(`#${quantity.id}`).val()) * item.productprice;
            if (isNaN(td5.textContent)) {
                td5.textContent = item.productprice;
            }
            var totalamont = parseFloat($("#totalamount").text());
            $("#totalamount").text(totalamont + item.productprice);
        })

        var decrement = document.createElement("input");
        decrement.type = "button";
        decrement.value = "-";

        $(decrement).on("click", function () {
            var v1 = parseFloat($(`#${quantity.id}`).val());
            if (v1 === 1) {
                return;
            }
            $(`#${quantity.id}`).val(v1 - 1);
            td5.textContent = parseFloat($(`#${quantity.id}`).val()) * item.productprice;
            if (isNaN(td5.textContent)) {
                td5.textContent = item.productprice;
            }
            var totalamont = parseFloat($("#totalamount").text());
            $("#totalamount").text(totalamont - item.productprice);
        })

        quantity.defaultValue = 1;
        quantity.readOnly = true;
        quantity.className = "quantity"
        quantity.type = "number";
        quantity.id = `quantity${tabellength}`;

        td5.textContent = item.productprice;
        td4.appendChild(decrement);
        td4.appendChild(quantity);
        td4.appendChild(increment);
        var input = document.createElement("input");
        input.type = "button";
        input.id = "delete";
        input.value = "del";

        $(input).on("click", function () {
            var totalamont = parseFloat($("#totalamount").text());
            $("#totalamount").text(totalamont - parseFloat(td5.textContent));
            $(`#${tr.id}`).remove();
        })

        var td6 = document.createElement("td");
        td6.appendChild(input);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        $("#checkoutlist").append(tr);

        var totalamont = parseFloat($("#totalamount").text());
        $("#totalamount").text(totalamont + item.productprice);
    })
})

