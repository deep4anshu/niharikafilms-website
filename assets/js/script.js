// Floating WhatsApp Button Script

// Create WhatsApp Button
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

// Add button to the page
document.body.appendChild(whatsappButton);
