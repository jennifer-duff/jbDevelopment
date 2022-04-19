"use strict";

// --------------------- H2 SlideIn Animation Trigger -------------------------
const headings = document.querySelectorAll(".headingWrapper");
//const h3s = document.

function callback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.childNodes[1].classList.add("headingAnimation");
            return;
        }
        entry.target.childNodes[1].classList.remove("headingAnimation");
    });
}

const observer = new IntersectionObserver(callback);

for (let i = 0; i < headings.length; i++) {
    observer.observe(headings[i]);
}

// --------------------- Hamburger Nav -------------------------
let menuIcon = document.querySelector("#menuIcon");
let hamburgerNav = document.querySelector("#hamburgerNav");

function showHamburgerMenu() {
    hamburgerNav.style.display = "flex";
}

function hideHamburgerMenu() {
    hamburgerNav.style.display = "none";
}

hamburgerNav.addEventListener("mouseleave", function () {
    hideHamburgerMenu();
});

document.body.addEventListener("click", function (event) {
    if (event.target === menuIcon) {
        showHamburgerMenu();
    } else if (
        event.target === hamburgerNav ||
        event.target === hamburgerNav.childNodes
    ) {
        showHamburgerMenu();
    } else {
        hideHamburgerMenu();
    }
});

//hide/show hamburger automatically based on resize - for cases where menu is open when document is resized.
window.addEventListener("resize", function () {
    if (window.innerWidth > 660) {
        hideHamburgerMenu();
    }
});

//------------------- Handle Navigation ------------------------
let backToTop = document.querySelector("#backToTopContainer");
let sections = document.querySelectorAll("section");
let navLinksDivs = document.querySelectorAll("nav a div");

//set initial section heights + scroll position
let currScrollPos = window.scrollY;
let portfolioOffset;
let aboutOffset;
let contactOffset;
window.addEventListener("load", setSectionOffsets);
window.addEventListener("load", handleScroll);

function setSectionOffsets() {
    let portfolioSection = sections[1];
    portfolioOffset = portfolioSection.offsetTop - 200;

    let aboutSection = sections[2];
    aboutOffset = aboutSection.offsetTop - 200;

    let contactSection = sections[3];
    contactOffset = contactSection.offsetTop - 500;
}

//listen for window resizing & update section heights accordingly
window.addEventListener("resize", setSectionOffsets);

//listen for scrolling and change nav underline accordingly
window.addEventListener("scroll", handleScroll);

function handleScroll() {
    currScrollPos = window.scrollY;

    // show Home underline
    if (currScrollPos < portfolioOffset) {
        for (let i = 0; i < navLinksDivs.length; i++) {
            if (i === 0 || i === 4) {
                navLinksDivs[i].style.opacity = 1;
            } else {
                navLinksDivs[i].style.opacity = 0;
            }
        }
        backToTop.style.opacity = 0;
    }
    // show Portfolio underline
    else if (currScrollPos >= portfolioOffset && currScrollPos < aboutOffset) {
        for (let i = 0; i < navLinksDivs.length; i++) {
            if (i === 1 || i === 5) {
                navLinksDivs[i].style.opacity = 1;
            } else {
                navLinksDivs[i].style.opacity = 0;
            }
        }
        backToTop.style.opacity = 1;
    }
    // show About unerline
    else if (currScrollPos >= aboutOffset && currScrollPos < contactOffset) {
        for (let i = 0; i < navLinksDivs.length; i++) {
            if (i === 2 || i === 6) {
                navLinksDivs[i].style.opacity = 1;
            } else {
                navLinksDivs[i].style.opacity = 0;
            }
        }
        backToTop.style.opacity = 1;
    }
    // show Contact underline
    else if (currScrollPos >= contactOffset) {
        for (let i = 0; i < navLinksDivs.length; i++) {
            if (i === 3 || i === 7) {
                navLinksDivs[i].style.opacity = 1;
            } else {
                navLinksDivs[i].style.opacity = 0;
            }
        }
        backToTop.style.opacity = 1;
    }
}

//------------- Make ProjectTile links unclickable until revealed -------------------
let infoContainers = document.querySelectorAll(".infoContainer");
let linkBoxes = document.querySelectorAll(".linkBox");

// console.log(infoContainers);

// for(let i = 0; i < infoContainers.length; i++){
//     console.log(infoContainers[i]);
// }

// function revealLinksOnHover(){
//     for(let linkBox of linkBoxes){
//         if(linkBox.style.opacity = 0){
//             linkBox.style.pointerEvents = 'none';
//             linkBox.style.cursor = 'default';
//         }
//     }
// }

// function revealLinksOnHover(event){
//     let parent = event.target;
//     console.log(event.target)
//     for(let i = 0; i < infoContainers.length; i++){
//         if(infoContainers[i] === parent){
//             linkBoxes[i].style.visibility = 'visible';
//         }
//     }
// }

// for(let tile of infoContainers){
//     tile.addEventListener('hover', revealLinksOnHover);
//     tile.addEventListener('click', revealLinksOnHover);
// }
