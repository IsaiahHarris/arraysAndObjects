/*

Isaiah Harris
Arrays and Objects
Dec. 5, 2016

*/

var numbers = [1,2,3,4,5,6,7,8,9,10];
var names = ["Senior Tan", "Zak", "yoloha", "ohai", "Jeff"];
var colors = ["black", "red", "blue"];
var adj = ["smart", "dumb", "da kine", "fat", "big"];
var slang = ["scrap", "da kine", "li dat", "pau hana"];

var donut ={
  topping : ["sprinkles", "choco", "air"],
  filing : "jelly",
  shape : "square",
  count : 12
}

function whaeva(arg) {
  console.log(arg[1] + arg[2]);
}
whaeva(numbers)

function kms(smk){
  for(var smk.topping = smk[0]; smk.topping<=4;smk.topping ++){
    console.log("is good")
  }
}
kms(donut.topping);