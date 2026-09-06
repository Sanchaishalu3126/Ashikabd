document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================
    // AGE
    // =========================================
    
    const ageNumber =
        document.getElementById("ageNumber");
    
    ageNumber.textContent = "20";
    
    
    // =========================================
    // FIXED TIME VALUES
    // =========================================
    
    const hours =
        document.getElementById("hours");
    
    const minutes =
        document.getElementById("minutes");
    
    const seconds =
        document.getElementById("seconds");
    
    
    hours.textContent =
        "175,320";
    
    minutes.textContent =
        "10,519,200";
    
    seconds.textContent =
        "631,152,000";
    
    
    // =========================================
    // NEXT BUTTON
    // =========================================
    
    const nextButton =
        document.getElementById("nextButton");
    
    
    nextButton.addEventListener("click", () => {
        
        nextButton.style.transform =
            "scale(0.92)";
        
        
        setTimeout(() => {
            
            window.location.href =
                "diary.html";
            
        }, 250);
        
    });
    
});