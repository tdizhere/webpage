//silder text
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

window.onload = function() {
  setInterval(function() { 
    plusSlides(1);
  }, 4000);
};




//nav bar 
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const scrollY = window.scrollY;

  if (scrollY > 20) {
      navbar.classList.add('fixed');
  } else {
      navbar.classList.remove('fixed');
  }
});

// JavaScript for toggling the menu
// Function to toggle the mobile menu
//nav bar with search bar 








/*nav-links  */
// Open and Close Navbar Menu


// Add JavaScript to hide the navigation links initially when the screen width is less than 900px


// Call checkWidth when the page loads and when the window is resized


/*Essential card */
function prev() {
  const container = document.getElementById('sliderrs-container');
  container.scrollLeft -= 270;
}

function next() {
  const container = document.getElementById('sliderrs-container');
  container.scrollLeft += 270;
}

document.querySelectorAll(".slides img").forEach(function(img) {
  img.addEventListener("click", function() {
      this.classList.toggle('zoomed');
      document.querySelector(".overlay").classList.toggle('active');
  });
});
/*mail bar */

function clearEmailInputAndSendData() {
  const emailInput = document.querySelector(".email-input");
  const email = emailInput.value.trim(); // Get the trimmed email value

  if (email) {
      // Perform an AJAX or fetch request to send data to Shopify's server
      // Replace the placeholders with actual Shopify API and authentication details
      // Example using fetch:
      /*
      fetch("https://your-shopify-api-url.com", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              // Add any required headers or authentication here
          },
          body: JSON.stringify({
              email: email,
              // Add any other data you want to send to Shopify
          }),
      })
      .then((response) => {
          if (response.ok) {
              // Request was successful, you can handle the response here
              console.log("Data sent successfully.");
          } else {
              // Request failed, handle errors here
              console.error("Failed to send data.");
          }
      })
      .catch((error) => {
          // Handle network errors here
          console.error("Network error:", error);
      });
      */

      // Clear the email input field after sending data
      emailInput.value = "";
  } else {
      // If email is not provided, show a required message
      alert("Email is required.");
  }
}