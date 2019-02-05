let people = [{
  name: 'Mark',
  food: 'pizza'
}, {
  name: 'D$',
  food: 'meat'
}, {
  name: 'Porter',
  food: 'vegetables'
}, {
  name: 'Zach',
  food: 'pizza'
}, {
  name: 'Chrissy',
  food: 'pizza'
}
]

  ;

// for (let i = 0; i < people.length; i++) {
//   //alias a temporary variable for each iteration
//   const person = people[i];
//   console.log(`Hello my name is ${person.name} and my favorite food is ${person.food}`)
// }

// let i = 0;
// while (i < people.length) {
//   let person = people[i];
//   console.log(`Hello my name is ${person.name} and my favorite food is ${person.food}`)
//   i++
// }

// do {
//   console.log('once')
// } while (false);

// people.forEach(person => {
//   console.log(`Hello my name is ${person.name} and my favorite food is ${person.food}`)
// });

// //FILTER RETURNS AN ARRAY OF ITEMS THAT MEET THE CONDITION
// let pizzaLovers = people.filter(person => {
//   return person.food == 'pizza';
// })
// console.log(pizzaLovers);

//FIND RETURNS THE FIRST ELEMENT FROM THE ARRAY THAT MEETS A SET CONDITION
// let foundPerson = people.find(person => {
//   return person.food.toLowerCase() == 'vegetables'
// })
// console.log(foundPerson)

//MAP ITERATES OVER ARRAY AND RUNS THE FUNCTION WHATEVER IS RETURNED REPLACES EACH ELEMENT
// let justNames = people.map(person => person.name);

// let nums = [1, 2, 3, 4, 5, 6];
// let doubleNums = nums.map(num => num * 2)

//FOR IN
// let me = {
//   name: 'Jamie',
//   age: 28,
//   food: 'mac and cheese'
// }

// for (const key in me) {
//   console.log(key + ':', me[key])
// }


let template = ''
people.forEach(person => {
  template += `<li>${person.name} likes ${person.food}</li>`
})

document.getElementById('staff').innerHTML = template;













