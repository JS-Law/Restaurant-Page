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

    addBook(menuItem){
        this.menuItems.push(menuItem);
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
             *  Two columns per row
             *  Each grid cell will be a flex container
             * 
             *  EXAMPLE:
             *      Spicey Wok Noodles
             *      680cal
             *      A wonderful description of the spicey noodles above. **Chef favorite**
             *      $14.99
             *  EXTRA POINTS
             *      I'd love to be able to have the menu bento box overlayed ontop of an image
             *      so that there is a sliver, lets say 20px shown on the top.
             */

            new ElementAppender(content, menuContainer).appendElements();
            new ElementAppender(menuContainer, noodleImage, aboutUsContainer).appendElements();
            new ElementAppender(aboutUsContainer, aboutUsTitle, aboutUs).appendElements();
        }
    }
}

export { PageTwo };
