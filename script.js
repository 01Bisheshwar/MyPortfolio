document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const footer = document.getElementById("footer");
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    });
});
