
const quotes = [
    "Believe in yourself!",
    "Success is the best revenge.",
    "You are stronger than you think.",
    "The best time to start was yesterday. The second best time is now.",
    "Don't stop when you're tired. Stop when you're done.",
    "You are capable of amazing things!",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today."
];

const loginSection = document.getElementById('login-section');
const quoteSection = document.getElementById('quote-section');
const quoteText = document.getElementById('quote');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const logoutBtn = document.getElementById('logout-btn');
const registerLink = document.getElementById('register-link');

if (localStorage.getItem('isLoggedIn')) {
    showQuoteSection();
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
  
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'user' && password === 'password') {
       
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', username);
        
        showQuoteSection();
    } else {
        alert('Invalid credentials!');
    }
});

function showQuoteSection() {
    loginSection.style.display = 'none';
    quoteSection.style.display = 'block';
    

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    loginSection.style.display = 'block';
    quoteSection.style.display = 'none';
});


registerLink.addEventListener('click', () => {
    alert('Registration is not implemented in this demo.');
});
