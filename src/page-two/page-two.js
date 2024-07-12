import { ElementAppender } from "../helpers/helpers";
import { ElementCreator } from "../helpers/helpers";
import { ImageImporter } from "../helpers/helpers";
// import bgImage from './background-image.jpg';
class MenuItem {
    constructor(name, calories, noodleType, description, price){
        this.name = name;
        this.calories = calories;
        this.noodleType = noodleType;
        this.description = description;
        this.price = price;
    }
}

class Menu {
    constructor() {
        this.menuItems = [];
    }

    addBook(book){
        this.menuItems.push(this.menuItem);
    }
}

class PageTwo {
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

        if (!document.querySelector('#menu-container')) {
            const menuContainer = new ElementCreator('div', { id: 'container' }).createElement();
            
            /** ----------BRAINSTORM FOR POSSIBLE ELEMENTS NEEDED----------
             *  Grid container
             *  Grid row for each container, the grid auto flow will need to be set properly
             *  Styled like a traditional menu
             * 
             * 
             */

            new ElementAppender(content, menuContainer).appendElements();
            new ElementAppender(menuContainer, noodleImage, aboutUsContainer).appendElements();
            new ElementAppender(aboutUsContainer, aboutUsTitle, aboutUs).appendElements();
        }
    }
}

export { PageTwo };
