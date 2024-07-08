
import bgImage from './background-image.jpg';

class PageInitializer {
    constructor() {
        document.addEventListener('DOMContentLoaded', this.onPageLoad.bind(this));
    }

    createElement(type, attributes = {}, ...children) {
        const element = document.createElement(type);
        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        for (let child of children) {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        }
        return element;
    }   

    appendElements(parent, ...elements) {
        for (let element of elements) {
            parent.appendChild(element);
        }
    }

    imageImporter(newImage){
        let image = this.createElement('img', {src: newImage, id: ``});
        return image;
    }


    onPageLoad() {
        const header = document.querySelector('#header');
        const content = document.querySelector('#content');
        const titlePreface = this.createElement('p', {id: 'titlePreface'}, 'The');
        const title = this.createElement('h1', { class: 'header' }, "Noodle Basement");
        const noodleImage = this.imageImporter(bgImage)
        
        const navBar = document.querySelector('#nav-bar')

        const homeBtn = this.createElement('button', {class: 'nav-button'}, "HOME")
        const contactBtn = this.createElement('button', {class: 'nav-button'}, "MENU")
        const menuBtn = this.createElement('button', {class: 'nav-button'}, "CONTACT US")

        this.appendElements(content, noodleImage);
        this.appendElements(header, titlePreface, title );
        this.appendElements(navBar, homeBtn, contactBtn, menuBtn)
    }   
}

// Initialize the PageInitializer class
const pageInitializer = new PageInitializer();

export {
    pageInitializer
}
