const toggle = document.querySelector(".theme-toggle");
const storageKey = "bo-site-theme";

function updateToggle(theme) {
  toggle.dataset.theme = theme;
  toggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  toggle.title = toggle.getAttribute("aria-label");
}

// The saved theme is applied by an inline script in <head>, before the first paint.
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
updateToggle(document.documentElement.dataset.theme || (systemTheme.matches ? "dark" : "light"));
toggle.hidden = false;
systemTheme.addEventListener("change", () => {
  if (!document.documentElement.dataset.theme) updateToggle(systemTheme.matches ? "dark" : "light");
});
toggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || (systemTheme.matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  updateToggle(next);
  try {
    localStorage.setItem(storageKey, next);
  } catch (error) {
    console.warn("Theme preference cannot be saved:", error);
    toggle.title = "Theme changed, but the preference could not be saved.";
  }
});

if (navigator.clipboard && window.isSecureContext) {
  document.querySelectorAll(".terminal").forEach((terminal) => {
    const copyButton = terminal.querySelector(".copy-button");
    const status = terminal.querySelector(".copy-status");
    copyButton.hidden = false;
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(terminal.querySelector("pre code").textContent);
        status.textContent = "Copied to clipboard.";
      } catch (error) {
        console.error("Could not copy commands:", error);
        status.textContent = "Could not copy. Select the commands to copy them.";
      }
    });
  });
}
