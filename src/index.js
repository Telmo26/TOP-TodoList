import "./style.css"

import { homeTab } from "./tabs/home/index.js"
import { todosDisplayController } from "./tabs/todos/index.js";
import { aboutTab } from "./tabs/about/index.js";

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
    displayManager.switchTab(homeTab);
});
document.getElementById("todos").addEventListener("click", (e) => {
    displayManager.switchTab(todosDisplayController);
});
document.getElementById("about").addEventListener("click", (e) => {
    displayManager.switchTab(aboutTab);
});

displayManager.switchTab(todosDisplayController);