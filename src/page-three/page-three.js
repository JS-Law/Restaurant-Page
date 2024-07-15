import { ElementAppender } from "../helpers/helpers";
import { ElementCreator } from "../helpers/helpers";
import { ImageImporter } from "../helpers/helpers";
import contactImg from "./menu-img.jpg"

class PageThree {
    constructor() {
        this.initialized = false;
    }

    onPageUnload(){
        this.initialized = false;
    }

    onPageLoad() {
        if (this.initialized) {
            return;
        }

        this.initialized = true;

        const content = document.querySelector('#content');

        if (!document.querySelector('#contact-container')) {
            const contactContainer = new ElementCreator('div', { id: 'contact-container' }).createElement();
            const contactImage = new ImageImporter(contactImg, 'noodle-image').importImage();
            const contactUsContainer = new ElementCreator('div', { id: 'contact-us-container' }).createElement();
            const contactUsTitle = new ElementCreator('h2', { id: 'contact-us-title' }, 'Contact Us...').createElement();
            const contactUs = new ElementCreator(
                'p',
                { id: 'contact-us' },
                "Welcome to The Noodle Basement, a cozy, subterranean restaurant founded by Samantha, a passionate food lover. We specialize in hand-made noodles, blending traditional Asian recipes with modern twists to create unforgettable dishes. At The Noodle Basement, we pride ourselves on using the finest ingredients and delivering exceptional service in a warm, welcoming atmosphere. Whether you're a noodle enthusiast or a first-time visitor, you'll find something to love in our diverse menu. Join us for a unique dining experience that combines tradition, creativity, and hospitality. We look forward to sharing our love for noodles with you!"
            ).createElement();

            new ElementAppender(content, contactContainer).appendElements();
            new ElementAppender(contactContainer, contactImage, contactUsContainer).appendElements();
            new ElementAppender(contactUsContainer, contactUsTitle, contactUs).appendElements();
        }
    }
}

export { PageThree };
