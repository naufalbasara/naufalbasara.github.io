let theme = localStorage.getItem("theme");
const lightButton = document.querySelector("#light-button");

const setDark = () => {
  body.classList.remove("bg-light");
  body.classList.remove("text-dark");
  navbar.classList.remove("bg-light");
  for (link of navLink) {
    link.classList.remove("text-dark");
  }
  navbar.classList.remove("text-dark");

  body.classList.add("bg-dark");
  body.classList.add("text-light");
  navbar.classList.add("bg-dark");
  for (link of navLink) {
    link.classList.add("text-light");
  }
  navbar.classList.add("text-light");

  localStorage.setItem("theme", "dark");
};

const disableDark = () => {
  body.classList.remove("bg-dark");
  body.classList.remove("text-light");
  navbar.classList.remove("bg-dark");
  for (link of navLink) {
    link.classList.remove("text-light");
  }
  navbar.classList.remove("text-light");

  body.classList.add("bg-light");
  body.classList.add("text-dark");
  navbar.classList.add("bg-light");
  for (link of navLink) {
    link.classList.add("text-dark");
  }
  navbar.classList.add("text-dark");

  localStorage.setItem("theme", "light");
};
// toggle activation
const body = document.querySelector("#html-body");
const navbar = document.querySelector("#navbar");
const navLink = document.querySelectorAll(".nav-link");
if (theme == "dark") {
  setDark();
} else if (theme === "light") {
  disableDark();
}

lightButton.addEventListener("click", function () {
  let theme = localStorage.getItem("theme");
  if (theme == "light") {
    setDark();
  } else {
    disableDark();
  }
});
