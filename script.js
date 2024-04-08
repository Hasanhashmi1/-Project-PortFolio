// Array of texts to display
var texts = [
  "-Web Developer",
  "-Frontend Developer",
  "-Digital Marketer"
];

// Index to track current text
var currentIndex = 0;

// Function to change text automatically with typing effect
function changeText() {
  var changingText = document.getElementById("changing-text");
  var currentText = texts[currentIndex];
  
  // Reset text content
  changingText.textContent = "";
  
  // Typing effect animation
  var i = 0;
  var typingInterval = setInterval(function() {
    // Append one letter to the text content
    changingText.textContent += currentText[i];
    i++;
    // Check if all letters are typed
    if (i >= currentText.length) {
      clearInterval(typingInterval);
    }
  }, 100); // Adjust typing speed as needed
  
  // Increment index and reset if exceeding array length
  currentIndex++;
  if (currentIndex >= texts.length) {
    currentIndex = 0;
  }
}

// Initial call to change text
changeText();

// Set interval to call changeText every 5 seconds (adjust as needed)
setInterval(changeText, 5000);







var colY = document.getElementById("scrollToTopButton");

colY.addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior
  });
});

