const letters=[
    "\"Don't say too much just I Love You....\"",
    "\"I love you today and always...\"",
    "\"You are my forever and always...\"",
    "\"Always remember that I always love from the bottom of my heart...\"",
    "\"I will be always there for you and trust you.\"",
    "\"I need you like a heart needs a beat...\""
];

function displayLetter(){
    const letterElement = document.getElementById('letter');
    const randomIndex = Math.floor(Math.random()*letters.length);

    letterElement.innerText = letters[randomIndex];
}

document.getElementById('new-letter').addEventListener('click',displayLetter);
