export const menuRenderer = (function() {
    const createTitle = (text) => {
        const titleCard = document.createElement("div");
        titleCard.classList.add("menu-title")
        titleCard.textContent = text;
        return titleCard
    }

    const createMenuItem = (name,price) => {
        const descCard = document.createElement("div");
        descCard.classList.add("menu-item")
        descCard.textContent = `${name} . . . . $ ${price}`;
        return descCard
    }

    const create = (content) => {
        content.appendChild(createTitle("Snacks"))
        content.appendChild(createMenuItem("Evenly toasted toast",1.0))
        content.appendChild(createMenuItem("Perfectly circle egg",1.5))
        content.appendChild(createMenuItem("Square slice of cheese",0.8))
        content.appendChild(createTitle("Beverages"))
        content.appendChild(createMenuItem("Plain water",1.0))
        content.appendChild(createMenuItem("Expresso",1.7))
        content.appendChild(createMenuItem("Milk",1.2))
        return content
    }
    return {create}
})();