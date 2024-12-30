
const quotes = [
    "Believe in yourself!",
    "Success is the best revenge.",
    "You are stronger than you think.",
    "The best time to start was yesterday. The second best time is now.",
    "Don't stop when you're tired. Stop when you're done.",
    "You are capable of amazing things!",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The best Way To Predict The future is to invent it ",
    "Your Limitation- it's Only Your imagination",
    "Push yourself because no one else is going to do it for you",
    "Great thing never come from comfort zones.",
    "Dream it.Wish it.Do it."
];

const quoteElement= document.getElementById('quote');
const button = document.getElementById('new-quote');
button.addEventListener('click',()=>{
    const randomIndex = Math.floor(Math.random()*quotes.length);
    quoteElement.textContent= quotes[randomIndex];
})

function add(){
    alert("Hello");
}