fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function findFruitIndex(fruitName) {
if (fruits.indexOf(fruitName) == -1) 
return null

return fruits.indexOf(fruitName) ;
}

displayResult(findFruitIndex("Banana")) 
