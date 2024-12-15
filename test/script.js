// Select the left content and the right sidebar
const leftContent = document.getElementById("leftContent");
const rightSidebar = document.getElementById("rightSidebar");

// Get the bounding rectangle of the left content
const updateSidebarPosition = () => {
  const leftContentRect = leftContent.getBoundingClientRect();

  if (leftContentRect.bottom <= window.innerHeight) {
    // If the left content finishes, make the sidebar relative
    rightSidebar.classList.add("relative");
  } else {
    // If the left content is still scrolling, make the sidebar fixed
    rightSidebar.classList.remove("relative");
  }
};

// Listen for the scroll event
window.addEventListener("scroll", updateSidebarPosition);
