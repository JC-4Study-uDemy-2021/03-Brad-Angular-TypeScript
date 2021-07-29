/*
function showToDo(todo: { title: string; text: string }) {
  console.log(`${todo.title}: ${todo.text}`);
}

let myToDo = { title: "trash", text: "hello" };

showToDo(myToDo);
*/

interface Todo {
  title: string;
  text: string;
}

function showToDo(todo: Todo) {
  console.log(`${todo.title}: ${todo.text}`);
}

let myToDo = { title: "trash", text: "hello2" };

showToDo(myToDo);
