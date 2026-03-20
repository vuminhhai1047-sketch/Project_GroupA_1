const toggle = document.getElementById("toggle");
const body = document.body;
const main = document.getElementById("main");

function setTheme(theme) {
    if (theme === "dark") {
        body.style.backgroundColor = "#121212";
        body.style.color = "white";

        main.style.backgroundColor = "#1e1e1e";
        main.style.color = "white";

        toggle.textContent = "☀️";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";

        main.style.backgroundColor = "#F5F5FA";
        main.style.color = "black";

        toggle.textContent = "🌙";
    }

    localStorage.setItem("theme", theme);
}

function loadTheme() {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme("light");
    }
}

toggle.addEventListener("click", function () {
    let current = localStorage.getItem("theme");

    if (current === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
});

loadTheme();