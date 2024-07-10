import { ElementAppender } from "../helpers/helpers";
import { ElementCreator } from "../helpers/helpers";
import { ImageImporter } from "../helpers/helpers";
import bgImage from './background-image.jpg';

class PageOne {
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
        const content = document.querySelector('#content');
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

        if (!document.querySelector('#temp-div')) {
            const tempDiv = new ElementCreator('div', { id: 'temp-div' }).createElement();
            const noodleImage = new ImageImporter(bgImage).importImage();
            const aboutUsContainer = new ElementCreator('div', { id: 'about-us-container' }).createElement();
            const aboutUsTitle = new ElementCreator('h2', { id: 'about-us-title' }, 'About Us...').createElement();
            const aboutUs = new ElementCreator(
                'p',
                { id: 'about-us' },
                "Welcome to The Noodle Basement, a cozy, subterranean restaurant founded by Samantha, a passionate food lover. We specialize in hand-made noodles, blending traditional Asian recipes with modern twists to create unforgettable dishes. At The Noodle Basement, we pride ourselves on using the finest ingredients and delivering exceptional service in a warm, welcoming atmosphere. Whether you're a noodle enthusiast or a first-time visitor, you'll find something to love in our diverse menu. Join us for a unique dining experience that combines tradition, creativity, and hospitality. We look forward to sharing our love for noodles with you!"
            ).createElement();

            new ElementAppender(content, tempDiv).appendElements();
            new ElementAppender(tempDiv, noodleImage, aboutUsContainer).appendElements();
            new ElementAppender(aboutUsContainer, aboutUsTitle, aboutUs).appendElements();
        }
    }
}

// Initialize the PageOne class
const generatePageOne = new PageOne();

export {
    PageOne
};
