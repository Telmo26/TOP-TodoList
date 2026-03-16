export const homeTab =  {
    display(content) {
        const container = document.createElement("div");
        container.classList.add("home-container");
        container.textContent = "This is the home page";

        content.appendChild(container);
    }
}