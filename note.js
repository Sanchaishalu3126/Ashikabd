document.addEventListener("DOMContentLoaded", () => {

    const restartButton =
        document.getElementById("restartButton");


    restartButton.addEventListener("click", () => {

        // Remove saved age
        localStorage.removeItem("friendAge");

        // Go back to password page
        window.location.href = "index.html";

    });

});