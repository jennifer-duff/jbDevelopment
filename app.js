'use strict'

// --------------------- Title Typing Animation -------------------------
var i = 0;
var text = 'hi, i\'m jennifer';
var typeSpeed = 115;
let typeTime = 0;
let delay = 0;
let totalRuntime = 0;
let introCursors = document.querySelector('.introCursors');

async function typeWriter() {
    //console.log('typing');

    let numLetters = text.length;
    typeTime = numLetters * typeSpeed;
    delay = typeTime + 1500;
    totalRuntime = typeTime + delay + typeTime + delay;
    

    if (i < text.length) {
        document.querySelector('.introWords').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, typeSpeed);
    }
}


async function deleting() {
    //console.log('deleting');
    let textCopy = text;
    if (i > 0) {
        textCopy = textCopy.slice(0, (i-1));
        document.querySelector('.introWords').innerHTML = textCopy;
        i--;
        setTimeout(deleting, typeSpeed);
    }
}


async function typeAndDelete(){
    await typeWriter();
    await new Promise(resolve => setTimeout(resolve, (delay + 500)));
    await deleting();
    await new Promise(resolve => setTimeout(resolve, delay));
    setTimeout(typeAndDelete, 500);
}
typeAndDelete();

// --------------------- H2 SlideIn Animation Trigger -------------------------
const h2s = document.querySelectorAll('h2');

function callback (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log(entry.target);
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
