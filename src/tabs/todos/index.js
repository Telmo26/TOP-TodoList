import "./style.css";
import { todosData, Todo } from "./data.js";

export const todosDisplayController = new class {
    #data;

    constructor(data) {
        this.#data = data;
    }

    display(content) {
        content.innerHTML = "";
        const container = document.createElement("div");
        container.classList.add("todos-container");

        const projectSelector = this.#createProjectSelector(content);
        const todosSection = this.#createTodosSection();
        const newTodoButton = this.#createNewTodoButton();
        
        container.append(projectSelector, todosSection, newTodoButton);
        content.appendChild(container);
    }

    #createProjectSelector() {
        const projectSelector = document.createElement("div"); 
        projectSelector.classList.add("project-selector");
        projectSelector.textContent = "Project: "
        {
            const select = this.#createSelect();

            const newProjectButton = document.createElement("button");
            const newProjectDialog = document.createElement("dialog");

            newProjectButton.textContent = "New project";
            newProjectButton.addEventListener("click", () => {
                newProjectDialog.showModal();
            })

            const deleteProjectButton = document.createElement("button");
            deleteProjectButton.textContent = "Delete project";
            deleteProjectButton.addEventListener("click", () => {
                this.#data.deleteProject();
                this.display(content);
            })

            {
                const form = document.createElement("form");
                form.innerHTML = `
                <form>
                    <label for="name">New project name</label>
                    <input type="text" id="name" name="project_name">
                    <button type="submit">Submit</button>
                </form>
                `;
                form.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const formData = new FormData(form);
                    const name = formData.get("project_name");
                    this.#data.newProject(name);
                    newProjectDialog.close();

                    this.display(content);
                })

                newProjectDialog.appendChild(form);
            }
            projectSelector.append(select, newProjectButton, newProjectDialog, deleteProjectButton);
        }

        return projectSelector;
    }

    #createTodosSection() {
        const todosContainer = document.createElement("div");
        todosContainer.classList.add("todos");

        if (this.#data.selectedIndex !== null) {
            for (let todo of this.#data.todos) {
                const todoDiv = document.createElement("div");
                todoDiv.classList.add("todo");
                {
                    const title = document.createElement("h3");
                    title.textContent = todo.title;

                    const desc = document.createElement("p");
                    if (todo.description) desc.textContent = todo.description;

                    const dueDate = document.createElement("p");
                    if (todo.dueDate != "Invalid Date") dueDate.textContent = "Due date: " + todo.dueDate;

                    const priority = document.createElement("p");
                    if (todo.priority) priority.textContent = "Priority: " + todo.priority;

                    const deleteButton = document.createElement("button");
                    deleteButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-forever</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
                    `
                    deleteButton.addEventListener("click", () => {
                        this.#data.removeTodo(todo);
                        this.display(content);
                    });

                    todoDiv.append(title, desc, dueDate, priority, deleteButton);
                }
                todosContainer.appendChild(todoDiv);
            }
        }
        
        return todosContainer;
    }

    #createSelect() {
        const select = document.createElement("select");

        for (let index in this.#data.projectNames) {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = this.#data.projectNames[index];
            select.appendChild(option);
        }

        select.value = this.#data.selectedIndex;

        select.addEventListener("change", (e) => {
            const projectIndex = e.target.value;
            this.#data.selectedIndex = projectIndex;

            this.display(content);
            
        })
        
        return select;
    }

    #createNewTodoButton() {
        const container = document.createElement("div");
        container.classList.add("new-todo")
        const button = document.createElement("button");
        const dialog = document.createElement("dialog");
        button.textContent = "+";

        {
            const form = document.createElement("form");
            form.innerHTML= `
            <legend>New Todo</legend>
            <label for="title">Title*</label>
            <input type="text" id="title" name="todo_title" required>

            <label for="description">Description</label>
            <textarea id="description" name="todo_description"></textarea>

            <label for="due-date">Due date</label>
            <input type="datetime-local" id="due-date" name="todo_due_date">

            <label for="priority">Priority</label>
            <input type="number" id="priority" name="todo_priority" min="0">

            <button type="submit">Submit</button>
            `;
            dialog.appendChild(form);

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(form);

                const todo = new Todo(formData.get("todo_title"), formData.get("todo_description"), new Date(formData.get("todo_due_date")), formData.get("todo_priority"));
                this.#data.addTodo(todo);

                this.display(content);
            })
        }

        button.addEventListener("click", (e) => {
            e.preventDefault();
            dialog.showModal();
        })

        container.append(button, dialog);
        return container;
    }
}(todosData)

