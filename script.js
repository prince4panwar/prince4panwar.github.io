// const scroll = new LocomotiveScroll({
//   el: document.querySelector("main"),
//   smooth: true,
// });

/*===== MENU SHOW =====*/
// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);

//   if (toggle && nav) {
//     toggle.addEventListener("click", () => {
//       nav.classList.toggle("show");
//     });
//   }
// };
// showMenu("nav-toggle", "nav-menu");

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    menuIcon = document.querySelector(".nav__toggle i");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");

      // Toggle between hamburger and close icons
      if (menuIcon.classList.contains("bx-menu")) {
        menuIcon.classList.remove("bx-menu");
        menuIcon.classList.add("bx-menu-alt-right");
      } else {
        menuIcon.classList.remove("bx-menu-alt-right");
        menuIcon.classList.add("bx-menu");
      }
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  menuIcon = document.querySelector(".nav__toggle i");
  
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
  if (menuIcon.classList.contains("bx-menu-alt-right")) {
    menuIcon.classList.remove("bx-menu-alt-right");
    menuIcon.classList.add("bx-menu");
  }
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);


/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//   origin: "top",
//   distance: "60px",
//   duration: 2000,
//   delay: 200,
// });

// sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
// sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
//   delay: 400,
// });
// sr.reveal(".home__social-icon", { interval: 200 });
// sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });


// function toggleDarkMode() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }



/*===== LIGHT AND DARK MODE =====*/
// Add this JavaScript code to your existing script.js file or within <script> tags in your HTML file
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
    // bulbIcon.style.color = "#f1c40f"; // Yellow color for moon icon
    bulbIcon.style.color = "#f1c40f"; // Yellow color for moon icon
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
