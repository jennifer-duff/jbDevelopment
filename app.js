'use strict'

// --------------------- Title Typing Animation -------------------------
// var i = 0;
// var text = 'hi, i\'m jennifer';
// var typeSpeed = 115;
// let typeTime = 0;
// let delay;
// let totalRuntime = 0;

// let typeTimeoutID;
// let postTypePauseID;
// let deleteTimeoutID;
// let postDeletePauseID;
// let iterationDelayID;


// async function typeWriter() {
//     clearTimeout(typeTimeoutID);
//     let numLetters = text.length;
//     typeTime = numLetters * typeSpeed;
//     delay = typeTime + 1500;
//     totalRuntime = typeTime + delay + typeTime + delay;

//     if (i < text.length) {
//         document.querySelector('.introWords').innerHTML += text.charAt(i);
//         i++;
//         typeTimeoutID = setTimeout(typeWriter, typeSpeed);
//     }
//     await new Promise(resolve => postTypePauseID = setTimeout(resolve, (delay + 500)));
// }

// async function deleting() {
//     clearTimeout(deleteTimeoutID);
//     let textCopy = text;
//     if (i > 0) {
//         textCopy = textCopy.slice(0, (i-1));
//         document.querySelector('.introWords').innerHTML = textCopy;
//         i--;
//         deleteTimeoutID = setTimeout(deleting, typeSpeed);
//     }
//     await new Promise(resolve => postDeletePauseID = setTimeout(resolve, delay));
// }

// async function typeAndDelete(){
//     await typeWriter();
//     //await new Promise(resolve => setTimeout(resolve, (delay + 500)));
//     await deleting();
//     //await new Promise(resolve => setTimeout(resolve, delay));
//     iterationDelayID = setTimeout(typeAndDelete, 500);
    //requestAnimationFrame(typeAndDelete);
//}
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
let contactOffset = contactSection.offsetTop - 200;
//console.log(`contactSectionOffset: ${contactOffset}`);


//listen for window resizing & update section heights accordingly
window.addEventListener('resize', function() {
    portfolioOffset = portfolioSection.offsetTop - 200;
    aboutOffset = aboutSection.offsetTop - 200;
    contactOffset = contactSection.offsetTop - 200;
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


//------------------- Portfolio Links ------------------------
const linksContainers = document.querySelectorAll('.linksContainer');
const githubLinks = document.querySelectorAll('.githubLink');
const viewLiveLinks = document.querySelectorAll('.viewLive');
const learnMoreLinks = document.querySelectorAll('.learnMore');
const linksLabelDivs = document.querySelectorAll('.linksLabelDiv');
const linkTexts = document.querySelectorAll('.linkText');
const triangles = document.querySelectorAll('.triangle');

function findParent(event){
    let parent = event.target.parentElement.parentElement;
    console.log(parent);
    let index;
    for (let i = 0; i < linksContainers.length; i ++){
        if (linksContainers[i] === parent){
            index = i;
            console.log(index);
            return index;
        }
    }
}


function viewLiveHover(event){
    // console.log(event.target);
    let index = findParent(event);
    let triangleIndex = index * 3;
    linksLabelDivs[index].style.opacity = '1';
    triangles[triangleIndex].style.opacity = '1';
    linkTexts[index].innerText = 'see live';
}

function viewLiveExit(event){
    let index = findParent(event);
    let triangleIndex = index * 3;
    triangles[triangleIndex].style.opacity = '0';
    linksLabelDivs[index].style.opacity = '0';
}


for (let i = 0; i < viewLiveLinks.length; i++){
    viewLiveLinks[i].addEventListener('mouseover', viewLiveHover);
    viewLiveLinks[i].addEventListener('mouseout', viewLiveExit);
}



function learnMoreHover(event){
    let index = findParent(event);
    let triangleIndex = index * 3 + 1;
    linksLabelDivs[index].style.opacity = '1';
    triangles[triangleIndex].style.opacity = '1';
    linkTexts[index].innerText = 'learn more';
}
 
function learnMoreExit(event){
    let index = findParent(event);
    let triangleIndex = index * 3 + 1;
    triangles[triangleIndex].style.opacity = '0';
    linksLabelDivs[index].style.opacity = '0';
}

for (let i = 0; i < githubLinks.length; i++){
    learnMoreLinks[i].addEventListener('mouseover', learnMoreHover);
    learnMoreLinks[i].addEventListener('mouseout', learnMoreExit);
}


function gitHubHover(event){
    let index = findParent(event);
    let triangleIndex = index * 3 + 2;
    linksLabelDivs[index].style.opacity = '1';
    triangles[triangleIndex].style.opacity = '1';
    linkTexts[index].innerText = 'view on GitHub';
}

function gitHubExit(event){
    let index = findParent(event);
    let triangleIndex = index * 3 + 2;
    triangles[triangleIndex].style.opacity = '0';
    linksLabelDivs[index].style.opacity = '0';
}

for (let i = 0; i < githubLinks.length; i++){
    githubLinks[i].addEventListener('mouseover', gitHubHover);
    githubLinks[i].addEventListener('mouseout', gitHubExit);
}