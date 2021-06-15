document.addEventListener("DOMContentLoaded", () => {

  // grab task form
  const createTaskForm = document.getElementById("create-task-form");

  // grab task list with id "tasks"
  const taskList = document.getElementById("tasks");

  // attach event listener to form submission
  createTaskForm.addEventListener("submit", (e) => {
    
    // prevent default action of redirecting to new page upon submit
    e.preventDefault();
    
    // capture new task input
    const newTask = document.getElementById("new-task-description").value;
    
    // add newTask HTML string to existing taskList HTML
    taskList.innerHTML += `<li> ${newTask} </li>`;
    
    // reset form upon submission
    createTaskForm.reset();
  });
  
});
