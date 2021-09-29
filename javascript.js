
const a1 = ["Banana","Orange","Apple","Mango"];
const a2 = ["kiwi","blueberry","strawberry","Avocoda","strawberry"]
const a3 = ["Banana", "Orange", "Apple", "Mango"];
const a4 = ["hi","welcome","bye","cya"]
const a5 = ["welcome","hello","goodbye","goodnight"]
const a6 = ["Banana", "Orange", "Apple", "Mango"]
const a7 = ["icecream","tea","coffee","greentea"]
const a8 = ["goku","vegeta","broly","jiren"]

const ages =[24,26,29,12];
const points = [40, 100, 1, 5, 25, 10]

const items = [
{id : 1 , item : "android" , cost : 25000},
{id : 2 , item : "iphone" , cost : 65000},
{id : 3 , item : "mac" , cost : 95000},
];




//2)constructor 

console.log(a1.constructor);

//3)copywithin 

console.log(a1.copyWithin(0,2))

//4)entries 

const a = a1.entries();

for (let x of a) {
	console.log(x)
}

//5)every

console.log(ages.every(checkAge));

function checkAge (age) {
	return age > 18 ;
}

//6)fill 

// console.log(a1.fill("kiwi"));

console.log(a1.fill("kiwi",2,4))


//7)filter 

// console.log(ages.filter(checkAdult))

// function checkAdult(age1) {
// 	return age1 > 18 ;
// }

let affordable = items.filter(function(value) {
 return value.cost > 30000;
});

console.log("affordable",affordable);




//8)find 

// console.log(ages.find(checkAGE))

// function checkAGE(age2){
// 	return age2 > 18
// }

let affordable1 = items.find(function(value1) {
	return value1.cost > 30000;
});

console.log("affordable1",affordable1);


//9)findindex


let affordable2 = items.findIndex(function(value2){
	return value2.cost > 30000;
});

console.log("affordable2",affordable2);


//10)forEach

let text = "";

function myFunction(item, index, arr) {
   text += index + ": " + item + "<br>"; 
}
console.log(a1.forEach(myFunction));

//11)from

console.log(Array.from("ABCDEFG"))

//12)includes

console.log(a1.includes("Mango"))

console.log(a1.includes("Banana",3))

//13)indexof 

console.log(a2.indexOf("Avocoda"));
console.log(a2.indexOf("strawberry",2));

//14)isArray

console.log(Array.isArray(a2))

//15)join

console.log(a2.join())

console.log(a2.join("and"))

//16)keys

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text1 = "";
for (let x of keys) {
  text1 += x 
}

console.log(text1)


//17)length

console.log(a2.length)


//18)lastIndexOf

console.log(a2.lastIndexOf("strawberry"))

console.log(a2.lastIndexOf("strawberry",3))



//19)Map 

console.log(items.map(getFullDetails));

function getFullDetails(list) {
	return [list.item,list.cost].join(" ")
}

const number = [9,14,25,6]
const newArr = number.map(Math.sqrt)

console.log(newArr)


//20)pop

console.log(a2.pop());

//21)prototype 

Array.prototype.myUcase = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

var fruits2 = ["Banana","Orange","Apple","Mango"]
console.log(fruits2.myUcase())


//22)push

console.log(a2.push("raspberry"))


//23)reduce

const numbers = [145,20,25]

function myFun(total, num) {
	return total - num;
}

console.log(numbers.reduce(myFun));


//24)reduceRight

console.log(numbers.reduceRight(myFun))

//25)reverse

console.log(a3.reverse())

//26)shift

console.log(a4.shift())

//26)slice

console.log(a5.slice(1,3))


//27)some

console.log(ages.some(checkAGE))

function checkAGE(age2){
	return age2 >= 18
}


//28)sort

console.log(a5.sort())

/// cause sort method will give incorrect result

/// sort ascending orders with numbers 
console.log(points.sort(function(a,b){return a-b}))


/// sort descending orders with numbers
console.log(points.sort(function(a,b){return b-a})) 


//29)splice

console.log(a6.splice(2, 1, "Lemon", "Kiwi"))


//30)toString

console.log(a7.toString())

//31)unshift

console.log(a7.unshift("coldcoffee","blacktea"))

//32)valueOf

console.log(a8.valueOf())