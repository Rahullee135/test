let person = {firstname:"rahul",lastname:"prasad",age:"22",Department:"BE.ECE"}

const person1 = {firstname:"rahul",lastname:"prasad",age:"22",Department:"BE.ECE"}


const person3 = {}

person3.firstname="rahul",
person3.lastname="prasad",
person3.age="22",
person3.Department="BE.ECE"

const person4 = new Object()

person4.firstname="rahul",
person4.lastname="prasad",
person4.age="22",
person4.Department="BE.ECE"


const person5 = {
	firstname:"rahul",
	lastname:"prasad",
	age:"22",
	Department:"BE.ECE",

	siblings:{
		brother:"sarathi",
		sister:"sathya"
	}
}



console.log(person.firstname)

console.log(person1.lastname)

console.log(person1.firstname+" is "+person1.lastname+" year old ")

console.log(person3)

console.log(person3.firstname+" " +person3.lastname)

console.log(person4)

console.log(person5.siblings.sister)

console.log(person5['firstname']+person5['lastname'])

