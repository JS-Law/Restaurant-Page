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

    addDish(menuItem){
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

        // MENU ITEMS
        /**
         * Chow Mein
         * Lo Mein
         * Ramen
         *      A popular Japanese dish made from long, thin wheat-based noodles that are often dried into blocks for instant ramen
         * Wonton Noodles
         *      A Cantonese dish that includes wonton dumplings and is also popular in Hong Kong and some Southeast Asian countries 
         */     
        const menuItemOne = new MenuItem(
            'Pad Thai', 
            800, 
            'Rice Noodle',
            "A popular Thai dish made with thin rice noodles, egg, scallions, bean sprouts, peanuts, and shrimp.",
            "$14.99",
        )
        const menuItemTwo = new MenuItem(
            'Japchae', 
            680, 
            'Rice Noodle',
            "A popular Korean dish made with glass noodles from sweet potatoes that have a bouncy texture that pairs well with crunchy vegetables",
            "$15.99",
        )
        const menuItemThree = new MenuItem(
            'Laksa', 
            550, 
            'Rice Noodle',
            "A popular Southeast Asian dish made from rice flour noodles that are larger in diameter than rice vermicelli and look like white spaghetti",
            "$13.99",
        )
        const menuItemFour = new MenuItem(
            'Singapore-style Noodles', 
            490, 
            'Rice Noodle',
            "A nourishing curry-based rice noodle dish with vegetables, scallions, tofu, and cilantro",
            "$16.99",
        )
        const menuItemFive = new MenuItem(
            'Chow Mein', 
            680, 
            'Rice Noodle',
            "A versatile Chinese dish that can be made with stir-fried egg noodles, meat, and vegetables, or served vegetarian",
            "$12.99",
        )
        const menuItemSix = new MenuItem(
            'Lo Mein', 
            500, 
            'Rice Noodle',
            "A well-known Chinese dish made from wheat flour and sea salt, typically stir-fried with vegetables and meat",
            "$16.99",
        )
        const menuItemSeven = new MenuItem(
            'Lo Mein', 
            800, 
            'Rice Noodle',
            "A popular Japanese dish made from long, thin wheat-based noodles that are often dried into blocks for instant ramen",
            "$14.99",
        )
        const menuItemEight = new MenuItem(
            'Wonton Noodles', 
            800, 
            'Rice Noodle',
            "A Cantonese dish that includes wonton dumplings and is also popular in Hong Kong and some Southeast Asian countries ",
            "$14.99",
        )


        this.initialized = true;

        const content = document.querySelector('#content');

        if (!document.querySelector('#menu-container')) {
            
            Menu.addDish(menuItemOne)
            Menu.addDish(menuItemTwo)
            Menu.addDish(menuItemThree)
            Menu.addDish(menuItemFour)
            Menu.addDish(menuItemFive)
            Menu.addDish(menuItemSix)
            Menu.addDish(menuItemSeven)
            Menu.addDish(menuItemEight)

            const menuContainer = new ElementCreator('div', { id: 'container' }).createElement();
            menuContainer.style.display = 'grid'
            menuContainer.style.gridTemplateColumns = 'repeat(2, 10px)'
            menuContainer.style.gridTemplateRows = 'repeat(8, 10px)'


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
