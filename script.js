document.addEventListener("DOMContentLoaded", function () {
    console.log("Strona załadowana!");

    let links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});