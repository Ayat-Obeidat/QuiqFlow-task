// Floating Action Button Interaction
const fabMain = document.getElementById("fabMain");
const fabOptions = document.getElementById("fabOptions");

fabMain.addEventListener("click", () => {
  fabOptions.classList.toggle("show");

  // Rotate the plus sign to make an X
  if (fabOptions.classList.contains("show")) {
    fabMain.textContent = "×";
    fabMain.style.transform = "rotate(180deg)";
  } else {
    fabMain.textContent = "+";
    fabMain.style.transform = "rotate(0)";
  }
});

// Close FAB options when clicking outside
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".fab-container") &&
    fabOptions.classList.contains("show")
  ) {
    fabOptions.classList.remove("show");
    fabMain.textContent = "+";
    fabMain.style.transform = "rotate(0)";
  }
});

// Add functionality to FAB options
document.querySelectorAll(".fab-option").forEach((option) => {
  option.addEventListener("click", () => {
    alert(`Clicked ${option.getAttribute("title")}`);
    fabOptions.classList.remove("show");
    fabMain.textContent = "+";
    fabMain.style.transform = "rotate(0)";
  });
});
