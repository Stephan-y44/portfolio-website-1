
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        console.error("Theme toggle button not found.");
        return;
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        const icon = themeToggle.querySelector("i");

        if (icon) {
            const isDark = document.body.classList.contains("dark-theme");

            icon.classList.toggle("fa-moon", !isDark);
            icon.classList.toggle("fa-sun", isDark);
        }
    });
});
 
