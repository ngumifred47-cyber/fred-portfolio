// ==========================================
// PORTFOLIO INTERACTIONS
// ==========================================

// Project filters on projects.html.
function filterProjects(category) {
    const projects = document.querySelectorAll(".projects-section .interest-card");

    projects.forEach(function (project) {
        const matches = category === "all" || project.classList.contains(category);
        project.hidden = !matches;
    });
}

// ==========================================
// LIVE GITHUB REPOSITORIES (NO API KEY)
// ==========================================

async function loadGitHubRepositories() {
    const repositoryContainer = document.getElementById("githubRepositories");
    const status = document.getElementById("githubStatus");

    // This script also runs on index.html, where these elements do not exist.
    if (!repositoryContainer || !status) return;

    const username = "ngumifred47-cyber";
    const endpoint = `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`;

    status.textContent = "Loading GitHub repositories...";
    repositoryContainer.replaceChildren();

    try {
        const response = await fetch(endpoint, {
            headers: { Accept: "application/vnd.github+json" }
        });

        if (!response.ok) {
            throw new Error(`GitHub API returned status ${response.status}`);
        }

        const repositories = await response.json();

        if (!Array.isArray(repositories) || repositories.length === 0) {
            status.textContent = "No public repositories were found yet.";
            return;
        }

        repositories.forEach(function (repository) {
            const card = document.createElement("article");
            card.className = "repository-card";

            const title = document.createElement("h3");
            title.textContent = repository.name || "Untitled repository";

            const description = document.createElement("p");
            description.className = "repository-description";
            description.textContent = repository.description || "No description has been added to this repository yet.";

            const metadata = document.createElement("p");
            metadata.className = "repository-meta";
            const language = repository.language || "Language not specified";
            metadata.textContent = `${language} · ★ ${repository.stargazers_count || 0}`;

            const link = document.createElement("a");
            link.className = "project-link";
            link.href = repository.html_url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "View on GitHub";

            card.append(title, description, metadata, link);
            repositoryContainer.appendChild(card);
        });

        status.textContent = `Showing ${repositories.length} public repositories, sorted by recently updated.`;
    } catch (error) {
        console.error("Unable to load GitHub repositories:", error);
        status.textContent = "GitHub repositories could not be loaded right now. Check your connection and try again.";

        const retryButton = document.createElement("button");
        retryButton.type = "button";
        retryButton.className = "retry-button";
        retryButton.textContent = "Try again";
        retryButton.addEventListener("click", loadGitHubRepositories);
        repositoryContainer.appendChild(retryButton);
    }
}

document.addEventListener("DOMContentLoaded", loadGitHubRepositories);

// ==========================================
// CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const formSuccess = document.getElementById("formSuccess");

        // Use textContent for all user-facing dynamic messages.
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";

        let valid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "") {
            nameError.textContent = "Please enter your name.";
            valid = false;
        }

        if (email === "") {
            emailError.textContent = "Please enter your email.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        if (message === "") {
            messageError.textContent = "Please enter a message.";
            valid = false;
        }

        if (valid) {
            formSuccess.textContent =
                "Your form passed validation. This demo form does not send messages to a server yet.";
            contactForm.reset();
        }
    });
}
