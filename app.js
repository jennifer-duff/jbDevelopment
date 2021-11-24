'use strict'

// --------------------------------------------------------------------

// let introWords = document.querySelector('#introWords');

// let typeSpeed = 150;
// let typeTime = 0;
// let delay = 0;
// let totalRuntime = 0;
// let text = 

// async function typing()
// {
//     const letters = sentence.split('');

//     for (const letter in letters)
//     {
//         await new Promise(resolve => setTimeout(resolve, typeSpeed));
//         if (letter === 3)
//             {
//                 introWords.innerText = introWords.innerText + '\s';
//             }
//         else
//         {
//             introWords.innerText = introWords.innerText + letters[letter];
//         }
//     }

//     let numLetters = sentence.length;
//     typeTime = numLetters * typeSpeed;
//     delay = typeTime + 500;
//     totalRuntime = typeTime + delay + typeTime + delay;
//     //console.log(totalRuntime);
// }

// async function deleting(sentence)
// {
//     const letters = sentence.split('');
//     let length = letters.length;
//     for (let i = 0; i < length; i++)
//     {
//         await new Promise(resolve => setTimeout(resolve, typeSpeed));
//         letters.pop(letters[i]);
//         introWords.innerText = letters.join('');
//     }
// }


// async function typeAndDelete(){
//     await typing(`hi, i\'m\njennifer`);
//     await new Promise(resolve => setTimeout(resolve, delay));
//     await deleting(introWords.innerText);
//     await new Promise(resolve => setTimeout(resolve, delay));
// }

// function runTyping(){
//     setInterval(typeAndDelete, 10600);
// }

// runTyping();


// --------------------------------------------------------------------
var i = 0;
var text = 'hi i\'m jennifer';
var typeSpeed = 115;
let typeTime = 0;
let delay = 0;
let totalRuntime = 0;
//let introWords = document.querySelector('.introWords');
let introCursors = document.querySelector('.introCursors');

async function typeWriter() {
    console.log('typing');

    let numLetters = text.length;
    typeTime = numLetters * typeSpeed;
    //console.log(`typeTime: ${typeTime}`);
    delay = typeTime + 1500;
    totalRuntime = typeTime + delay + typeTime + delay;
    //console.log(`totalRuntime: ${totalRuntime}`);
    

    if (i < text.length) {
        document.querySelector('.introWords').innerHTML += text.charAt(i);
        // if (i === 8)
        // {
        //     introCursors.style.marginTop = '100px';
        //     introCursors.style.marginLeft = '-400px';
        // }
        i++;
        setTimeout(typeWriter, typeSpeed);
    }
}


async function deleting() {
    console.log('deleting');
    //let length = text.length;
    let textCopy = text;
    if (i > 0) {
        textCopy = textCopy.slice(0, (i-1));
        //console.log(text);
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

// async function typeAndDelete(){
//     await deleting();
//     await new Promise(resolve => setTimeout(resolve, delay));
//     await typeWriter();
//     await new Promise(resolve => setTimeout(resolve, (delay + 500)));
// }

//document.querySelector('.introWords').innerHTML = text;
//setInterval(typeAndDelete, 7000);
