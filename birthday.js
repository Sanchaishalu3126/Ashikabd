document.addEventListener("DOMContentLoaded", function() {
  
  const startButton = document.getElementById("startButton");
  
  if (!startButton) {
    return;
  }
  
  startButton.addEventListener("click", function() {
    
    // Small button press animation
    startButton.style.transform = "scale(0.94)";
    
    // Go to age page
    setTimeout(function() {
      window.location.href = "age.html";
    }, 300);
    
  });
  
});