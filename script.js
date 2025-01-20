document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskinput = document.getElementById('task-input');
    const tasklist = document.getElementById('task-list');

    //Function to add tasks
    function addTask() {
        const taskText = taskinput.ariaValueMax.trim();

        if(taskText === ""){
            alert("Please enter a task");
            return;
        }

        //create a new list 
        const li = document.createElement('li');
        li.textContent = taskText;

        //Remove a new button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        //Add an event
        removeButton.onclick = () => {
            tasklist.removeChild(li);
        }

        //Append the remove button
        li.appendChild(removeButton);
        
        //Append the list item
        tasklist.appendChild(li);

        //Clear the input field
        taskinput.value = "";
    }

    addButton.addEventListener('click', addTask);

    taskinput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            addTask();
        }
    })
})