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
  var typingInterval = setInterval(function () {
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

// mobile version
var phrases = [
  "-Web Developer",
  "-Frontend Developer",
  "-Digital Marketer"
];

var currentPhraseIndex = 0;

function changePhrase() {
  var teraBox = document.getElementById("teraBox");
  var currentPhrase = phrases[currentPhraseIndex];

  teraBox.textContent = "";

  var letterIndex = 0;
  var typingInterval = setInterval(function () {
    teraBox.textContent += currentPhrase[letterIndex];
    letterIndex++;

    if (letterIndex >= currentPhrase.length) {
      clearInterval(typingInterval);
    }
  }, 100);

  currentPhraseIndex++;
  if (currentPhraseIndex >= phrases.length) {
    currentPhraseIndex = 0;
  }
}

changePhrase();

setInterval(changePhrase, 5000);


// mobile version end












// Here I'm going to create a scrollto funtion which will scroll to a perticular div
document.addEventListener("DOMContentLoaded", () => {
  var aboutLink = document.getElementById("aboutLink");
  var mySection = document.getElementById("fade-in-section2");
  var myProjectsBtn = document.getElementById("projectList");
  var myProjects = document.getElementById("myProjects");
  var colY = document.getElementById("nav1");
  // var whatIsHeading = document.getElementById("headingProjects");
  // var isActive = false;
  const navLinks = document.querySelectorAll(".nav-link");
    function setActiveLink(clickedLink) {
        navLinks.forEach(link => {
            link.classList.toggle("active-a", link === clickedLink);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            setActiveLink(link);
        });
    });


  colY.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior
    });
  });

  myProjectsBtn.addEventListener("click", () => {
    myProjects.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  aboutLink.addEventListener("click", () => {

    mySection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });
});


function exNavbar(){
  var positionCurrent = window.scrollY;

  var myNavbar = {
    top: 0,
    height: document.getElementById("fade-in-section").clientHeight
  }
  var myAboutSection = {
    top: document.getElementById("fade-in-section2").offsetTop,
    height: document.getElementById("fade-in-section2").clientHeight
  }
  var myProjectSection = {
    top: document.getElementById("myProjects").offsetTop,
    height: document.getElementById("myProjects").clientHeight
  }


  var buttonOfFirstSection = document.getElementById("nav1");
  var buttonOfMySection = document.getElementById("aboutLink");
  var buttonOfProjectList = document.getElementById("projectList");


  if (positionCurrent >= myNavbar.top && positionCurrent < (myNavbar.top + myNavbar.height)) {
    buttonOfFirstSection.classList.add("active-a");
    buttonOfMySection.classList.remove("active-a");
    buttonOfProjectList.classList.remove("active-a");
  } 
  else if (positionCurrent >= myAboutSection.top && positionCurrent < (myAboutSection.top + myAboutSection.height)) {
    buttonOfFirstSection.classList.remove("active-a");
    buttonOfMySection.classList.add("active-a");
    buttonOfProjectList.classList.remove("active-a");
  }
 else if(positionCurrent >= myProjectSection.top && positionCurrent < (myAboutSection.top + myProjectSection.height)){
    buttonOfFirstSection.classList.remove("active-a");
    buttonOfMySection.classList.remove("active-a");
    buttonOfProjectList.classList.add("active-a");
  }
  
  

}
window.addEventListener("scroll", exNavbar);
exNavbar();































