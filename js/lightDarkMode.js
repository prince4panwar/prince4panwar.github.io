/*===== LIGHT AND DARK MODE =====*/

const bulbIcon = document.querySelector(".bulb-icon i");
const homeSocialIcon = document.querySelectorAll(".home__social-icon");
const skill = document.querySelectorAll(".skill-image");
const about = document.querySelector(".about__img");
const work = document.querySelectorAll(".work__img");
const buttons = document.querySelectorAll(".button");

// const input = document.querySelectorAll("input");

function toggleDarkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");

  // Toggle between sun and moon icons
  if (bulbIcon.classList.contains("bx-moon")) {
    bulbIcon.classList.remove("bx-moon");
    bulbIcon.classList.add("bx-sun");
  } else {
    bulbIcon.classList.remove("bx-sun");
    bulbIcon.classList.add("bx-moon");
  }

  // Change icon color based on dark mode
  if (element.classList.contains("dark-mode")) {
    // bulbIcon.style.color = "#f1c40f"; // Yellow color for sun icon
    bulbIcon.style.color = "#f1c40f"; // Yellow color for sun icon
    homeSocialIcon.forEach((n) => (n.style.color = "white"));

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "var(--first-color)";
      });
      button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "var(--tshirt-color)";
      });
    });

    skill.forEach((n) => (n.style.border = "1px solid white"));
    about.style.border = "1px solid white";
    about.style.borderRadius = "5px";
    work.forEach((n) => (n.style.border = "1px solid white"));

    homeSocialIcon.forEach((icon) => {
      // Add mouseenter event listener
      icon.addEventListener("mouseenter", () => {
        icon.style.color = "var(--first-color)";
      });
      // Add mouseleave event listener
      icon.addEventListener("mouseleave", () => {
        icon.style.color = "white";
      });
    });

    // input.forEach((n) => (n.style.border = "1px solid blue"));
    // skill.style.border = "2px solid white";
  } else {
    // bulbIcon.style.color = "#ffeb3b"; // Yellow color for sun icon
    bulbIcon.style.color = "#000000"; // Yellow color for sun icon
    homeSocialIcon.forEach((n) => (n.style.color = "var(--tshirt-color)"));
    // #edeff6

    homeSocialIcon.forEach((icon) => {
      // Add mouseenter event listener
      icon.addEventListener("mouseenter", () => {
        icon.style.color = "var(--first-color)";
      });
      // Add mouseleave event listener
      icon.addEventListener("mouseleave", () => {
        icon.style.color = "var(--tshirt-color)";
      });
    });
  }
}

// Add event listener to the bulb icon
bulbIcon.addEventListener("click", toggleDarkMode);
