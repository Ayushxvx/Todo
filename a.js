let todo = document.querySelector("#todo");
let todos = []
dates = []

function addtodo(){
    let value = todo.value;
    todos.push(value);
    dates.push(new Date());
    todo.value = "";
    updatevalues();
}
function edittodo(n){
    let editedvalue = prompt("Enter The Todo :- ");
    todos[n] = editedvalue;
    updatevalues();
}

function removetodo(n){
    todos.splice(n,1);
    dates.splice(n,1);
    updatevalues();
}

function updatevalues(){
    console.log(todos)
    document.getElementById("todocontainer").innerHTML = "";
    for(let i =0;i<todos.length;i++){
        let todotask = document.createElement("div");
        todotask.setAttribute('class','todotask');
        todotask.innerHTML="<br>"+todos[i]+"<br>"+`<button onclick="edittodo(${i})" class="edittodo">Edit</button>`+`<button onclick=removetodo(${i}) class=removetodo>Remove</button>`+`<br<p>${dates[i]}</p><br>`;
        document.getElementById("todocontainer").appendChild(todotask);
    }
}