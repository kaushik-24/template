const leftContent = document.getElementById("left-content");
const rightSidebar = document.getElementById("right-side-bar");

const updateSidebarPosition = () => {
  const leftContentRect = leftContent.getBoundingClientRect();

  if (leftContentRect.bottom <= window.innerHeight) {
    rightSidebar.classList.add("relative");
  } else {
    rightSidebar.classList.remove("relative");
  }
};

window.addEventListener("scroll", updateSidebarPosition);
