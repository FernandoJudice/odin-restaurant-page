export const homeRenderer = (function() {
    const createTitle = () => {
        const titleCard = document.createElement("div");
        titleCard.classList.add("home-title")
        titleCard.textContent = "Minimalist Coffee";
        return titleCard
    }

    const createDescription = () => {
        const descCard = document.createElement("div");
        descCard.classList.add("home-desc")
        descCard.textContent = "The true minimalistic experience, so minimal it doesn't even exist";
        return descCard
    }

    const create = (content) => {
        content.appendChild(createTitle())
        content.appendChild(createDescription())
        return content
    }
    return {create}
})();