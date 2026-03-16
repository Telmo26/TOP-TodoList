export class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    static fromJSON(json) {
        const dueDate = new Date(json.dueDate);
        return new Todo(json.title, json.description, dueDate, json.priority);
    }
}

class Project {
    #todos;
    #name;

    constructor(name, todos = []) {
        this.#name = name;
        this.#todos = todos;
    }

    addTodo(todo) {
        this.#todos.push(todo);
    }

    removeTodo(todo) {
        for (let index in this.#todos) {
            if (this.#todos[index] == todo) {
                this.#todos.splice(index, 1);
            }
        };
    }

    get name() {
        return this.#name;
    }

    get todos() {
        return this.#todos;
    }

    toJSON() { 
        return {
            todos: this.#todos,
            name: this.#name,
        }
    }

    static fromJSON(json) {
        const todos = json.todos.map(Todo.fromJSON);
        const project = new Project(json.name, todos);
        return project
    }
}

class StorageManager {
    store(key, object) {
        localStorage.setItem(key, JSON.stringify(object));
    }

    load(key) {
        const strObject = localStorage.getItem(key);
        return strObject === null ? null : JSON.parse(strObject);
    }
}

export const todosData = new class {
    #projects = [new Project("Default")];
    #selectIndex = 0;
    #storageManager = new StorageManager();

    constructor() {
        const loadedObject = this.#storageManager.load("todoData");
        if (loadedObject !== null) {
            this.#projects = loadedObject.projects.map((p) => Project.fromJSON(p));
            this.#selectIndex = loadedObject.selectIndex;
        }
    }

    newProject(name) {
        this.#projects.push(new Project(name));
        this.#selectIndex = this.#projects.length - 1;
        this.#store();
    }

    deleteProject() {
        this.#projects.splice(this.#selectIndex, 1);
        this.#selectIndex = this.#projects.length > 0 ? 0 : null;
        this.#store();
    }

    removeTodo(todo) {
        this.#projects[this.#selectIndex].removeTodo(todo);
        this.#store();
    }

    addTodo(todo) {
        this.#projects[this.#selectIndex].addTodo(todo);
        this.#store();
    }

    set selectedIndex(value) {
        if (value !== null && value >= 0 && value < this.#projects.length) {
            this.#selectIndex = value;
        }
    }

    get selectedIndex() {
        return this.#selectIndex;
    }

    get todos() {
        if (this.#selectIndex !== null) {
            return this.#projects[this.#selectIndex].todos;
        }
    }

    get projectNames() {
        const names = this.#projects.map((project) => {
            return project.name;
        });
        return names;
    }

    #store() {
        this.#storageManager.store("todoData", {
            projects: this.#projects,
            selectIndex: this.#selectIndex            
        });
    }
}