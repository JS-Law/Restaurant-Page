
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
        
        const navBar = document.querySelector('#nav-bar');
        const homeBtn = this.createElement('button', {class: 'nav-button' , id : 'home-button'}, "HOME");
        const contactBtn = this.createElement('button', {class: 'nav-button', id : 'contact-button'}, "MENU");
        const menuBtn = this.createElement('button', {class: 'nav-button', id : 'menu-button'}, "CONTACT US");
        
        
        const tempDiv = this.createElement('div', {id: 'temp-div'});
        const noodleImage = this.imageImporter(bgImage)
        const aboutUsContainer = this.createElement('div', { id : 'about-us-container'})
        const aboutUsTitle = this.createElement('h2', {id: 'about-us-title'}, 'About Us...');
        const aboutUs = this.createElement(
            'p',
            { id : 'about-us' },
            "Welcome to The Noodle Basement, a cozy, subterranean restaurant founded by Samantha, a passionate food lover. We specialize in hand-made noodles, blending traditional Asian recipes with modern twists to create unforgettable dishes. At The Noodle Basement, we pride ourselves on using the finest ingredients and delivering exceptional service in a warm, welcoming atmosphere. Whether you're a noodle enthusiast or a first-time visitor, you'll find something to love in our diverse menu. Join us for a unique dining experience that combines tradition, creativity, and hospitality. We look forward to sharing our love for noodles with you!"
        )

        this.appendElements(header, titlePreface, title );
        this.appendElements(navBar, homeBtn, contactBtn, menuBtn)
        
        this.appendElements(content, tempDiv);
        this.appendElements(tempDiv, noodleImage, aboutUsContainer)
        this.appendElements(aboutUsContainer, aboutUsTitle, aboutUs)
        
    }   
}

// Initialize the PageInitializer class
const pageInitializer = new PageInitializer();

export {
    pageInitializer
}
