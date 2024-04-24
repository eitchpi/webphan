// Toggle Dark & Light Themes
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeBtn = document.querySelector(".theme-icon");
    const lightIcon = themeBtn.querySelector(".nav_light_icon");
    const darkIcon = themeBtn.querySelector(".nav_dark_icon");

    // Function to toggle theme and switch icons
    function toggleTheme() {
        if (body.dataset.theme === "light") {
            body.dataset.theme = "dark";
            darkIcon.classList.add("active");
            lightIcon.classList.remove("active");
        } else {
            body.dataset.theme = "light";
            lightIcon.classList.add("active");
            darkIcon.classList.remove("active");
        }
        
        // Update gradient based on the current theme
        updateGradient(body.dataset.theme);
        
        // Store the selected theme in session storage
        sessionStorage.setItem("theme", body.dataset.theme);
    }

    // Function to update the gradient based on the theme for all SVGs
    function updateGradient(theme) {
        const stopsList = document.querySelectorAll("svg stop");
        stopsList.forEach(stop => {
            if (theme === "dark") {
                if (stop.id === "lightStop1") {
                    stop.setAttribute("stop-color", "black");
                } else if (stop.id === "lightStop2") {
                    stop.setAttribute("stop-color", "#151517");
                }
            } else {
                if (stop.id === "lightStop1") {
                    stop.setAttribute("stop-color", "white");
                } else if (stop.id === "lightStop2") {
                    stop.setAttribute("stop-color", "#F2F4F8");
                }
            }
        });
    }

    // Check system preference
    function checkSystemPreference() {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        body.dataset.theme = prefersDark ? "dark" : "light";
        if (prefersDark) {
            lightIcon.classList.remove("active");
            darkIcon.classList.add("active");
        } else {
            darkIcon.classList.remove("active");
            lightIcon.classList.add("active");
        }
        
        // Update gradient based on the system preference
        updateGradient(body.dataset.theme);
        
        // Store the selected theme in session storage
        sessionStorage.setItem("theme", body.dataset.theme);
    }
    
    // Initial check of system preference or retrieve theme from session storage
    const storedTheme = sessionStorage.getItem("theme");
    if (storedTheme) {
        body.dataset.theme = storedTheme;
        updateGradient(storedTheme);
    } else {
        checkSystemPreference();
    }

    // Toggle theme and switch icons when button is clicked
    themeBtn.addEventListener("click", toggleTheme);

    // Listen for changes in system color scheme preference
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (event) {
        checkSystemPreference();
    });
});
