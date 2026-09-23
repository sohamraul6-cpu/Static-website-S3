/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


/* =========================================
   CLOSE MENU AFTER CLICK
========================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("show");

        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   NAVBAR BACKGROUND
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;


    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(8,9,11,.97)";

    } else {

        navbar.style.background =
            "rgba(8,9,11,.82)";

    }

});


/* =========================================
   BOOKING FORM
========================================= */

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;

            const bike =
                document.getElementById("bike").value;

            const service =
                document.getElementById("service").value;


            const message =
                document.getElementById("formMessage");


            message.innerHTML =
                `✓ Thank you ${name}! Your ${bike} ${service} request has been received.`;


            bookingForm.reset();

        }
    );

}


/* =========================================
   DATE - PREVENT OLD DATES
========================================= */

const dateInput =
    document.getElementById("date");


if (dateInput) {

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.min = today;

}


/* =========================================
   IMAGE PARALLAX
========================================= */

const heroImage =
    document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

    if (!heroImage) return;


    const scrollPosition =
        window.scrollY;


    if (scrollPosition < 600) {

        heroImage.style.transform =
            `translateY(${scrollPosition * 0.03}px)`;

    }

});