//               ACTIVITY 1
const person = {
    name: "Mohammed",
    age: "25",
    songs: [
        "A song",
        "A song",
        "A song"
    ],
    sayHi (){
        return `Hello my name is ${this.name}`;
    }
};

console.log(person.sayHi());



//                 ACTIVITY 2

const pet = {
    name: "Bubbles",
    typeOfPet:"snake",
    age:2,
    color: "multi-coloured",
    eat(){
        return `${pet.name} is eating!`
    },
    drinking(){
        return `${pet.name} is drinking!`

    }
};
console.log(pet.eat());

//                 ACTIVITY 3

const coffeeShop = {

    Branch: "The Concrete Wilderness Branch ",
    drinks:[
    ["Fanta", 1.00],
    ["Coke", 1.20], 
    ["Redbull", 2.00]
   ],
    food:[
    ["Burgers", 3.50], 
    ["Pizza", 4.00], 
    ["fries", 2.00]
   ],
   drinksOrdered(item, price){
    return this.drinks[item][price]
   },
   foodOrdered(item, price){
    return  this.food[item][price]
   }
};

let total = coffeeShop.foodOrdered(0,1) + coffeeShop.drinksOrdered(0,1);

console.log(` £${coffeeShop.foodOrdered(0,1)}  and £${coffeeShop.drinksOrdered(0,1)} Bringing your total to: £${total}`);
// I couldn't find a way to bring up the name for the item as well as the price. 