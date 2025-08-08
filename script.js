document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      status.style.color = "green";
      status.textContent = `Thank you, ${name}! Your message has been received.`;
      form.reset();
    } else {
      status.style.color = "red";
      status.textContent = "Please fill all fields before submitting.";
    }
  });
});
