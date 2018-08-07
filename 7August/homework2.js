let usersEndPoint = 'https://jsonplaceholder.typicode.com/users';
fetch(usersEndPoint, {
    method: 'get'
})
.then( (response)=>{
    if(response.status === 200){
        console.log('vau');
        return response.json();
    }
})
.then(usersList => {
    document.body.innerHTML = usersList.map( user => {
        return `<div data-user-id="${user.id} " >
        <h2 class='main'>${user.name}<small> Id -${user.id}</small></h2>
        <button class="edit">Edit Me </button>
        <button class="remove">Remove Me</button>
   
        </div>`
    }).join('');
 

    let remove = document.querySelectorAll('.remove');
    let edit = document.querySelectorAll('.edit');
    console.log(remove);
    remove.forEach(element =>{
        element.addEventListener('click', (event) =>{
            event.target.closest('div').remove();
        })
    })
    edit.forEach(element =>{
        element.addEventListener('click', (event) =>{
            let main = document.querySelector('.main');
            console.log(main);
            let result = prompt("Please enter your change", `${main.textContent}`);
            if(result === null){
                return;
            }
            main.textContent =  result;
        })
    })

})