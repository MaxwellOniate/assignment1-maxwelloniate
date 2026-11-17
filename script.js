const themeToggle = document.getElementById('theme-toggle');

// Check for a saved theme when the page loads
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = 'Day Mode';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Day Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = 'Night Mode';
    localStorage.setItem('theme', 'light');
  }
});
