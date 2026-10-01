// =============================
// PAGE LOADER
// =============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 1000);

    }, 1200);

});

// =============================
// NAVIGATION
// =============================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// =============================
// SCROLL ANIMATION
// =============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});

// =============================
// MOUSE PARALLAX
// =============================

document.addEventListener("mousemove", function (event) {

    const hero = document.querySelector(".hero");

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    hero.style.backgroundPosition =
        `${50 + x}% ${50 + y}%`;

});

/* ========================================
   CERTIFICATE IMAGE VIEWER
   ======================================== */

function openCertificate(imagePath) {

    const modal = document.getElementById("certificateModal");
    const image = document.getElementById("certificateFullImage");

    image.src = imagePath;

    modal.style.display = "flex";
}


function closeCertificate() {

    const modal = document.getElementById("certificateModal");

    modal.style.display = "none";
}


/* Close when clicking outside the certificate */

document.getElementById("certificateModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeCertificate();
    }

});