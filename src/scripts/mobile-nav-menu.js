document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const nav = document.getElementById("mobile-nav-bar");
  const MD_BREAKPOINT = 768; // Tailwind's default 'md' breakpoint

  if (!btn || !menu || !nav) return;

  // --- Function to open the menu ---
  function openMenu() {
    // Apply 'open' class for icon animation
    btn?.classList.add("open");

    // Open menu visually
    menu?.classList.remove("max-h-0", "opacity-0", "pointer-events-none");
    menu?.classList.add("max-h-[50svh]", "opacity-100", "pointer-events-auto");
    nav?.classList.add("bg-gray-100");

    // Update ARIA attributes
    btn?.setAttribute("aria-expanded", "true");
    menu?.setAttribute("aria-hidden", "false");
  }

  // --- Function to close the menu ---
  function closeMenu() {
    if (btn?.getAttribute("aria-expanded") === "true") {
      // Revert icon to hamburger
      btn.classList.remove("open");

      // Close menu visually
      menu?.classList.add("max-h-0", "opacity-0", "pointer-events-none");
      menu?.classList.remove(
        "max-h-[50svh]",
        "opacity-100",
        "pointer-events-auto"
      );

      nav?.classList.remove("bg-gray-100");
      // Update ARIA attributes
      btn.setAttribute("aria-expanded", "false");
      menu?.setAttribute("aria-hidden", "true");
    }
  }

  // --- Resize Event Listener: Close menu on desktop transition ---
  window.addEventListener("resize", () => {
    if (window.innerWidth >= MD_BREAKPOINT) {
      closeMenu();
    }
  });

  // --- Click Event Listener: Toggle logic is now concise ---
  btn.addEventListener("click", function () {
    const isExpanded = btn.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      // If currently open, close it
      closeMenu();
    } else {
      // If currently closed, open it
      openMenu();
    }
  });
});
