// Collapsible Section Toggle
const collapsibleBtn = document.querySelector('.collapsible-btn');
const collapsibleContent = document.querySelector('.collapsible-content');

collapsibleBtn.addEventListener('click', function () {
    if (collapsibleContent.style.display === "none" || collapsibleContent.style.display === "") {
        collapsibleContent.style.display = "block";
    } else {
        collapsibleContent.style.display = "none";
    }
});

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
