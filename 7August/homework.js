let mother = document.querySelector('.container');
console.log(mother);

for(let i =1; i< 151; i++){
    let h2 = document.createElement('h2');
    mother.appendChild(h2);
    h2.textContent = `${i}`
   
    
}

let ascending = document.querySelector('.ascending'); 

ascending.addEventListener('click', function(){
 
    let items = document.getElementsByTagName('h2');
    items = Array.prototype.slice.call(items);

    items.sort(function(a, b){
        return a.textContent-b.textContent;
    });

    for(let i = 0, len = items.length; i < len; i++) {
        let parent = items[i].parentNode;
        let detatchedItem = parent.removeChild(items[i]);
        console.log(detatchedItem);
        parent.appendChild(detatchedItem);
    }
    
    
})

let descending = document.querySelector('.descending');

descending.addEventListener('click', function(){
    let items = document.getElementsByTagName('h2');
    items = Array.prototype.slice.call(items);

    items.sort(function(a, b){
        return b.textContent-a.textContent;
    });

    for(let i = 0, len = items.length; i < len; i++) {
        let parent = items[i].parentNode;
        let detatchedItem = parent.removeChild(items[i]);
        parent.appendChild(detatchedItem);
    }
})

let shuffle = document.querySelector('.shuffle');

shuffle.addEventListener('click', function (){
    let items = document.getElementsByTagName('h2');
    items = Array.prototype.slice.call(items);

    items.sort(function(a, b){
        return 0.5 - Math.random()
    });

    
    for(let i = 0, len = items.length; i < len; i++) {
        let parent = items[i].parentNode;
        let detatchedItem = parent.removeChild(items[i]);
        parent.appendChild(detatchedItem);
    }
});