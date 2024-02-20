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
