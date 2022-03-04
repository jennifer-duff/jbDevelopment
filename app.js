'use strict'

// --------------------- H2 SlideIn Animation Trigger -------------------------
const headings = document.querySelectorAll('.headingWrapper');
//const h3s = document.

function callback (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.childNodes[1].classList.add('headingAnimation');
            return;
        }
        entry.target.childNodes[1].classList.remove('headingAnimation');
    })
}

const observer = new IntersectionObserver(callback);

for (let i = 0; i < headings.length; i++)
{
    observer.observe(headings[i]);
}

// --------------------- Hamburger Nav -------------------------
let menuIcon = document.querySelector('#menuIcon');
let hamburgerNav = document.querySelector('#hamburgerNav');
// let navLinks = hamburgerNav.childNodes;
// console.log(hamburgerNavLinks);

function showHamburgerMenu(){
    hamburgerNav.style.display = 'flex';
}

function hideHamburgerMenu(){
    hamburgerNav.style.display = 'none';
}

hamburgerNav.addEventListener('mouseleave', function(){
    hideHamburgerMenu();
})

document.body.addEventListener('click', function(event){
    if (event.target === menuIcon)
    {
        //console.log('Menu Icon clicked');
        showHamburgerMenu();
    }
    else if(event.target === hamburgerNav || event.target === hamburgerNav.childNodes)
    {
        showHamburgerMenu();
        //console.log('hamburgerNav clicked');
    }
    else{
        hideHamburgerMenu();
        //console.log('body clicked');
    }
})

//hide/show hamburger automatically based on resize - for cases where menu is open when document is resized.
window.addEventListener('resize', function() {
    if(window.innerWidth > 660){
        hideHamburgerMenu();
    }
})


// let mediaQuery1 = window.matchMedia('(max-width: 650px)');
// let mediaQuery2 = window.matchMedia('(max-width: 475px)');

// mediaQuery1.onchange = (e) => {
//     if (e.matches)
//     {
//         console.log('hiding hamburger menu');
//         hideHamburgerMenu();
//     }
// }

// mediaQuery2.onchange = (e) => {
//     if (e.matches)
//     {
//         console.log('hiding hamburger menu');
//         hideHamburgerMenu();
//     }
// }

//------------------- Handle Navigation ------------------------
let backToTop = document.querySelector('#backToTopContainer');
let sections = document.querySelectorAll('section');
let navLinksDivs = document.querySelectorAll('nav a div');

//set initial section heights
let portfolioSection = sections[1];
let portfolioOffset = portfolioSection.offsetTop - 200;
//console.log(`portfolioOffset: ${portfolioOffset}`);

let aboutSection = sections[2];
let aboutOffset = aboutSection.offsetTop - 200;
//console.log(`aboutSectionOffset: ${aboutOffset}`);

let contactSection = sections[3];
let contactOffset = contactSection.offsetTop - 500;
//console.log(`contactSectionOffset: ${contactOffset}`);


//listen for window resizing & update section heights accordingly
window.addEventListener('resize', function() {
    portfolioOffset = portfolioSection.offsetTop - 200;
    aboutOffset = aboutSection.offsetTop - 200;
    contactOffset = contactSection.offsetTop - 500;
})

//set underline starting positions
for (let i = 0; i < navLinksDivs.length; i++)
{
    if ( i === 0 || i === 4)
    {
        navLinksDivs[i].style.opacity = 1;
    }
    else
    {
        navLinksDivs[i].style.opacity = 0;
    }
    backToTop.style.opacity = 0;
}

//listen for scrolling and change nav underline accordingly
window.addEventListener('scroll', function(){
    let currScrollPos = window.scrollY;

    if (currScrollPos < portfolioOffset)
    {
        //console.log(`splashBox section: ${currScrollPos}`);
        for (let i = 0; i < (navLinksDivs.length - 1); i++)
        {
            if ( i === 0 || i === 4)
            {
                //console.log(navLinksDivs[i]);
                navLinksDivs[i].style.opacity = 1;
            }
            else
            {
                navLinksDivs[i].style.opacity = 0;
            }
        }
        backToTop.style.opacity = 0;
    }

    else if((currScrollPos >= portfolioOffset && currScrollPos < aboutOffset))
    {
        //console.log(`portfolio section: ${currScrollPos}`);
        for (let i = 0; i < navLinksDivs.length; i++)
        {
            if ( i === 1 || i === 5)
            {
                navLinksDivs[i].style.opacity = 1;
            }
            else
            {
                navLinksDivs[i].style.opacity = 0;
            }
        }
        backToTop.style.opacity = 1;
    }

    else if((currScrollPos >= aboutOffset && currScrollPos < contactOffset))
    {
        //console.log(`about section: ${currScrollPos}`);
        for (let i = 0; i < navLinksDivs.length; i++)
        {
            if ( i === 2 || i === 6)
            {
                navLinksDivs[i].style.opacity = 1;
            }
            else
            {
                navLinksDivs[i].style.opacity = 0;
            }
        }
        backToTop.style.opacity = 1;
    }

    else if((currScrollPos >= contactOffset))
    {
        //console.log(`contact section: ${currScrollPos}`);
        for (let i = 0; i < navLinksDivs.length; i++)
        {
            if ( i === 3 || i === 7)
            {
                navLinksDivs[i].style.opacity = 1;
            }
            else
            {
                navLinksDivs[i].style.opacity = 0;
            }
        }
        backToTop.style.opacity = 1;
    }
})


//------------------- Embedded PDF ------------------------
let resume = document.querySelector('#resume');
document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
    var adobeDCView = new AdobeDC.View({clientId: "5e2aab6c4a094333b32fa64970764fc2", divId: "resume"});
    adobeDCView.previewFile({
        content:{location: {url: "/Assets/JenniferDuffResume_2022.pdf"}},
        metaData:{fileName: "JenniferDuffResume_2022.pdf"}
    }, {embedMode: "IN_LINE"});
});