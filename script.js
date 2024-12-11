const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'dark-theme' ? '☀️' : '🌙';
}

// Event Listener for Theme Toggle
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', ''); // Clear saved theme
    } else {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark-theme'); // Save theme to local storage
    }
});
