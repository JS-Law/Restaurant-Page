import { ElementAppender } from "../helpers/helpers";
import { ElementCreator } from "../helpers/helpers";
// import { ImageImporter } from "../helpers/helpers";
// import bgImage from './background-image.jpg';

class LoadHeader {
    constructor() {
        this.initialized = false;
        document.addEventListener('DOMContentLoaded', this.onPageLoad.bind(this));
    }

    onPageLoad() {
        if (this.initialized) {
            return;
        }

        this.initialized = true;

        const header = document.querySelector('#header');
        // const content = document.querySelector('#content');
        const navBar = document.querySelector('#nav-bar');

        // Check if the elements already exist to prevent duplication
        if (!document.querySelector('#titlePreface')) {
            const titlePreface = new ElementCreator('p', { id: 'titlePreface' }, 'The').createElement();
            const title = new ElementCreator('h1', { class: 'header' }, "Noodle Basement").createElement();
            new ElementAppender(header, titlePreface, title).appendElements();
        }

        if (!document.querySelector('#home-button')) {
            const homeBtn = new ElementCreator('button', { class: 'nav-button', id: 'home-button' }, "HOME").createElement();
            const contactBtn = new ElementCreator('button', { class: 'nav-button', id: 'contact-button' }, "MENU").createElement();
            const menuBtn = new ElementCreator('button', { class: 'nav-button', id: 'menu-button' }, "CONTACT US").createElement();
            new ElementAppender(navBar, homeBtn, contactBtn, menuBtn).appendElements();
        }

    }
}

// Initialize the PageOne class
const generatePageOne = new LoadHeader();

export {
    LoadHeader
};
