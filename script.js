const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', function() {

    navMenu.classList.toggle('open');
});

const messageField = document.getElementById('message-field');
const charCount = document.getElementById('char-count');

messageField.addEventListener('input', function() {
    charCount.textContent = messageField.value.length;
});