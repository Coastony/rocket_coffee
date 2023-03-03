const btnMobile = document.getElementById("btn-mobile");

// Toggle nav
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");

  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// toggleDark
const toggleDark = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggleDark.addEventListener("click", function () {
  this.classList.toggle("bi-moon");

  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";

    // Great Coffee
    GreatCoffee = document.getElementById("great_coffee");
    GreatCoffee.style.color = "black";
    GreatCoffee.style.transition = "2s";

    // nav style
    navStyle = document.getElementById("link1");
    navStyle.style.color = "black";
    navStyle.style.transition = "2s";

    navStyle = document.getElementById("link2");
    navStyle.style.color = "black";
    navStyle.style.transition = "2s";

    navStyle = document.getElementById("link3");
    navStyle.style.color = "black";
    navStyle.style.transition = "2s";

    navStyle = document.getElementById("link4");
    navStyle.style.color = "black";
    navStyle.style.transition = "2s";

    navStyle = document.getElementById("link5");
    navStyle.style.color = "black";
    navStyle.style.transition = "2s";

    // button
    buttonNav = document.getElementById("button");
    buttonNav.style.color = "black";

    // toggleDark
    toggleDark = document.getElementById("toggleDark");
    toggleDark.style.background = "black";

    // btnMobile
    btnMobile = document.getElementById("hamburger");
    btnMobile.style.color = "black";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";

    // Great Coffee
    GreatCoffee = document.getElementById("great_coffee");
    GreatCoffee.style.color = "white";
    GreatCoffee.style.transition = "2s";

    // nav style
    navStyle = document.getElementById("link1");
    navStyle.style.color = "white";
    navStyle.style.transition = "2s";

    navStyle = document.getElementById("link2");
    navStyle.style.color = "white";
    navStyle.style.transition = "2s";

    navStyle = document.getElementById("link3");
    navStyle.style.color = "white";
    navStyle.style.transition = "2s";

    navStyle = document.getElementById("link4");
    navStyle.style.color = "white";
    navStyle.style.transition = "2s";

    navStyle = document.getElementById("link5");
    navStyle.style.color = "white";
    navStyle.style.transition = "2s";

    // button
    buttonNav = document.getElementById("button");
    buttonNav.style.color = "white";

    // toggleDark
    toggleDark = document.getElementById("toggleDark");
    toggleDark.style.color = "white";
    
    // btnMobile
    btnMobile = document.getElementById("hamburger");
    btnMobile.style.color = "white";
  }
});

// Scroll Reveal

ScrollReveal({
  // reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.logo', { delay: 500, origin: 'left'});
ScrollReveal().reveal('#great_coffee', { delay: 500, origin: 'left'});
ScrollReveal().reveal('#great_code', { delay: 500, origin: 'right'});
ScrollReveal().reveal('#two_coffee', { delay: 500, origin: 'bottom'});
