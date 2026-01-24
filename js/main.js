document.addEventListener("DOMContentLoaded", function() {
    // Determine the base path - check if we're in categories folder
    const pathname = window.location.pathname;
    const isInCategories = pathname.includes('/categories/');
    const basePath = isInCategories ? '../' : '';

    // Load Navbar
    fetch(basePath + "components/navbar.html")
        .then(response => response.text())
        .then(data => {
            const navbar = document.getElementById("navbar-placeholder");
            if (navbar) {
                navbar.innerHTML = data;
            }
        })
        .catch(error => console.log("Navbar load error:", error));

    // Load Footer
    fetch(basePath + "components/footer.html")
        .then(response => response.text())
        .then(data => {
            const footer = document.getElementById("footer-placeholder");
            if (footer) {
                footer.innerHTML = data;
            }
        })
        .catch(error => console.log("Footer load error:", error));
});

