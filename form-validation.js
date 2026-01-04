

console.log("Form validation script loaded");


// DOM references
const form = document.getElementById("contactForm");
const emailInput = document.getElementById("emailInput");

// Defensive checks
if (!form){
    console.error("Form validation error: contact form not found");
}

if (!emailInput){
    console.error("Form validation erorr: eail input not found");
}

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const emailValue = emailInput.value.trim();
  
    // Validate input
    if (emailValue === "") {
      console.warn("Form submission blocked: email is required");
      alert("Please enter your email.");
      return;
    }
  
    // Track successful form submission
    if (typeof trackEvent === "function") {
      trackEvent("form_submit", {
        email_domain: emailValue.split("@")[1] || "unknown"
      });
    } else {
      console.error("Tracking function not available");
    }
  
    console.log("Form submitted successfully");
  });