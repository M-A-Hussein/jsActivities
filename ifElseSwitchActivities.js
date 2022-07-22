
//                      ACTIVITY 1



// let age = 17;
// let country = "UK";

//     if (age >= 17 && country == "UK"){
//         console.log("Yes I can serve you.");
//     }else {
//         console.log("You aren’t old enough or you are in the wrong country.");
//     } 

    //                        ACTIVITY 2

    // Create a variable for any pizza topping. 
// const topping = "Vegatables";
// const topping1 = "olives";
// const topping2 = "Pineapple";
//     /* Create a switch statement, if the topping is one of your
//     favourite ingredients, log to the console “These are
//     important ingredients for my pizza.” If you don’t mind
//     having Pepperoni for example log to the console “I don’t
//     mind having ${topping} on my pizza. */
// switch (topping){
//     case "Pepperoni":
//     case "Spicy beef":
//         console.log(`“I do not mind having ${topping1} on my pizza.`);
//         break;
//     case "Vegatables":
//     case "Cheese":
//         console.log("These are important ingredients for my pizza.");
//        break;
//         /*Finally, for any topping you don’t like log “${topping}
//         should not be on a pizza.” */
//     default:
//         console.log(`${topping2} should not be on a pizza. `);
// };

//                        ACTIVITY 3

/* Create a variable called password.
Check how many letters are in the password, if there are
less than 8, log to the console that the password is too
short. Otherwise log the password to the console*/

// let password = "Pass";

// if (password.length >= 8){
//     console.log(password);
// }else {
//     console.log("Password is too short");
// }

//                        STRETCH

/* Create a variable called num.
Check if the variable is divisible by 3 or 5. If it
is, log “This number is divisible by 3 or 5”.
Otherwise log something else. */

// let num = 30

// if (num % 3 === 0){
//     console.log(`${num} is divisible by 3`);
// } else if (num % 5 === 0) {
//         console.log(`${num} is divisible by 5`);
// }else{
//     console.log(`Something else`)
// }



//                       ACTIVITY 4

/*Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s divisible by
5 log “buzz” to the console, if it’s divisible by both 3 and 5 log
“fizz buzz” to the console. Otherwise log num to the console. */
   

// let num = 26

// if (num % 3 === 0 && num % 5 !== 0){
//     console.log("Fizz");

// } else if (num % 5 === 0 && num % 3 !== 0) {
//         console.log("Buzz");

// }else if (num % 3 === 0 && num % 5 === 0){
//     console.log("Fizz buzz");

// }else{
//     console.log(num);
// }






//                        ACTIVITY 6

/*Create a variable called time, a variable called placeOfWork
and a variable called townOfHome. Create an if statement that
logs to the console where someone is at times of the day. E.g. if
the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. */

let time = 9 ;
let placeOfwork = 9;
let townHome = 7;

if (time == placeOfwork){
    console.log(`At ${time} I'm at work `);
}else if (time == townHome){
    console.log(`At ${time} I'm commuting`)
   
}else{
    console.log(`At ${time} I'm at home`);
}