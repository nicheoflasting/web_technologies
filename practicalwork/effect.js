// Menu when being responsive

const menubutton = document.querySelector(".menu-button");
const menunav = document.querySelector(".nav_menu");

menubutton.addEventListener('click', () =>{
  menunav.classList.toggle('display-menu');
})


// Darkmode function

const body = document.querySelector('body');
const btn = document.querySelector('.btn');

// Function to store the dark mode state in localStorage
function store(value) {
  localStorage.setItem('darkmode', value);
}

// Function to load the dark mode state and apply it on page load
function load() {
  const darkmode = localStorage.getItem('darkmode');

  // If dark mode was never activated, initialize it to false
  if (!darkmode) {
    store(false);
  } else if (darkmode === 'true') {
    body.classList.add('darkmode'); // Activate dark mode
  }
}

load();

// Event listener for the button to toggle dark mode
btn.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  
  // Save the current state (true if dark mode is active, false if not)
  store(body.classList.contains('darkmode'));
});




// Link to defined part
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
