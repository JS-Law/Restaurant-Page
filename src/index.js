import { PageOne } from "./page-one/page-one";
import { LoadHeader } from "./header-loader/header-loader";
import './style.css';

// Initialize PageOne class
const generatePageOne = new PageOne();

function callPageOne() {
    generatePageOne.onPageLoad();
}

function callHeader() {
    LoadHeader;
}

document.addEventListener('DOMContentLoaded', () => {
    callHeader();

    const homeBtn = document.querySelector('#home-button');
    const menuBtn = document.querySelector('#menu-button');
    const contactBtn = document.querySelector('#contact-button');

    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            alert("Loading Home Page");
            callPageOne();
        });
    }
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            alert("Loading Menu Page");
            callPageOne(); // Adjust this if you have a separate function for initializing the menu page
        });
    }
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            alert("Loading Contact Page");
            callPageOne(); // Adjust this if you have a separate function for initializing the contact page
        });
    }
});
