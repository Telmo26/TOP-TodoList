import "./style.css"

import { homeDisplayController } from "./tabs/home/index.js"
import { todosDisplayController } from "./tabs/todos/index.js";

const displayManager = new class {
    #tab;

    switchTab(tab) {
        this.#tab = tab;
        const content = document.getElementById("content");
        content.innerHTML = "";
        this.#tab.display(content);
    }
}

document.getElementById("home").addEventListener("click", (e) => {
    displayManager.switchTab(homeDisplayController);
});
document.getElementById("todos").addEventListener("click", (e) => {
    displayManager.switchTab(todosDisplayController);
});

displayManager.switchTab(homeDisplayController);