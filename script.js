const openBtn = document.getElementById("openTutorial");
const closeBtn = document.getElementById("closeTutorial");
const modal = document.getElementById("tutorialModal");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // trava scroll da página
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
});
