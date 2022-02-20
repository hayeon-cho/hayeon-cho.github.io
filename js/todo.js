const todoForm = document.querySelector(".todoListForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");

const TODOS_KEY = "todos";

let todos = [];

const saveTodo = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const deleteTodo = (event) => {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    savedTodos();
};

const paintTodo = (newTodo) => {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✔️";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
};

const handleTodoSubmit = (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
};

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
// console.log(savedTodos);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
