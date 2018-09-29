// const square = (num) => {
//   return num * num
// }

// console.log(square(2));


const people = [
    {
    name: 'David',
    age: 27,
    },{
    name: 'Sandro',
    age: 31,
    }, {
    name: 'Giorgi',
    age: 22,
    }
]


const defineAge = people.find((person) => person.age === 22);
console.log(defineAge.name);