// Button scroll to projects

const projectButton = document.querySelector("button");

projectButton.addEventListener("click", function () {

    document
        .getElementById("projects")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// Simple welcome message

console.log("Welcome to Rupa Lavanya's Portfolio");