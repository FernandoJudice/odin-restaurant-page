// import "./navbar-style.css";
import "./styles.css";
import { navbarRenderer } from "./navbar";

const navbar = document.querySelector(".navbar")

navbar.appendChild(navbarRenderer.createButton("Home",createCallback("Home")))
navbar.appendChild(navbarRenderer.createButton("Menu",createCallback("Menu")))
navbar.appendChild(navbarRenderer.createButton("Contact",createCallback("Contact")))

function createCallback(text) {
    const _text = text;
    const callback = () => {alert(_text)};
    return callback
}