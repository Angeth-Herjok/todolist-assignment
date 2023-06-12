console.log("To-Do");
const todoItem = document.getElementById('todo-item');
const todoText = todoItem.textContent;
console.log(todoText);
fetch('https://dummyjson.com/todos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error)); 