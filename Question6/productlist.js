class products
{
    constructor(productid,productname,productprice)
    {
        this.productid = productid;
        this.productname = productname;
        this.productprice = productprice;
    }
}

var Arr = [];
var product1 = new products("#1","HP elitebook 840g",45999);

// product1.productid = "#1";
// product1.productname = "HP elitebook 840g";
// product1.productprice = 45999;
Arr.push(product1);

var product2 = new products("#2","Iphone 17 pro max",143999);
Arr.push(product2);

var product3 = new products("#3","Samsungs 24 ultra",132999);
Arr.push(product3);

var product4 = new products("#4","Ipad pro",142999);
Arr.push(product4);

var product5 = new products("#5","Plastation 5",42999);
Arr.push(product5);

var product6 = new products("#6","Sony Headphone",22999);
Arr.push(product6);
var product7 = new products("#7","Thumps up",9);
Arr.push(product7);

var product8 = new products("#8","Burger",229);
Arr.push(product8);

var product9 = new products("#9","Cycle",3199);
Arr.push(product9);

var product10 = new products("#10","Coca Cola",11);
Arr.push(product10);

var listcount = 1;
var totalamount = 0;
document.getElementById("totalamount").innerText = totalamount;

function AddToCart(id)
{
    
    for(var p of Arr)
    {
        if(p.productid === id)
        {
            document.getElementById("checkoutlist").innerHTML += 
            `<tr id = "${listcount}">
                <td>${listcount}</td>
                <td>${p.productname}</td>
                <td>${p.productprice}</td>
                <td>1</td>
                <td>${p.productprice * 1}</td>
                <td><input type="button" value="del" id="delete" onclick = "RemoveFromList(${listcount},${p.productprice})"></td>
            </tr>`;
            totalamount += parseFloat(p.productprice);

            document.getElementById("totalamount").innerText = totalamount;
            listcount++;
        }
    }
}

function RemoveFromList(productcount,price)
{
    totalamount -= parseFloat(price);
    document.getElementById(productcount).remove();
    document.getElementById("totalamount").innerText = totalamount;
}