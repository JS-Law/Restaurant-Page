
// Import Statements
import {pageInitializer} from "./page-load/page-load";
import './style.css'

function callInitializer(){
    pageInitializer
}

document.addEventListener('DOMContentLoaded', () => {
    callInitializer();
    
    const homeBtn = document.querySelector('#home-button');
    const menuBtn = document.querySelector('#menu-button');
    const contactBtn = document.querySelector('#contact-button');

    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            alert("Loading Home Page");
            callInitializer();
        });
    };
    if (menuBtn) {
        menuBtn.addEventListener('click', () =>{
            alert("Loading Menu Page");
            callInitializer();
        })
    };
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            alert("Loading Contact Page");
            callInitializer();
        })
    }
})







// pageInitializer
