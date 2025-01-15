// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Display a dynamic welcome message based on the time of day
  window.onload = function() {
    let greeting = '';
    const currentHour = new Date().getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
  
    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('welcome-message');
    welcomeMessage.innerHTML = `<h2>${greeting}, Welcome to our AI Training Platform!</h2>`;
    document.body.insertBefore(welcomeMessage, document.body.firstChild);
  
    setTimeout(() => {
      welcomeMessage.style.display = 'none';
    }, 5000); // Hide the welcome message after 5 seconds
  };
  
  // Example of a button that triggers a pop-up alert
  const actionButton = document.querySelector('.action-btn');
  if (actionButton) {
    actionButton.addEventListener('click', () => {
      alert('You clicked the "Explore Fine-Tuning" button!');
    });
  }
  
  // Optional: Detect user interaction and log the action to the console
  document.addEventListener('click', function(event) {
    console.log(`Clicked element: ${event.target.tagName}`);
  });
  