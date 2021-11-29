'use strict'

// --------------------- Title Typing Animation -------------------------
var i = 0;
var text = 'hi, i\'m jennifer';
var typeSpeed = 115;
let typeTime = 0;
let delay;
let totalRuntime = 0;

let typeTimeoutID;
let postTypePauseID;
let deleteTimeoutID;
let postDeletePauseID;
let iterationDelayID;


async function typeWriter() {
    clearTimeout(typeTimeoutID);
    let numLetters = text.length;
    typeTime = numLetters * typeSpeed;
    delay = typeTime + 1500;
    totalRuntime = typeTime + delay + typeTime + delay;

    if (i < text.length) {
        document.querySelector('.introWords').innerHTML += text.charAt(i);
        i++;
        typeTimeoutID = setTimeout(typeWriter, typeSpeed);
    }
    await new Promise(resolve => postTypePauseID = setTimeout(resolve, (delay + 500)));
}

async function deleting() {
    clearTimeout(deleteTimeoutID);
    let textCopy = text;
    if (i > 0) {
        textCopy = textCopy.slice(0, (i-1));
        document.querySelector('.introWords').innerHTML = textCopy;
        i--;
        deleteTimeoutID = setTimeout(deleting, typeSpeed);
    }
    await new Promise(resolve => postDeletePauseID = setTimeout(resolve, delay));
}

async function typeAndDelete(){
    await typeWriter();
    //await new Promise(resolve => setTimeout(resolve, (delay + 500)));
    await deleting();
    //await new Promise(resolve => setTimeout(resolve, delay));
    iterationDelayID = setTimeout(typeAndDelete, 500);
    //requestAnimationFrame(typeAndDelete);
}
//typeAndDelete();


// async function typeAndDelete(){
//     console.log('function start');
//     await typeWriter();
//     await deleting();
//     setTimeout(typeAndDelete, 500);
//     //requestAnimationFrame(typeAndDelete);
// }
// typeAndDelete();

// document.addEventListener('visibilitychange', function(){
//     if (document.visibilityState === 'visible')
//     {
//         console.log('page is visible');
//         typeAndDelete();
//     }
//     else
//     {
//         console.log('page NOT visible');
//         console.log(typeTimeoutID, postTypePauseID, deleteTimeoutID, postDeletePauseID, iterationDelayID);

//         clearTimeout(typeTimeoutID, postTypePauseID, deleteTimeoutID, postDeletePauseID, iterationDelayID);
//         // clearTimeout(postTypePauseID);
//         // clearTimeout(deleteTimeoutID);
//         // clearTimeout(postDeletePauseID);
//         // clearTimeout(iterationDelayID);
//     }
// })

// --------------------- H2 SlideIn Animation Trigger -------------------------
const h2s = document.querySelectorAll('h2');

function callback (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            //console.log(entry.target);
            entry.target.classList.add('h2Animation');
            return;
        }
        entry.target.classList.remove('h2Animation');
    })
}

const observer = new IntersectionObserver(callback);

for (let i = 0; i < h2s.length; i++)
{
    observer.observe(h2s[i]);
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
console.dir(navLinksDivs[4]);

//set initial section heights
let portfolioSection = sections[1];
let portfolioOffset = portfolioSection.offsetTop;
//console.log(`portfolioOffset: ${portfolioOffset}`);

let aboutSection = sections[2];
let aboutOffset = aboutSection.offsetTop;
//console.log(`aboutSectionOffset: ${aboutOffset}`);

let contactSection = sections[3];
let contactOffset = contactSection.offsetTop;
//console.log(`contactSectionOffset: ${contactOffset}`);


//listen for window resizing & update section heights accordingly
window.addEventListener('resize', function() {
    portfolioOffset = portfolioSection.offsetTop;
    aboutOffset = aboutSection.offsetTop;
    contactOffset = contactSection.offsetTop;
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
}

//listen for scrolling and change underline accordingly
window.addEventListener('scroll', function(){
    let currScrollPos = window.scrollY;

    if (currScrollPos < portfolioOffset)
    {
        //console.log(`splashBox section: ${currScrollPos}`);
        for (let i = 0; i < navLinksDivs.length; i++)
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
    }
})