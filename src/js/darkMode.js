let darkMode = false;

export function changeDarkMode() {
  darkMode = !darkMode;

  if (darkMode) {
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "black");
  } else {
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "#f7f7f7");
  }

  // Mise à jour du texte en fonction de darkMode
  const modeLabel = document.getElementById("dark-light-mode");
  modeLabel.innerHTML = darkMode ? "Light mode" : "Dark mode";
}
