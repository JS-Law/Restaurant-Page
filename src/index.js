import { PageOne } from "./page-one/page-one";
import { PageTwo } from "./page-two/page-two";
import { LoadHeader } from "./header-loader/header-loader";
import './style.css';

// Initialize PageOne class
const generatePageOne = new PageOne();
const generatePageTwo = new PageTwo();

function callPage(page) {
    page.onPageLoad();
}

function clearContainer(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = ''; // or use the removeChild method
    }
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
            if (containerExists('temp-div')) {
                clearContainer('content')
                // console.log('The container exists.');
            } else {
                callPage(generatePageOne);
                // console.log('The container does not exist.');
            }
            
            // alert("Loading Home Page");
            
        });
    }
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            if (containerExists('menu-container')) {
                callPage(generatePageTwo);
                // console.log('The container exists.');
            } else {
                clearContainer('content')
                // console.log('The container does not exist.');
            }
            // alert("Loading Menu Page");
        });
    }
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            alert("Loading Contact Page");
        });
    }
});
