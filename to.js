



// Get elements
const addTaskForm = document.getElementById('addTaskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const allTasksDiv = document.createElement('div');
allTasksDiv.id = 'allTasks';
// Task array
const tasks = [];
// Function to create a new task object
function createTaskObject(task) {
  return {
    id: Date.now(),
    task,
    completed: false
  };
}
// Function to add a new task
function addTask(event) {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (task !== '') {
    const newTask = createTaskObject(task);
    tasks.push(newTask);
    renderTasks();
    taskInput.value = '';
  }
}
// Function to render tasks
function renderTasks() {
  taskList.innerHTML = '';
  allTasksDiv.innerHTML = '';
  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task' + (task.completed ? ' completed' : '');
    taskItem.innerHTML = `
      <span>${task.task}</span>
      <button class="complete-btn">Done</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    const completeBtn = taskItem.querySelector('.complete-btn');
    completeBtn.addEventListener('click', () => completeTask(task.id));
    const editBtn = taskItem.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => editTask(task.id));
    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    taskList.appendChild(taskItem);
    const taskText = document.createElement('p');
    taskText.textContent = task.task;
    allTasksDiv.appendChild(taskText);
  });
  document.body.appendChild(allTasksDiv);
}
// Function to mark a task as complete
function completeTask(taskId) {
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}
// Function to edit a task
function editTask(taskId) {
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    const newTask = prompt('Enter a new task:', task.task);
    if (newTask !== null) {
      task.task = newTask.trim();
      renderTasks();
    }
  }
}
// Function to delete a task
function deleteTask(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
}
// Event listener for adding a new task
addTaskForm.addEventListener('submit', addTask);
// Initial render of tasks
renderTasks();