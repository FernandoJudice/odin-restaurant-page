// import "./navbar-style.css";
import "./styles.css";
import { navbarRenderer } from "./navbar";
import { homeRenderer } from "./home";



function createCallback(text) {
    const _text = text;
    const callback = () => {alert(_text)};
    return callback
}

const createFrame = () => {
    const mainFrame = document.createElement("div");
    mainFrame.classList.add("main-frame");
    const frameContent = document.createElement("div");
    frameContent.classList.add("frame-content");
    mainFrame.append(frameContent)
    return {mainFrame, frameContent}
}


const navbar = document.querySelector(".navbar")
const content = document.querySelector(".content")
const {mainFrame, frameContent} = createFrame();
content.appendChild(mainFrame)

navbar.appendChild(navbarRenderer.createButton("Home",createCallback("Home")));
navbar.appendChild(navbarRenderer.createButton("Menu",createCallback("Menu")));
navbar.appendChild(navbarRenderer.createButton("Contact",createCallback("Contact")));

homeRenderer.create(frameContent);