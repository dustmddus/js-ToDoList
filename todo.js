const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

toDos = [];
checks = [];

const TODO_KEY = "todo";
const CHECK_KEY = "checks";

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id != parseInt(li.id));
  saveTodos();
}

function clearLineToDo(event) {
  const li = event.target.parentElement;
  if (checks === null || checks === undefined) {
    checks.push(li.id);
    localStorage.setItem(CHECK_KEY, JSON.stringify(checks));
    li.classList.add("line");
  } else if (checks.includes(li.id)) {
    li.classList.remove("line");
    checks.splice(checks.indexOf(li.id), 1);
    localStorage.setItem(CHECK_KEY, JSON.stringify(checks));
  } else {
    checks.push(li.id);
    localStorage.setItem(CHECK_KEY, JSON.stringify(checks));
    li.classList.add("line");
  }
}

function paintToDos(newToDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  li.id = newToDoObj.id;
  li.appendChild(span);
  const clearBtn = document.createElement("button");
  clearBtn.innerText = "✅";
  li.appendChild(clearBtn);
  clearBtn.addEventListener("click", clearLineToDo);
  const removebtn = document.createElement("button");
  removebtn.innerText = "❌";
  removebtn.addEventListener("click", deleteToDo);

  li.appendChild(removebtn);
  todoList.appendChild(li);
}

function submitNewTodo(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDos(newToDoObj);
  saveTodos();
}

todoForm.addEventListener("submit", submitNewTodo);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  toDos.forEach(paintToDos);
}

const savedChecks = localStorage.getItem(CHECK_KEY);

if (savedChecks) {
  checks = JSON.parse(savedChecks);
  for (let i = 0; i < toDos.length; i++) {
    if (checks.includes(String(toDos[i].id))) {
      let drawLine = document.getElementById(toDos[i].id);
      drawLine.classList.add("line");
    }
  }
}
