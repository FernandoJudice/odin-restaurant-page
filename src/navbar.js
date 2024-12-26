export const navbarRenderer = (function() {
    const createButton = (name, callback) => {
        const button = document.createElement("button");
        button.classList.add("nav-button");
        button.textContent = name;
        button.addEventListener("click",callback)
        return button
    }
    return {createButton}
})();
