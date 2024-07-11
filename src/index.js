
// Import Statements
// import {pageInitializer} from "./page-load/page-load";
import { PageOne } from "./page-one/page-one";
import { LoadHeader } from "./header-loader/header-loader";
import './style.css'


const genPageOne = new PageOne()

function callPageOne(){
    genPageOne.onPageLoad();
}

function callHeader(){
    LoadHeader
}


document.addEventListener('DOMContentLoaded', () => {
    callHeader()
    
    const homeBtn = document.querySelector('#home-button');
    const menuBtn = document.querySelector('#menu-button');
    const contactBtn = document.querySelector('#contact-button');
    
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            alert("Loading Home Page");
            callPageOne();
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
