const toggle_nav = document.getElementById("nav_mobile");

function toggleMenu() {
  toggle_nav.classList.toggle("hidden");
}

// Scroll-based movement setup
function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    console.log(element, isIntersecting);

    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    // if isLTR (left to right), use positive, else negative
    element.style.transform = `translateX(${isLTR ? translateX : -translateX}px)`;
  }
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
