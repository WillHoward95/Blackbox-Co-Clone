const toggleButton = document.getElementById('toggle-button')
const navBarLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
})