// ==========================================
// PROJECT FILTER
// ==========================================

function filterProjects(category) {

    const projects = document.querySelectorAll(".interest-card");

    projects.forEach(function(project) {

        if (category === "all") {

            project.style.display = "block";

        } else if (project.classList.contains(category)) {

            project.style.display = "block";

        } else {

            project.style.display = "none";

        }

    });

}


// ==========================================
// CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Stop the form from actually submitting
        event.preventDefault();


        // Get form values
        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();


        // Get error message elements
        const nameError = document.getElementById("nameError");

        const emailError = document.getElementById("emailError");

        const messageError = document.getElementById("messageError");

        const formSuccess = document.getElementById("formSuccess");


        // Clear previous messages
        nameError.textContent = "";

        emailError.textContent = "";

        messageError.textContent = "";

        formSuccess.textContent = "";


        // Assume the form is valid
        let valid = true;


        // Email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        // ==========================================
        // NAME VALIDATION
        // ==========================================

        if (name === "") {

            nameError.textContent = "Please enter your name.";

            valid = false;

        }


        // ==========================================
        // EMAIL VALIDATION
        // ==========================================

        if (email === "") {

            emailError.textContent = "Please enter your email.";

            valid = false;

        } else if (!emailPattern.test(email)) {

            emailError.textContent = "Please enter a valid email address.";

            valid = false;

        }


        // ==========================================
        // MESSAGE VALIDATION
        // ==========================================

        if (message === "") {

            messageError.textContent = "Please enter a message.";

            valid = false;

        }


        // ==========================================
        // SUCCESS
        // ==========================================

        if (valid) {

            formSuccess.textContent =
                "Message sent successfully! Thank you for contacting me.";

            contactForm.reset();

        }

    });

}