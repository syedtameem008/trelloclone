    function addTask(inputId, listId) {
            const taskInput = document.getElementById(inputId);
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                const taskList = document.getElementById(listId);
                const listItem = document.createElement("li");
                listItem.textContent = taskText;
                taskList.appendChild(listItem);
                taskInput.value = "";
            }
        }