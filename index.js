// // console.log("To-Do");
// // const todoItem = document.getElementById('todo-item');
// // const todoText = todoItem.textContent;
// // console.log(todoText);
// // fetch('https://dummyjson.com/todos')
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error)); 



  
// //   fetch('https://dummyjson.com/todos', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({
// //       task: 'New Task',
// //       user_id: 123
// //     })
// //   })
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error))
// //   // / Get the delete button element
// //   const deleteButton = document.getElementById('dele');
  
// //   // Add a click event listener to the delete button
// //   deleteButton.addEventListener('click', () => {
// //     // Get the checkbox element associated with the delete button
// //     const checkbox = document.querySelector('input[name="checkbox8"]');
  
// //     // Check if the checkbox is checked
// //     if (checkbox.checked) {
// //       // Get the label element associated with the checkbox
// //       const label = document.getElementById('tasks');
  
// //       // Get the task text from the label
// //       const taskText = label.innerText;
  
// //       // Delete the task
// //       console.log(`Deleting task: ${taskText}`);
// //       // Replace the console.log statement with your code to delete the task
// //     }
// //   });







// // // // Get the user id
// // // var userId = prompt("Enter your user id:");

// // // // Fetch the todos for the user id
// // // // var todos = fetch(`https://api.example.com/todos/${userId}`)
// // // var todos = fetch("https://dummyjson.com/todos")

// // //   .then(response => response.json())
// // //   .then(todos => todos.todos);

// // // // Display the todos in the browser
// // // todos.forEach(todo => {
// // //   var task = document.createElement("div");
// // //   task.className = "task";
// // //   task.innerHTML = todo.name;
// // //   document.getElementById("todo-list").appendChild(task);
// // // });

// // // // Add the ability to complete an unfinished task
// // // var buttons = document.querySelectorAll(".button1");

// // // for (var i = 0; i < buttons.length; i++) {
// // //   buttons[i].addEventListener("click", function() {
// // //     // Get the task id
// // //     var taskId = this.querySelector("input").value;

// // //     // Complete the task
// // //     // fetch(`https://api.example.com/todos/${userId}/tasks/${taskId}/complete`
// // //     fetch("https://dummyjson.com/todos", {
// // //       method: "POST"
// // //     });

// // //     // Update the UI
// // //     this.querySelector("span").innerHTML = "Completed";
// // //   });
// // // }

// // // // Implement the ability to add a new task as per a specific user id
// // // var addNewTaskButton = document.querySelector(".long-button1");

// // // addNewTaskButton.addEventListener("click", function() {
// // //   // Get the new task name
// // //   var taskName = prompt("Enter a new task name:");

// // //   // Add the new task
// // //   // fetch(`https://api.example.com/todos/${userId}/tasks`,
// // //   fetch("https://dummyjson.com/todos",
// // //   {
// // //     method: "POST",
// // //     body: JSON.stringify({
// // //       name: taskName
// // //     })
// // //   });

// // //   // Update the UI
// // //   var newTask = document.createElement("div");
// // //   newTask.className = "task";
// // //   newTask.innerHTML = taskName;
// // //   document.getElementById("todo-list").appendChild(newTask);
// // // });

// // // // Implement the ability to delete a task
// // // var deleteTaskButtons = document.querySelectorAll(".button3");

// // // for (var i = 0; i < deleteTaskButtons.length; i++) {
// // //   deleteTaskButtons[i].addEventListener("click", function() {
// // //     // Get the task id
// // //     var taskId = this.querySelector("input").value;

// // //     // Delete the task
// // //     // fetch(`https://api.example.com/todos/${userId}/tasks/${taskId}`,
// // //     fetch("https://dummyjson.com/todos",
// // //     {
// // //       method: "DELETE"
// // //     });

// // //     // Update the UI
// // //     this.parentElement.remove();
// // //   });
// // // }



// // var userId = prompt("Enter your user id:");

// // Fetch the todos for the user id
// var todos = fetch("https://dummyjson.com/todos")
//   .then(response => response.json())
//   .then(todos => todos.todos);

// // Display the todos in the browser
// todos.forEach(todo => {
//   var task = document.createElement("div");
//   task.className = "task";
//   task.innerHTML = todo.name;
//   document.getElementById("todo-list").appendChild(task);
// });

// // Add a new task button
// var addNewTaskButton = document.getElementById("add-task");
// addNewTaskButton.addEventListener("click", function() {
//   // Get the new task name
//   var taskName = document.getElementById("new-task").value;

//   // Add the new task
//   fetch("https://dummyjson.com/todos", {
//     method: "POST",
//     body: JSON.stringify({
//       name: taskName
//     })
//   });

//   // Update the UI
//   var newTask = document.createElement("div");
//   newTask.className = "task";
//   newTask.innerHTML = taskName;
//   document.getElementById("todo-list").appendChild(newTask);
// });

// // Complete a task
// var completeTaskButtons = document.querySelectorAll(".complete");
// for (var i = 0; i < completeTaskButtons.length; i++) {
//   completeTaskButtons[i].addEventListener("click", function() {
//     // Get the task id
//     var taskId = this.parentElement.dataset.id;

//     // Complete the task
//     fetch("https://dummyjson.com/todos", {
//       method: "POST"
//     });

//     // Update the UI
//     this.parentElement.classList.add("complete");
//   });
// }

// // Delete a task
// var deleteTaskButtons = document.querySelectorAll(".delete");
// for (var i = 0; i < deleteTaskButtons.length; i++) {
//   deleteTaskButtons[i].addEventListener("click", function() {
//     // Get the task id
//     var taskId = this.parentElement.dataset.id;

//     // Delete the task
//     fetch("https://dummyjson.com/todos", {
//       method: "DELETE"
//     });

//     // Update the UI
//     this.parentElement.remove();
//   });
// }



const todoList = [];

function addTodoItem(item) {
  todoList.push(item);
}

function deleteTodoItem(index) {
  todoList.splice(index, 1);
}

function updateTodoItem(index, item) {
  todoList[index] = item;
}

function displayTodoList() {
  const ul = document.getElementById("todo-item");
  for (const todoItem of todoList) {
    const li = document.createElement("li");
    li.textContent = todoItem;
    ul.appendChild(li);
  }
}

function handleAddButtonClick() {
  const item = prompt("Enter a new todo item:");
  addTodoItem(item);
  displayTodoList();
}

function handleDeleteButtonClick() {
  const index = parseInt(prompt("Enter the index of the todo item to delete:"));
  deleteTodoItem(index);
  displayTodoList();
}

function handleUpdateButtonClick() {
  const index = parseInt(prompt("Enter the index of the todo item to update:"));
  const item = prompt("Enter the new todo item:");
  updateTodoItem(index, item);
  displayTodoList();
}

// Add the event listeners
document.getElementById("add-button").addEventListener("click", handleAddButtonClick);
document.getElementById("delete-button").addEventListener("click", handleDeleteButtonClick);
document.getElementById("update-button").addEventListener("click", handleUpdateButtonClick);

// Display the todo list
displayTodoList();