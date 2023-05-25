document.addEventListener('DOMContentLoaded', function() {
    // Add a delay to simulate loading time
    setTimeout(function() {
      // Hide the loading page after the delay
      var loadingPage = document.getElementById('loading-page');
      loadingPage.style.display = 'none';
    }, 3000); // Adjust the delay time (in milliseconds) as needed
 
    // Get references to the elements you want to manipulate
    var button = document.querySelector('button');
    var caseStudies = document.querySelectorAll('.case-study');
 
    // Add a click event listener to the button
    button.addEventListener('click', function() {
      // Change the text of the button when clicked
      button.textContent = "Clicked!";
    });
 
    // Add a mouseover event listener to the case studies
    caseStudies.forEach(function(caseStudy) {
      caseStudy.addEventListener('mouseover', function() {
        // Add a red background color when the mouse is over a case study
        this.style.backgroundColor = '#f5f5f5';
      });
 
      caseStudy.addEventListener('mouseout', function() {
        // Remove the background color when the mouse moves away
        this.style.backgroundColor = 'transparent';
      });
    });
  });
 
  document.addEventListener('DOMContentLoaded', function() {
    var leafImage = document.getElementById('leaf-image');
    var gifContainer = document.getElementById('gif-container');
    var isVisible = false;
 
    leafImage.addEventListener('click', function() {
      if (isVisible) {
        gifContainer.style.display = 'none';
        isVisible = false;
      } else {
        gifContainer.style.display = 'block';
        isVisible = true;
      }
    });
  });
