// Define some random motivational quotes
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

// Get HTML elements
const loginSection = document.getElementById('login-section');
const quoteSection = document.getElementById('quote-section');
const quoteText = document.getElementById('quote');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const logoutBtn = document.getElementById('logout-btn');
const registerLink = document.getElementById('register-link');

// Check if the user is already logged in
if (localStorage.getItem('isLoggedIn')) {
    showQuoteSection();
}

// Handle the login form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Simple login check (In a real-world scenario, you'd validate these against a database)
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'user' && password === 'password') {
        // Save login state in localStorage
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', username);
        
        showQuoteSection();
    } else {
        alert('Invalid credentials!');
    }
});

// Show the quote section
function showQuoteSection() {
    loginSection.style.display = 'none';
    quoteSection.style.display = 'block';
    
    // Display a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
}

// Handle the logout action
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    loginSection.style.display = 'block';
    quoteSection.style.display = 'none';
});

// Register link (just for demo, it doesn't do anything)
registerLink.addEventListener('click', () => {
    alert('Registration is not implemented in this demo.');
});
