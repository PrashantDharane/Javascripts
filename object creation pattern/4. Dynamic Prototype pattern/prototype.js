var itemProto = function (name,price,brand) {
  this.name = name;
  this.price = price;
  this.brand = brand;
  if (typeof this.printItem != "function") {
    itemProto.prototype.printItem = function () {
      console.log("Name: "+this.name+" price: "+this.price+" brand: "+this.brand);
    };
  }

};



var item1 = new itemProto("Oneplus 5",5000,"Oneplus");
var item2 = new itemProto("Samsung s8",60000,"Samsung");


item1.printItem();
item2.printItem();


//the only issue in normal prototypes is overcomed in above example
