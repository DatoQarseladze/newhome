let storage = window.localStorage;
let usersEndPoint = 'https://jsonplaceholder.typicode.com/users';
fetch(usersEndPoint, {
    method: 'get'
})
.then( (response)=>{
    if(response.status === 200){
        return response.json();
    }
})
.then(usersList => {
    storage.setItem('username', JSON.stringify(usersList))
    document.body.innerHTML = usersList.map( user => {
        return `<div data-user-id="${usersList.indexOf(user)} " >
        <h2 class='main'>${user.name}<small> Id -${user.id}</small></h2>
        <button class="edit">Edit Me </button>
        <button class="remove">Remove Me</button>
        </div>`

    }).join('');

    let people  = JSON.parse(storage.getItem('username'));
    let remove = document.querySelectorAll('.remove');
    let edit = document.querySelectorAll('.edit');


    remove.forEach(element =>{

        element.addEventListener('click', (event) =>{
            event.target.closest('div').remove();
            let div = document.querySelectorAll('div');
            people.splice(Array.from(people).indexOf(event.target.closest('div')),1);
            storage.setItem('username', JSON.stringify(people));
        })
    })

    
  
   
    edit.forEach(element =>{
        element.addEventListener('click', (event) =>{
            let main = document.querySelector('.main');
            let result = prompt("Please enter your change", `${main.textContent}`);
            if(result === null){
                return;
            }
            main.textContent =  result;
        })
    })
 
})
  
