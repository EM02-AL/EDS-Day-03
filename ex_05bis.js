function getBasketContent(selectedFruits) {
const fruits = ["straberry", "straberry", "straberry", "apple", "apple", "lime", "lime", "peach", "pear", "pear"]; 

if (selectedFruits > fruits.lenght) {
console.log ("Too many fruit(s)selected.")
return []
} 
console.log(fruits.length + "fruit(s) selected"); 
return fruits.splice(0, selectedFruits)
}

 

if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}
