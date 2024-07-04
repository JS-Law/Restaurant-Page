
import NoodleImage from './background-image.jpg'

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

    onPageLoad() {
        const header = document.querySelector('#header');
        const content = document.querySelector('#content');
        const title = this.createElement('h1', { class: 'header' }, "Samantha's Noodle Basement");
        const noodleImage = new Image();
        noodleImage.src = NoodleImage;
        this.appendElements(content, noodleImage)
        this.appendElements(header, title );
    }
}

// Initialize the PageInitializer class
const pageInitializer = new PageInitializer();

export {
    pageInitializer
}
