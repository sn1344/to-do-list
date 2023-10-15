document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");
    const addTaskButton = document.getElementById("addTask");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value;
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            const deleteButton = listItem.querySelector("button.delete");
            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });
        }
    });
});
