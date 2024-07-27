let todos = []
let input_box = document.getElementById("todo");
function add_todo(){
    let todo = document.getElementById("todo").value;
    todo = todo.trim()
    if(todo==""){
    alert(`Enter something`)   
}
else{
    todos.push(todo);
    update_todo();
    //alert(`Todo = ${todo}`)
}
}

function update_todo(){
    input_box.value = "";
    let div = document.getElementById("container");
    div.innerHTML = "";
    todos.forEach((todo,index)=>{
        let inner_div = document.createElement('div');
        inner_div.className = "flex justify-around"
        let span = document.createElement("span")
        span.className = "overflow-scroll w-8/12 inline-block mx-auto bg-black text-green-300 font-mono text-center p-2"
        span.textContent = `${index+1}) ${todo}`;
        let edit_button = document.createElement("button");
        edit_button.textContent= "Edit";
        edit_button.className = "bg-yellow-400 text-white p-1 text-center rounded-full hover:opacity-70 w-2/12"
        edit_button.addEventListener('click',()=>{
            let edited_todo = prompt("Enter The Todo :- ");
            edited_todo = edited_todo.trim()
            if(edited_todo!=""){
                todos[index] = edited_todo;
                update_todo()
            }
        })
        let delete_button = document.createElement("button");
        delete_button.textContent = "Delete";
        delete_button.className = "bg-red-400 text-white p-1 text-center rounded-full hover:opacity-70 w-2/12"
        delete_button.addEventListener('click',()=>{
            todos.splice(index,1);
            update_todo();
        })
        inner_div.appendChild(edit_button)
        inner_div.appendChild(span);
        inner_div.appendChild(delete_button);
        div.appendChild(inner_div);
        
    })
}
