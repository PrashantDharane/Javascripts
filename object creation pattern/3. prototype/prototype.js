var itemProto = function () {

};

itemProto.prototype.name = "Not assigned";
itemProto.prototype.price = 0;
itemProto.prototype.brand = "Not assigned";
itemProto.prototype.printItem = function () {
  console.log("Name: "+this.name+" price: "+this.price+" brand: "+this.brand);
};

var item1 = new itemProto();
item1.name = "Oneplus 5";
item1.price = 5000;
item1.brand = "Oneplus";

var item2 = new itemProto();
item2.name = "Samsung s8";
item2.brand = "Samsung"

item1.printItem();
item2.printItem();


//This way you can make lightweigth objects, but it is boring to write such along code though
//I said lightweigth because each tym u create a new instance of the object,
// it will not create duplicate instance of those method. i.e if u create thousand object they will still
// share same printItem(), this prototype is better and lightweight than factory and contructors
