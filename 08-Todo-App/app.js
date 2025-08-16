const input = document.querySelector("#todoInput");
const ol = document.querySelector("#list");
let todoTask = []


function renderTodo() {
    ol.innerHTML = ""
    for (let i = 0; i < todoTask.length; i++) {
       ol.innerHTML += `<li>${todoTask[i]}
       <div class="action-button">
          <button onclick = "deleteTodo(${i})">Delete</button>
          <button onclick = "editTodo(${i})">Edit</button>
       </div>
       </li>`
    }
}

function addTodo() {
   todoTask.push(input.value);
   renderTodo()

   input.value = ""
}

function deleteTodo(index) {
    console.log("Todo deleted" , index);
    todoTask.splice(index , 1);
    renderTodo()
}

function editTodo(index) {
    console.log("edited todo" , index);
    const editValue = prompt("Edit the Task!");
    todoTask.splice(index , 1 , editValue)
    renderTodo()
}

function deleteAll() {
    console.log("All todo deleted");
    ol.innerHTML = ""
    todoTask = [];
}