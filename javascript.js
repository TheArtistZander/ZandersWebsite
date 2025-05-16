// Toggle Collapsible Navigation Menu for Smaller Screens
const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuItems.classList.contains('show');
    menuItems.classList.toggle('show', !isExpanded); // Toggle 'show' class for display
});

// Ensure Navbar Visibility on Resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuItems.classList.add('show'); // Show menu on larger screens
    } else {
        menuItems.classList.remove('show'); // Hide menu on smaller screens
    }
});

// Generate Starry Background
function generateStars() {
    const starCount = 200; // Adjust star count as needed
    const starContainer = document.createElement('div');
    starContainer.style.position = 'fixed';
    starContainer.style.top = '0';
    starContainer.style.left = '0';
    starContainer.style.width = '100%';
    starContainer.style.height = '100%';
    starContainer.style.pointerEvents = 'none'; // Prevent interaction with stars
    starContainer.style.zIndex = '-1'; // Place behind all other elements
    document.body.appendChild(starContainer);

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.8)';
        star.style.animation = `twinkle ${Math.random() * 5 + 2}s infinite`; // Add twinkling effect
        starContainer.appendChild(star);
    }
}

// Handle Hero Section Scrolling (Fades Video as User Scrolls)
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        heroVideo.style.opacity = Math.max(0, 1 - scrollPosition / 500); // Fade effect as user scrolls
    });
}

// Patreon Button Interactivity
const patreonButton = document.getElementById('patreonButton');
if (patreonButton) {
    patreonButton.addEventListener('click', () => {
        alert('Thank you for supporting! Redirecting to Patreon...');
        window.open('https://www.patreon.com/lastdragondefense', '_blank');
    });
}

// Newsletter Subscription Form
const subscribeForm = document.getElementById('subscribeForm');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const email = subscribeForm.email.value.trim();
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            subscribeForm.reset(); // Clear the form
        } else {
            alert('Please enter a valid email address!');
        }
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
        if (name && email && message) {
            alert(`Thank you for reaching out, ${name}! I'll get back to you shortly.`);
            contactForm.reset(); // Clear the form
        } else {
            alert('Please complete all fields before submitting!');
        }
    });
}

// Theme Toggle Functionality
const toggleThemeButton = document.getElementById('toggleTheme');
if (toggleThemeButton) {
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLightTheme = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isLightTheme ? 'light' : 'dark'); // Save preference

        // Update button text based on theme
        toggleThemeButton.textContent = isLightTheme ? 'Switch to Dark Theme' : 'Switch to Light Theme';
    });
}

// Restore Theme Preference on Page Load
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    generateStars(); // Create the starry background
    initializeDynamicGreeting(); // Initialize greeting text based on time

    // Update button text based on saved theme
    if (toggleThemeButton) {
        const isLightTheme = document.body.classList.contains('light-theme');
        toggleThemeButton.textContent = isLightTheme ? 'Switch to Dark Theme' : 'Switch to Light Theme';
    }
};

// Dynamic Greeting Based on Time
function initializeDynamicGreeting() {
    const greetingElement = document.createElement('h2');
    greetingElement.id = 'greeting';
    const hour = new Date().getHours();
    if (hour < 12) {
        greetingElement.textContent = 'Good morning, welcome to Artist Zander\'s world!';
    } else if (hour < 18) {
        greetingElement.textContent = 'Good afternoon, welcome to Artist Zander\'s world!';
    } else {
        greetingElement.textContent = 'Good evening, welcome to Artist Zander\'s world!';
    }
    document.body.prepend(greetingElement);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetElement = document.getElementById(anchor.getAttribute('href').substring(1));
        targetElement?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Floating Action Button (Scroll to Top)
const fab = document.createElement('div');
fab.className = 'fab';
fab.textContent = '↑';
document.body.appendChild(fab);

fab.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Select the gallery container and images
const images = document.querySelectorAll('.gallery-item img');
let currentImageIndex = 0;

// Function to show the next image
function showNextImage() {
    // Hide all images
    images.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
    // Update the current image index
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Initial setup - show the first image
showNextImage();

// Set up an interval to change the image every 3 seconds
setInterval(showNextImage, 3000);

// Select all timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
    });
});

// Add CSS for expanded state
const style = document.createElement('style');
style.textContent = `
.timeline-item.expanded {
    background-color: #e9ecef;
    padding: 15px;
    border-radius: 5px;
}
`;
document.head.appendChild(style);

