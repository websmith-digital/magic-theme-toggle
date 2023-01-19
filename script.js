window.onload = function () {
    if (
        /* This condition checks whether the user has set a site preference for dark mode OR a OS-level preference for Dark Mode AND no site preference */
        localStorage.getItem("color-mode") === "dark" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches &&
            !localStorage.getItem("color-mode"))
    ) {
        // if true, set the site to Dark Mode
        setDarkTheme();
    } else setLightTheme();

    const toggleButtons = document.querySelectorAll('[ws-themetoggle="true"]');
    toggleButtons.forEach(btn => btn.addEventListener("click", toggleTheme));

    function toggleTheme() {
        const currentTheme =
            document.documentElement.getAttribute("color-mode") || "dark";

        if (currentTheme === "dark") setLightTheme();
        else setDarkTheme();
    }

    function setLightTheme() {
        document.documentElement.setAttribute("color-mode", "light");
        localStorage.setItem("color-mode", "light");
    }

    function setDarkTheme() {
        document.documentElement.setAttribute("color-mode", "dark");
        localStorage.setItem("color-mode", "dark");
    }
};
