document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
    
    const style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background-color: #222;
            color: #fff;
        }
        .dark-mode header {
            background: #111;
        }
        .dark-mode section {
            background: #333;
            color: #fff;
        }
    `;
    document.head.appendChild(style);
});

