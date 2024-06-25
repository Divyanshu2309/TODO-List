document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        if (task.trim() === '') return;

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task;
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.addEventListener('click', () => {
            li.classList.add('deleted');
            setTimeout(() => {
                taskList.removeChild(li);
            }, 300); // Wait for animation to finish
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Add animation class for new task
        li.classList.add('new-task');
        setTimeout(() => {
            li.classList.remove('new-task');
        }, 300); // Wait for animation to finish
    }
});
