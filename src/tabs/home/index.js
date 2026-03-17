import "./style.css";

export const homeDisplayController =  {
    display(content) {
        const container = document.createElement("div");
        container.classList.add("home-container");

        const title = document.createElement("h1");
        title.textContent = "Welcome to The Odin Project's Todo-List by Telmo";

        const paragraph = document.createElement("p");
        paragraph.textContent = `
        This app is a project from The Odin Project. It is built entirely in javascript and stores your todos locally on your computer.
        The app is complete, but nothing like reminders actually work. You can just create todo lists, todos and see them.
        `

        container.append(title, paragraph);
        content.appendChild(container);
    }
}