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
            contactUsTitle.style.textAlign = 'center'
            const hoursOfOperation = new ElementCreator('p', {id: 'hours-operation'}, 'Hours of Operation').createElement();
            const monThur = new ElementCreator('p', {class : 'hours-title'}, 'Monday - Thursday').createElement();
            const hoursOne = new ElementCreator('p', {class : 'hours'}, '11:00 AM - 10:00 PM').createElement();
            const friSat = new ElementCreator('p', {class : 'hours-title'}, 'Friday - Saturday').createElement();
            const hoursTwo = new ElementCreator('p', {class : 'hours'}, '11:00 AM - 11:00 PM').createElement();
            const sunday = new ElementCreator('p', {class : 'hours-title'}, 'Sunday').createElement();
            const hoursThree = new ElementCreator('p', {class : 'hours'}, '12:00 PM - 9:00 PM').createElement();
            const contactUsInfoTitle = new ElementCreator('h3', { id: 'contact-us-info-title' }, 'Contact Details:').createElement();
            const email = new ElementCreator('p', { id: 'email' }, 'noodlebasement@noodlebasement.com').createElement();
            

            new ElementAppender(content, contactContainer).appendElements();
            new ElementAppender(contactContainer, contactImage, contactUsContainer).appendElements();
            new ElementAppender(contactUsContainer, contactUsTitle, hoursOfOperation, monThur, hoursOne, friSat, hoursTwo, sunday, hoursThree, contactUsInfoTitle, email).appendElements();
        }
    }
}

export { PageThree };
