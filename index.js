// Selectors
const menuBtn = document.querySelector(".mobile-menu-btn");
const closeBtn = document.querySelector("#closeBtn");
const sidebar = document.querySelector("#mobileSidebar");
const overlay = document.querySelector("#mobileOverlay");

// Function to close the sidebar menu and remove the overlay
function closeMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

// Event listeners for opening and closing the sidebar menu
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
});

// Close the sidebar when clicking outside of it or on the close button
[overlay, closeBtn].forEach((el) => {
  if (el) el.addEventListener("click", closeMenu);
});
