var iphone17 = 143999;
var samsungs24ultra = 132999;
var hplaptop = 45999;
var ipad = 142999;
var playstation5 = 42999;
var sonyheadphone = 22999;

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
var product1 = new products();

product1.productid = 1;
product1.productname = "HP laptop";
product1.productprice = 45999;
Arr.push(product1);

document.writeln(product1.productid)
document.writeln(product1.productname)
document.writeln(product1.productprice)

var product2 = new products();

product2.productid = 2;
product2.productname = "iphone";
product2.productprice = 145999;