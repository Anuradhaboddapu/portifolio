// let datModeIcon=document.querySelector('#darkMode-icon');

// darkModeIcon.onclick=() => {
//    darkModeIcon.classList.toggle('bx-sun');
// }

// Get the dark mode icon element
const darkModeIcon = document.getElementById('darkMode-icon');

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

   
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
    }

   
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}


darkModeIcon.addEventListener('click', toggleDarkMode);