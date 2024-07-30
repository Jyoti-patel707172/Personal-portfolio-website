// Smooth Scrolling Effect
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
    
    // Example of adding an interactive feature: Smooth scroll for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// Animated Text Effect for Home Page
const element = document.getElementById('element');
const text = "Welcome to my portfolio!";
let index = 0;

function typeText() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

window.addEventListener('load', typeText);
