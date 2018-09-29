// let fahrenheit = 50;


// let celsius = (fahrenheit - 32) * 5/9;
// console.log(celsius);

// let kelvin = (fahrenheit + 459.67) * 5/9;
// console.log(kelvin);

// let age = 26;

// let child = age <= 7;
// let senior = age >= 65;
// console.log(child);
// console.log(senior);


// let convertFahrenheitToCelsius = function(x) {
//    let celsius = (x - 32) * 5/9;
//   return celsius

// }

// let celsius1 = convertFahrenheitToCelsius(32);
// console.log(celsius1);
// let celsius2 = convertFahrenheitToCelsius(68);
// console.log(celsius2);

// let getTip = function (total, tipPercent = .2){
//     let result = total * tipPercent;
//     let percent = tipPercent * 100;
//     return console.log(`A ${percent}% tip on ${total} would be ${result}`)

// }

// let first = getTip(30, .3)

// let calc = function(studentsScore, possibleScore){
//    let result = studentsScore / possibleScore;
//    let percentage = result * 100;
//    if(percentage >= 90){
//        return console.log(`You got A (${percentage}%)`)
//    }
//    else if(percentage >= 80 && percentage <=89){
//        return console.log(`You got B (${percentage}%)`)
//    }
//    else if(percentage >= 70 && percentage <=79){
//     return console.log(`You got C (${percentage}%)`)
// }
// else if(percentage >= 60 && percentage <=69){
//     return console.log(`You got D (${percentage}%)`)
// }
// else if(percentage >= 50 && percentage <=59){
//     return console.log(`You got E (${percentage}%)`)
// }
// else{
//     return console.log('You failed Exams')
// }
// }

// calc(9, 20);

// let human = {
//     name : 'David',
//     age : 23,
//     location : 'Georgia, Rustavi',
// }

// console.log(`${human.name} is ${human.age} and lives in ${human.location}`)

// let temperatures = function (fahrenheit){
//      return {
//          fahrenheit: fahrenheit,
//          kelvin: (fahrenheit + 459.67) * 5/9,
//          celsius: (fahrenheit - 32) * 5/9,
//      }

// }

// console.log(temperatures(32));

// let temp1 = temperatures(64);
// console.log(temp1);


// let myAccount = {
//     name: 'Yle',
//     age: 23,
// }

// let anotherAccount = myAccount;

// anotherAccount.name = 'siri';

// console.log(myAccount);
// console.log(anotherAccount);

// let myAccount = {
//     name: 'David Karseladze',
//     expenses: 0,
//     income: 0,
// }


// let addIncome = function(example, amount){
//     example.income = example.income + amount
// }

// let addExpense = function(example, amount){
//     example.expenses = example.expenses + amount;
// }

// let resetAccount = function(example){
//     example.expenses = 0;
//     example.income = 0;
// }

// let getAccountSummary = function(example){
//     console.log(`Accounts expanses is ${example.expenses} , income is ${example.income} 
//     and balance is ${example.income - example.expenses} `)
// }

// addIncome(myAccount, 10);
// addIncome(myAccount, 20);
// addExpense(myAccount, 20);
// getAccountSummary(myAccount);
// resetAccount(myAccount);
// getAccountSummary(myAccount);

// let restaurant = {
//     name: "Madagoni",
//     guestCapacity: 100,
//     guestCount: 0,

//     seatParty: function(people){
//         return this.guestCount = this.guestCount + people;
//     },
//     removeParty: function(people){
//         return this.guestCount = this.guestCount - people;
//     },
//     checkAvailability: function(people){
//         let seatsLeft = this.guestCapacity - this.guestCount;
//         return people <= seatsLeft
//     }
// }

// let firstWave = restaurant.seatParty(20);
// let secondWave = restaurant.seatParty(30);
// console.log(restaurant.guestCount);
// let thirdWave = restaurant.removeParty(20);
// console.log(restaurant.guestCount);
// let fourthWave = restaurant.checkAvailability(71);
// console.log(fourthWave);

// let name = '        David Karseladze  ';

// console.log(name.trim())


// function isValidPassword(string){
//    if(string.length > 8 && string.includes('password')){
//        return true;
//    } 
//    else{
//        return false;
//    }
// }

// console.log(isValidPassword('123password28'));
// console.log(isValidPassword('password'));


// const todos = ['Kiss my Ass', 'Then my Dick', 'Then give me food', 'Who'];

// todos.splice(2, 1);
// todos.push('Last item');
// todos.shift();
// console.log(todos);

// var MyModule = {
//     name: 'Habrahabr',
//     sayPreved: function(name) {
//        alert('PREVED ' + this.name.toUpperCase())
//     },   
//     sayPrevedToHabrahabr: function() {
//         this.sayPreved(this.name);
//      }
//  }
//  MyModule.sayPreved();
//  MyModule.sayPrevedToHabrahabr();

// const todos = [
//     {title: 'Dato',
//      completed: true,
// },
// {
//     title: 'Sandro',
//     completed: false,
// },
// {
//     title: 'Zura',
//     completed: true,
// },
// {
//     title: 'Giorgi',
//     completed: false,
// },
// {
//     title: 'Data',
//     completed: true,
// }
// ];
// const sortTodos = function(todos){
//     todos.sort( function(a, b){
//         if( a.completed &&  !b.completed){
//             return 1
        
//         } else if( !a.completed && b.completed){
//              return -1
//         }
//         else{
//             return 0;
//         }
        
//     })
// }
// sortTodos(todos);
// console.log(todos);

// const findCompletedFalse = function(notes, query){
//     return todos.filter(function (note, index){
//         let completeFalse = note.completed.toString().includes(query);
//         return completeFalse;
//     })

// }
// console.log(findCompletedFalse(todos, 'false'));

// const findAge = function(notes, query){
//     return todos.filter(function (note, index){
//         let isTitleMatch = note.completed.toLowerCase().includes(query.toLowerCase());
//        //  console.log(isTitleMatch);
//         return isTitleMatch;
//        })
    
// }
// console.log(findAge(todos, 'false'));

// console.log(filteredNotes);
// todos.forEach(function (item, index){
//     let num = index + 1;
//     console.log(`${num}'s To do ${item} `)
// })

// for(let i = 0; i < todos.length; i++){
//     let index = i + 1;
//     console.log(`${index} is to ${todos[i]} !`)
// }

// function toObject(arr){
//     let object = {};
   
//     for(let i = 0; i <= arr.length; i++){
//         object[i] = arr[i];
      

//     }
//     return object;
// }
// console.log(toObject(todos));

// function removeTodo(todos, noteTitle){
 
//     let note =  todos.findIndex(function (todos, index){
//         return todos.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     // return note;
//     if( note > -1 ){
//       todos.splice(note, 1);
//     }
  
// }

// let first = removeTodo(todos, 'dato');

// console.log(first);
// todos.splice(first, 1);
// console.log(todos);





const account = {
    name: 'David Karseladze',
    expanses: [],
    income: [],
    addExpense: function(description, amount){
        this.expanses.push({
            description: description,
            amount: amount,
        })
    },
  
   addIncome: function(description, amount){
      this.income.push({
          description: description,
          amount: amount,
      })
   },
    getAccountSummary: function(){
       let sum = 0;
    this.expanses.forEach(function(expanses){
     sum = sum + expanses.amount
     });
     let anotherSum = 0;
     this.income.forEach(function(income){
         anotherSum = anotherSum + income.amount;
     })
     return `${this.name} has  a balance of $${anotherSum - sum}. ${anotherSum} in income. $${sum} in expanses`;
     },
}

account.addExpense('Tea', 2);
account.addExpense('Cigarretes', 5);
console.log(account.expanses);
account.addIncome('Work', 400);
console.log(account.getAccountSummary())
seatParty = function(people){
            return this.guestCount = this.guestCount + people;
        }
   
    
// let h1 = document.createElement('h1');
// h1.textContent = 'Hello Biatches';
// document.body.appendChild(h1);

// for(let i = 0 ; i < 5 ; i++){
//     let p = document.createElement('p')
//     p.textContent = 'P element';

//     p.style.fontSize = '25px';
//     h1.appendChild(p);
// }



