//1. todo의 틀이 되는 ul 태그를 js로 불러온다
//2. todo를 submit할 input과 button 요소를 만든다
//3. submit 이벤트리스너를 단다
//4. 콜백 함수를 작성한다 > todo는 array로 저장된다
//5. paintTodo > 입력한 값을 리스트, span 태그에 입힌다. 삭제 버튼을 span으로 만든다. > 여기까지 됐으면 이제 저장하고 불러오고 삭제하는 기능에 집중
//5. saveTodos > 작성한 todos를 local Storage에 저장한다
//6. array to string으로 저장된 value를 array로 로드한다
//7. list.remove()에서 리스트 특정이 필요했던 것처럼 array에서 지울 때도 의도한 특정 값만 지워져야 함

//const todoForm = document.getElementById("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoForm .todoInput");

const TODO_KEY = "todo";

let todos = [];

function onTodoDelete() {
  const list = event.target.parentElement;
  list.remove();
  //delete을 할 때 실제 array에도 반영이 되도록 만들어야 함
  todos = todos.filter((todo) => todo.id !== parseInt(list.id));
  saveTodos(todos);
}

function paintTodo(todo) {
  const list = document.createElement("li");
  list.id = todo.id; //삭제 대상을 특정하려면 id를 동일화해서 특정 todo를 찾아내야 함
  const todoText = document.createElement("span");
  const deleteButton = document.createElement("button");
  todoText.innerText = todo.text;
  deleteButton.innerText = "྾";
  deleteButton.addEventListener("click", onTodoDelete);
  todoList.appendChild(list);
  list.appendChild(todoText);
  list.appendChild(deleteButton);
}

function saveTodos(todos) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos)); //이렇게만 하니 값이 하나밖에 저장이 안되네? array를 저장해야함!
}

function onTodoSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const todoobj = {
    id: Date.now(),
    text: todo,
  };
  todos.push(todoobj);
  paintTodo(todoobj);
  saveTodos(todos);
}

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  //아직 그리는 기능이 없음
  parsedTodos.forEach((parsedTodos) => paintTodo(parsedTodos));
}

todoForm.addEventListener("submit", onTodoSubmit);
