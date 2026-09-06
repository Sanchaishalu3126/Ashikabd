document.addEventListener("DOMContentLoaded", () => {
    
    const progressBar = document.getElementById("progressBar");
    const progressPercent = document.getElementById("progressPercent");
    
    let progress = 0;
    
    const duration = 4000;
    const interval = 40;
    
    const increment = 100 / (duration / interval);
    
    
    const loading = setInterval(() => {
        
        progress += increment;
        
        if (progress >= 100) {
            
            progress = 100;
            
            clearInterval(loading);
            
            progressBar.style.width = "100%";
            progressPercent.textContent = "100%";
            
            setTimeout(() => {
                
                window.location.href = "birthday.html";
                
            }, 700);
            
        } else {
            
            progressBar.style.width = progress + "%";
            
            progressPercent.textContent =
                Math.floor(progress) + "%";
            
        }
        
    }, interval);
    
});