const toggle = document.getElementById('_3rd-toggle-btn');
const checkbox = toggle.querySelector('input[type="checkbox"]');
const toggleText = toggle.querySelector('.toggle-text');

function handleToggle() {
  toggleText.classList.toggle('active');
}

checkbox.addEventListener('change', handleToggle);
