// SELECTEUR
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const errorText = document.querySelector(".error");
const valideText = document.querySelector(".valide");

// ECOUTEUR
todoButton.addEventListener("click", addTodo);
todolist.addEventListener("click", deleteCheck);

// FONCTION
// fonction pour ajouter une tache
function addTodo(event){
    event.preventDefault();
    // Creer une div 
    const todoDiv = document.createElement("li");
    todoDiv.classList.add("todo");
    // Creer un li
    const newTodoList = document.createElement("li");
    newTodoList.classList.add("todo-item");
    const text = todoInput.value;
    if (text != ""){
        newTodoList.innerText = text;
        todoDiv.appendChild(newTodoList);
        // Creer un button completd
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("check-button");
        todoDiv.appendChild(completedButton);
        // Creer un button supprimer
        const suppButton = document.createElement("button");
        suppButton.innerHTML = '<i class="fas fa-trash"></i>';
        suppButton.classList.add("del-button");
        todoDiv.appendChild(suppButton);
        // Ajouter la todo div a la todo list
        todolist.appendChild(todoDiv);
        // Formater le champs d'enter
        todoInput.value = "";
        valideText.classList.add("valide");
        valideText.innerText = "Tache ajouter avec succes";
        errorText.innerText = "";
    } else{
        errorText.innerText = "Veuillez entrez une tache valide";
        valideText.innerText = "";
    }
    
}


function deleteCheck(e){
    const item = e.target;
    // Supprimer une tache
    if (item.classList[0] === "del-button"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
        todo.remove();
        });
        
    }

    // Marquer un tache comme fait
    if (item.classList[0] === "check-button"){
        item.parentElement.classList.toggle("completed");
    }
}


