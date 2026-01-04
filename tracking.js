

console.log("Tracking script loaded");

// Simulated in-memory event log
const eventLog = [];

// Utility function to generate a fake user ID
function getUserId() {
  return "user_" + Math.floor(Math.random() * 1000);
}

// Core tracking function
function trackEvent(eventName, metadata = {}) {
  const event = {
    event_name: eventName,
    user_id: getUserId(),
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
    metadata: metadata
  };

  eventLog.push(event);
  console.log("Event tracked:", event);
}

// DOM element reference
const signupButton = document.getElementById("signupBtn");

// Defensive check 
if (!signupButton) {
  console.error("Tracking error: signup button not found in DOM");
} else {
  signupButton.addEventListener("click", function () {
    trackEvent("signup_click", {
      button_text: signupButton.innerText
    });
  });
}

// Expose eventLog for debugging in console
window.__eventLog = eventLog;
