// import "./navbar-style.css";
import "./styles.css";
import { navbarRenderer } from "./navbar";
import { homeRenderer } from "./home";


const screenManager = (function() {

    let _frameContent = null

    const createFrame = (_content) => {
        const mainFrame = document.createElement("div");
        mainFrame.classList.add("main-frame");
        const frameContent = document.createElement("div");
        frameContent.classList.add("frame-content");
        mainFrame.append(frameContent);
        _frameContent = frameContent;
        _content.appendChild(mainFrame);
        return {mainFrame, frameContent}
    }
    
    const clean = () => {
        while (_frameContent.firstChild){
            _frameContent.removeChild(_frameContent.firstChild);
        }
    }
    
    const renderHome = () => {
        clean()
        homeRenderer.create(_frameContent);
    }

    const renderMenu = () => {
        clean()
    } 

    const renderContact = () => {
        clean()
    } 

    const renderNavbar = (navbar) => {
        navbar.appendChild(navbarRenderer.createButton("Home",renderHome));
        navbar.appendChild(navbarRenderer.createButton("Menu",renderMenu));
        navbar.appendChild(navbarRenderer.createButton("Contact",renderContact));
    }

    return {createFrame,renderHome,renderMenu,renderContact, renderNavbar}
})();


const navbar = document.querySelector(".navbar")
const content = document.querySelector(".content")
screenManager.renderNavbar(navbar)
screenManager.createFrame(content);
screenManager.renderHome();