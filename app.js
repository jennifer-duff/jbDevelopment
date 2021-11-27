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
let navLinks = hamburgerNav.childNodes;
// console.log(hamburgerNavLinks);

function showHamburgerMenu(){
    hamburgerNav.style.display = 'flex';
}

function hideHamburgerMenu(){
    hamburgerNav.style.display = 'none';
}

// menuIcon.addEventListener('click', function(){
//     showHamburgerMenu();
// })


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
