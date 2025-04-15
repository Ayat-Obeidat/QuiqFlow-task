document.addEventListener("DOMContentLoaded", () => {
  const cardsWrapper = document.getElementById("cards-wrapper");
  const toggleThemeBtn = document.getElementById("toggle-theme");

  // Create cards using array instead of for loop
  const cards = Array.from({ length: 9 }, (_, i) => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = `Feature ${i + 1}`;
    return div;
  });

  cards.forEach((card) => cardsWrapper.appendChild(card));

  // Theme logic
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") document.body.classList.add("dark");

  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
    toggleThemeBtn.textContent = isDark ? "☀️" : "🌙";
  });
});
