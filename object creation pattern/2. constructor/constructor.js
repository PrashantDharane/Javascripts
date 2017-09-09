var ItemConstructor = function(name,price,brand) {
  this.name = name;
  this.price = price;
  this.brand = brand;

  this.printItem = function () {
    console.log("Name: "+this.name+" Price: "+this.name+" Brand: "+this.brand);
  }
}

// Now you can see we are using new operator here
// this is because we are using Contructors
var item1 = new ItemConstructor("OnePlus 3T",38000,"OnePlus");
var item2 = new ItemConstructor("iPhone 6",40000,"Apple");

item1.printItem();
item2.printItem();
