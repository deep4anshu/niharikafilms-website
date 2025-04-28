// Floating WhatsApp Button Script
(function() {
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/9779827521337'; 
    whatsappButton.target = '_blank';
    whatsappButton.innerHTML = '💬';
    whatsappButton.style.position = 'fixed';
    whatsappButton.style.bottom = '20px';
    whatsappButton.style.right = '20px';
    whatsappButton.style.backgroundColor = '#25D366';
    whatsappButton.style.color = 'white';
    whatsappButton.style.fontSize = '30px';
    whatsappButton.style.padding = '10px 15px';
    whatsappButton.style.borderRadius = '50%';
    whatsappButton.style.textDecoration = 'none';
    whatsappButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    whatsappButton.style.zIndex = '1000';
    document.body.appendChild(whatsappButton);
})();

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Auto-slide Members (infinite smooth)
const wrapper = document.querySelector('.member-cards-wrapper');
const cards = document.querySelectorAll('.member-card');
let index = 0;
const cardWidth = 300; // Width of one card

setInterval(() => {
    index++;
    wrapper.style.transition = 'transform 0.5s ease';
    wrapper.style.transform = `translateX(-${index * cardWidth}px)`;

    if (index === cards.length - 1) {
        setTimeout(() => {
            wrapper.style.transition = 'none'; // Instantly reset without animation
            wrapper.style.transform = 'translateX(0px)';
            index = 0;
        }, 500); // after animation ends
    }
}, 3000);

// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 50; // smaller = faster
        
        if (count < target) {
            counter.innerText = Math.ceil(count + 1);
            setTimeout(updateCount, speed);
        } else {
            counter.innerText = target;
        }
    };

    window.addEventListener('scroll', function() {
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            updateCount();
        }
    });
});
