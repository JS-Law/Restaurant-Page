import { PageOne } from "./page-one/page-one";
import { PageTwo } from "./page-two/page-two";
import { PageThree } from "./page-three/page-three";
import { LoadHeader } from "./header-loader/header-loader";
import './style.css';

// Initialize PageOne class
const generatePageOne = new PageOne();
const generatePageTwo = new PageTwo();
const generatePageThree = new PageThree();

function callPage(page) {
    page.onPageLoad();
}

function clearContainer(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = ''; // or use the removeChild method
    }
}

function pageUnload(page){
    page.onPageUnload();
}


function containerExists(containerId) {
    const content = document.getElementById('content');
    if (content) {
        const container = content.querySelector(`#${containerId}`);
        return container !== null;
    }
    return false;
}


function callHeader() {
    LoadHeader;
}

document.addEventListener('DOMContentLoaded', () => {
    callHeader();
    // callPage(generatePageOne);
    
    const homeBtn = document.querySelector('#home-button');
    const menuBtn = document.querySelector('#menu-button');
    const contactBtn = document.querySelector('#contact-button');
    
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            pageUnload(generatePageOne)
            if (containerExists('temp-div')) {
                clearContainer('content')
            } else if(containerExists('menu-container')) {
                clearContainer('content')
                callPage(generatePageOne);

            } else {
                callPage(generatePageOne);
                
            }
        });
    }
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            pageUnload(generatePageTwo)
            if (containerExists('menu-container')) {
                clearContainer('content')
            } else if(containerExists('temp-div')) {
                clearContainer('content')
                callPage(generatePageTwo);
            } else {
                callPage(generatePageTwo);
            }
        });
    }
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            pageUnload(generatePageThree)
            if (containerExists('contact-container')) {
                clearContainer('content')
            } else if(containerExists('contact-container')) {
                clearContainer('content')
                callPage(generatePageThree);
            } else {
                callPage(generatePageThree);
            }
            alert("Loading Contact Page");
        });
    }
});
