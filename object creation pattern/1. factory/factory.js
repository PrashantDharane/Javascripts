var itemFactory = function (name,price,brand) {
  var itemObject = {};
  // we can also create a object using new Object();
  itemObject.name = name;
  itemObject.price = price;
  itemObject.brand = brand;

  itemObject.getItem = function () {
    return itemObject;
  }

  return itemObject;
}

var item1 = itemFactory("Oneplus 5",500,"Oneplus");
var item2 = itemFactory("iPhone 6",600,"Apple");

console.log(item1.getItem());
console.log(item2.getItem());
