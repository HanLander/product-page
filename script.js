function Submit(event) {
  event.preventDefault();
  alert("Your email address was submitted");
}

let form = document.querySelector("#email-form");
form.addEventListener("submit", Submit);

let scrollButton = document.querySelector(".scroll-button");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
