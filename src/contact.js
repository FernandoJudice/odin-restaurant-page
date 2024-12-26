export const contactRenderer = (function() {
    const createTitle = (text) => {
        const titleCard = document.createElement("div");
        titleCard.classList.add("home-title")
        titleCard.textContent = text;
        return titleCard
    }

    const createDescription = () => {
        const descCard = document.createElement("div");
        descCard.classList.add("home-desc")
        descCard.textContent = "Follow us for a more trilling minimalistic experience!";
        return descCard
    }

    const createMediaContact = (media,username) => {
        const descCard = document.createElement("div");
        descCard.classList.add("contact-item")
        descCard.textContent = `${media} . . . . ${username}`;
        return descCard
    }

    const create = (content) => {
        content.appendChild(createTitle("Contact Info"))
        content.appendChild(createDescription())
        content.appendChild(createMediaContact("Address","John doe Avenue, n.0"))
        content.appendChild(createMediaContact("Facebook","/minimalistcoffee"))
        content.appendChild(createMediaContact("Instagram","@minimalistcoffee"))
        content.appendChild(createMediaContact("Phone","/999-999-999"))
        return content
    }
    return {create}
})();