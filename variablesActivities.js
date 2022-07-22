//                        ACTIVITY 1

/* Create a program that stores someone’s name,
age and favourite colour and log it to the console
in a complete sentence using Template Literals.*/

let nam = 'Mo';
let age = 25;
let favouriteAnimal = 'Tiger';

console.log(`Hello my name is ${nam}. I am ${age} years old and my favourite animal is a ${favouriteAnimal}.` );

//                        STETCH

/*Update all of your variables and write out a
new sentence underneath your original.*/

nam = 'Gamal';
age = 26;
favouriteAnimal = 'Panda';
console.log(`My best friends name is ${nam} and he is ${age}. His favourite animal is a ${favouriteAnimal}.` );


//                        ACTIVITY 2

/*Create a program that stores what you eat today
for breakfast, lunch and dinner. Log these to the
console. */

let breakfast = "Eggs";
let lunch = "Sandwhich";
let dinner = "Crisp";

console.log(`Today I had ${breakfast} for Breakfast, ${lunch} for lunch and a ${dinner} for dinner.`);

//                           STRETCH

/*Update each of these variables to what you
will eat tomorrow. Log these to the console. */

breakfast = "Toast";
lunch = "Salad";
dinner = "Soup";

console.log(`Tomorrow I'm going to have ${breakfast} for Breakfast, ${lunch} for lunch and ${dinner} for dinner.`);


//                         ACTIVITY 3
/* Create a program that calculates the number
of days from today to your birth date. 
*/

let start = new Date(2022,6,17);
let end = new Date(2023,4,17);

let differenceTime = end.getTime() - start.getTime();
let differenceDate = differenceTime / (1000 * 3600 * 24);

console.log(`The number of days between today and my birthday is ${differenceDate} `);





//                           ACTIVITY 4

/*> Create 9 variables: space1, space2… space9.
> Assign either the value ‘x’,’o’,’ ‘, to each of
these variables.
> Insert the variables into your board using the
${varName} syntax and make it look like the
displayed board. */

let space1 = "x"
let space2 = "o"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "

console.log(`   |       |    `);
console.log(`${space1}  | ${space2}     |${space3}    `);
console.log(`   |       |    `);
console.log(`----------------`);
console.log(`   |       |    `);
console.log(`${space4}  | ${space5}     |${space6}    `);
console.log(`   |       |    `);
console.log(`----------------`);
console.log(`   |       |    `);
console.log(`${space7}  | ${space8}     |${space9}    `);
console.log(`   |       |    `);





