export const aboutTab =  {
    display(content) {
        const container = document.createElement("div");
        container.classList.add("about-container");
        container.textContent = "This is the about page";

        content.appendChild(container);
    }
}