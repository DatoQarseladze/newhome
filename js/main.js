

let date = new Date(2018, 3, 30);


function addDay(){
  {
      let divi = document.createElement('div');
      divi.id = "addDay";


for(let i = 0; i < 1; i++) {

  
  let childDiv = document.createElement('div');
  childDiv.className = "boxName1";
  divi.appendChild(childDiv);
  
  childDiv.style.backgroundColor = "green";

  
if(date.getDate() == 30) {
  childDiv.textContent = date;
  date.setDate(date.getDate()+2);
}
  else if(date.getDay() == '1') {
  childDiv.textContent = date;
  date.setDate(date.getDate()+2);
}
 else if(date.getDay() == '3'){
    childDiv.textContent = date;
   date.setDate(date.getDate()+2);
  }
  else if(date.getDay() == '5'){
    childDiv.textContent = date;
   date.setDate(date.getDate()+1);
  }
    else if(date.getDay() == '6'){
    childDiv.textContent = date;
   date.setDate(date.getDate()+2);
  }
}
for(let i = 0; i < 7; i++){
  let anotherChild = document.createElement('div');
  anotherChild.className = "boxName";
  divi.appendChild(anotherChild);
  anotherChild.textContent = '0';


}
document.querySelector('#map'); 
map.appendChild(divi);
  }
  yes(); 
  check();
}
function check(){
  let box = document.getElementsByClassName('boxName');
  for(let i = 0; i < box.length; i++){
    if(box[i].textContent == "0"){
      box[i].style.backgroundColor = "red";
    }
    else{
      box[i].style.backgroundColor = "green";
    }
  }
}
function yes(){
  
  let box = document.getElementsByClassName("boxName")  
  for (let i = 0; i < box.length; i++){
      box[i].addEventListener("click", function(event){
          let input = prompt("enter");
          if(input > 5){
            event.target.textContent = 5 
          }
          else if(input <= 0){
            event.target.textContent = 0;
          }
          else{
            event.target.textContent = input;
            console.log(input);
            }
          if(event.target.textContent == "0"){
            event.target.style.backgroundColor = "red";
          }
          else{
            event.target.style.backgroundColor = "green";
          }     
      })
  }
}

// console.log(j.length);
function update(){
       let x = document.getElementsByClassName('name')   
       let something = x.length - 1;
       let vau = document.getElementsByClassName('totalStudents');
      
       vau[0].textContent = something;
       let stats = document.getElementsByClassName('boxName1');
       let statsLength = stats.length;
       let days = document.getElementsByClassName('totalDays');;
       days[0].innerHTML = statsLength;

       let element = document.getElementsByClassName('boxName');
       let sum = 0;
       for(let i = 0; i < element.length; i++){
       if(element[i].textContent == '0'){
          sum = sum + 1;
        }
      }
      //  let elementContent = sum;
      //  let elementLength = element.length;
      //  console.log(element.length);
      //  let result = elementContent / element.length;
      //  result = sum;
       let finalResult = document.getElementsByClassName('missed');
       finalResult[0].innerHTML = sum;


       let anotherSum = 0;
       for(let i = 0; i < element.length; i++){
         anotherSum = anotherSum + Number(element[i].textContent);
       }
       
       anotherResult = anotherSum / element.length;
       let final = document.getElementsByClassName('averageMark');
       final[0].innerHTML = anotherResult;
}
       

// function remove(){
//   let element = document.getElementById("map");
//    element.removeChild(element.lastChild);
// };
function remove(){
  let element = document.getElementById("addDay");
   element.parentNode.removeChild(element.parentNode.lastChild);


if(date.getDay() == '1') {
   date.setDate(date.getDate()-2);
  childDiv.textContent = date;
 
}
 else if(date.getDay() == '3'){
   date.setDate(date.getDate()-2);
    childDiv.textContent = date;
   
  }
  else if(date.getDay() == '5'){
    date.setDate(date.getDate()-2);
    childDiv.textContent = date;
   
  }
    else if(date.getDay() == '6'){
      date.setDate(date.getDate()-1);
    childDiv.textContent = date;
   
  }
};
let something = document.getElementsByClassName('statisticMissed');
let meore = document.createElement('a');

something.appendChild(meore);
