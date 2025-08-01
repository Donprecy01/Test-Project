const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbar-menu");

hamburger.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});




<script>
  function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const toggle = element.querySelector('.toggle');

    // Toggle answer visibility using class for better styling control
    answer.classList.toggle('visible');

    // Toggle the + / − sign
    if (answer.classList.contains('visible')) {
      toggle.textContent = "−";
    } else {
      toggle.textContent = "+";
    }
  }
</script>