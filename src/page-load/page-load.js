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
        const content = document.querySelector('#content');
        
        // Creating elements
        const header = this.createElement('h1', { class: 'header' }, 'Hello, World!');
        const paragraph = this.createElement('p', { class: 'description' }, 'This is a sample paragraph.');

        // Appending elements
        this.appendElements(content, header, paragraph);
    }
}

// Initialize the PageInitializer class
const pageInitializer = new PageInitializer();

export {
    pageInitializer
}
