
    // Toggle dark theme
    const themeToggleBtn = document.querySelector('.bx-moon'); // Assuming this is your theme toggle icon
    const body = document.querySelector('body');

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme'); // Toggles the dark theme class on body
        themeToggleBtn.classList.toggle('spin'); // Optional: Adds a spin animation when clicked
    });



